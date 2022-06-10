import React, {FunctionComponent, createContext, useState, useMemo} from 'react';
import {StateHandler} from '@/types';
import UITheme from '@/types/enum';

export interface IUIContext {
    theme: [UITheme, StateHandler<UITheme>];
    mobile: [boolean, StateHandler<boolean>];
    sidebar: [boolean, StateHandler<boolean>];
    navbar: [boolean, StateHandler<boolean>];
}

interface IUIProvider {
    children: React.ReactNode
}

const getInitialUIThemeFromTime = (): UITheme => {
    const today: Date = new Date();
    const hours: number = today.getHours();

    if (hours < 17 && hours > 6) {
        return UITheme.light;
    }
    return UITheme.dark;
};

/*
    I don't want to pass a default value, so this
    Tells TypeScript to treat {} as IUIContext.
*/
const UIContext = createContext<IUIContext>({} as IUIContext);

const UIProvider: FunctionComponent<IUIProvider> = ({children}) => {
    const [uiTheme, setUITheme] = useState<UITheme>(getInitialUIThemeFromTime());
    const [isUIMobile, setIsUIMobile] = useState<boolean>(window.innerWidth < 960);
    const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
    const [isNavBarShown, setIsNavBarShown] = useState<boolean>(true);

    const contextValue: IUIContext = useMemo(() => ({
        theme: [uiTheme, setUITheme],
        mobile: [isUIMobile, setIsUIMobile],
        sidebar: [isSidebarActive, setIsSidebarActive],
        navbar: [isNavBarShown, setIsNavBarShown],
    }), [uiTheme, isUIMobile, isSidebarActive, isNavBarShown]);

    return (
        <UIContext.Provider value={contextValue}>
            {children}
        </UIContext.Provider>
    );
};

export default UIContext;
export {UIProvider};
