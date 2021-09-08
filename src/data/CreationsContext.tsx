import { Creation } from "./common";
import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { getAllCreations } from './creations';

interface Props {
    children: ReactNode;
}

const CreationsContext = createContext<Creation[]>([]);

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

export default function useCreations() {
    return useContext(CreationsContext);
}
