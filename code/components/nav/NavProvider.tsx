import { ComponentChildren, createContext } from "preact";
import { useContext } from "preact/hooks";

export interface NavState {
    active?: string;
    current: string;
}

export const Nav = createContext<NavState>({ current: "/" });

export const useNav = () => useContext(Nav);

interface Properties {
    children: ComponentChildren;
    state: NavState;
}

export const NavProvider = ({ children, state }: Properties) => {
    return (
        <Nav.Provider value={state}>
            {children}
        </Nav.Provider>
    );
};
