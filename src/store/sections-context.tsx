import React from "react";

interface SectionsContextObject {
    sections: Map<string, React.RefObject<any>>;
    activeButton: string;
    setActiveButton: (key: string) => void;
}

const defaultValue = {
    sections: new Map<string, React.RefObject<any>>(),
    activeButton: '',
    setActiveButton: (key: string) => {}
};

export const SectionsContext = React.createContext<SectionsContextObject>(defaultValue);
