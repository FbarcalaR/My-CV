'use client'
import React, { useState, useRef, useEffect } from 'react';
import classes from './ChatMe.module.css';
import TitleSection from '../../UI/TitleSection/TitleSection';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import useIsElementOnScreen from '../../../hooks/useIsElementOnScreen';
import { useSendChatMessage } from '../../../hooks/chat';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const ChatMe = () => {
    const sendChatMessage = useSendChatMessage()
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "Hi! I'm an AI assistant that can answer questions about Fernando's professional background, skills, and experience. Feel free to ask me anything!"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerDiv = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const isSectionVisible = useIsElementOnScreen(containerDiv, 0.9);

    useEffect(() => {
        if (!containerDiv.current || !chatContainerRef.current)
            return;

        if (isSectionVisible) {
            chatContainerRef.current.style.setProperty('transform', 'translateY(0)');
            chatContainerRef.current.style.setProperty('visibility', 'visible');
        }
    }, [containerDiv, isSectionVisible]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const { aiMessage } = await sendChatMessage([...messages, { role: 'user', content: userMessage }]);
            setMessages(prev => [...prev, { role: 'assistant', content: aiMessage }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Sorry, I'm having trouble connecting right now. Please try again later or reach out directly via email."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div ref={containerDiv} className={classes['chat-me-container']}>
            <TitleSection icon={ChatIcon} title={'Chat with/'} subtitle={'AI Assistant'} />
            <div ref={chatContainerRef} className={`${classes['chat-box']} ${classes['shift-effect']}`}>
                <div className={classes['messages-container']}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`${classes['message']} ${
                                message.role === 'user' ? classes['user-message'] : classes['assistant-message']
                            }`}
                        >
                            <div className={classes['message-icon']}>
                                {message.role === 'user' ? (
                                    <PersonIcon className={classes['icon']} />
                                ) : (
                                    <SmartToyIcon className={classes['icon']} />
                                )}
                            </div>
                            <div className={`${classes['message-content']} font-body`}>
                                {message.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className={`${classes['message']} ${classes['assistant-message']}`}>
                            <div className={classes['message-icon']}>
                                <SmartToyIcon className={classes['icon']} />
                            </div>
                            <div className={`${classes['message-content']} ${classes['loading']} font-body`}>
                                <span className={classes['dot']}>.</span>
                                <span className={classes['dot']}>.</span>
                                <span className={classes['dot']}>.</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <div className={classes['input-container']}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask me about Fernando..."
                        className={`${classes['chat-input']} font-body`}
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className={classes['send-button']}
                        aria-label="Send message"
                    >
                        <SendIcon className={classes['send-icon']} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatMe;
