'use client'
import React, { useCallback } from 'react';

export function useSendChatMessage() {
  return useCallback(async (messages: any)=> {
      try {
          // Call our backend API instead of OpenAI directly
          const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to get response from server');
          }

          const data = await response.json();
          return { aiMessage: data.aiMessage };
        } catch (error) {
          console.error('Chat API error:', error);
          throw new Error('Unable to connect to chat server. Please make sure the server is running.');
        }
  }, [])  
}
