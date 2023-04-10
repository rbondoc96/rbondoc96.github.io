import type {
    Dispatch,
    HTMLAttributeAnchorTarget,
    PropsWithChildren,
    ReactNode,
    SetStateAction,
} from 'react';
import {createContext, useCallback, useState} from 'react';
import type {ResponsiveCSSProperty} from '@/core/lib/types';

type NavigationRoute = {
    name: string;
    path: string;
    component?: ReactNode;
    options?: {
        button?: boolean;
        target?: HTMLAttributeAnchorTarget;
        rel?: 'noreferrer' | 'noopener' | 'noreferrer noopener';
    };
};

type ConfigurableNavigationStyles = {
    display: ResponsiveCSSProperty<'display'>;
};

type NavigationContextValue = {
    addStyles: (styles: Partial<ConfigurableNavigationStyles>) => void;
    appendRoutes: (routes: NavigationRoute[]) => void;
    routes: NavigationRoute[];
    setRoutes: Dispatch<SetStateAction<NavigationRoute[]>>;
    setStyles: Dispatch<SetStateAction<ConfigurableNavigationStyles>>;
    styles: ConfigurableNavigationStyles;
};

export const NavigationContext = createContext<NavigationContextValue>({
    addStyles: () => {},
    appendRoutes: () => {},
    routes: [],
    setRoutes: () => {},
    setStyles: () => {},
    styles: {
        display: 'block',
    },
});

export const NavigationProvider = ({children}: PropsWithChildren) => {
    const [routes, setRoutes] = useState<NavigationRoute[]>([]);
    const [styles, setStyles] = useState<ConfigurableNavigationStyles>({
        display: 'block',
    });

    const addStyles = useCallback((styles: Partial<ConfigurableNavigationStyles>) => {
        setStyles((currentStyles) => ({
            ...currentStyles,
            ...styles,
        }));
    }, []);

    const appendRoutes = useCallback((routes: NavigationRoute[]) => {
        setRoutes((currentRoutes) => [...currentRoutes, ...routes]);
    }, []);

    return (
        <NavigationContext.Provider
            value={{
                addStyles,
                appendRoutes,
                routes,
                setRoutes,
                setStyles,
                styles,
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationProvider;
