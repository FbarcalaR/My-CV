import React, { FunctionComponent, useState } from 'react';
import { SectionsContext } from './sections-context';

interface Props {
    children?: React.ReactNode;
};

export enum SectionIds {
    Home = 'home',
    Experience = 'experience',
    Studies = 'studies',
    Skills = 'skills',
    Projects = 'projects',
    AboutMe = 'about-me',
    ChatMe = 'chat-me',
}

const sections = new Map<string, React.RefObject<any>>();

const SectionsContextProvider: FunctionComponent<Props> = (props) => {
    const [activeButton, setActiveButton] = useState<string>('');

    return (
        <SectionsContext.Provider value={ { sections, activeButton, setActiveButton} }>
            {props.children}
        </SectionsContext.Provider>
    );
}

export default SectionsContextProvider;