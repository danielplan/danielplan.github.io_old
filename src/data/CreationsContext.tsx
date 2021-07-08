import { Creation } from "./common";
import { createContext, ReactNode, useEffect, useState } from "react";
import { getAllCreations } from './creations';

interface Props {
    children: ReactNode;
}

export const CreationsContext = createContext<Creation[]>([]);

export function CreationProvider({ children }: Props) {
    const [creations, setCreations] = useState<Creation[]>([]);
    
    useEffect(() => {
        setCreations(getAllCreations());
    }, []);

    return (
        <CreationsContext.Provider value={creations}>
            {children}
        </CreationsContext.Provider>
    );
}
