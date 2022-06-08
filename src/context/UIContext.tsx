import React, {FunctionComponent, createContext, useState} from "react"
import {StateHandler} from "@/types"
import {UITheme} from "@/types/enum"

export interface IUIContext {
    theme: [UITheme, StateHandler<UITheme>],
    mobile: [boolean, StateHandler<boolean>],
    sidebar: [boolean, StateHandler<boolean>],
    navbar: [boolean, StateHandler<boolean>]
}

interface IUIProvider {
    children: React.ReactNode
}

const getInitialUIThemeFromTime = (): UITheme => {
    let today: Date = new Date()
    let hours: number = today.getHours()

    if(hours < 17 && hours > 6) { 
        return UITheme.light
    } else { 
        return UITheme.dark
    }
}

/*  
    I don't want to pass a default value, so this
    Tells TypeScript to treat {} as IUIContext. 
*/
const UIContext = createContext<IUIContext>({} as IUIContext)

const UIProvider: FunctionComponent<IUIProvider> = ({children}) => {
    const [uiTheme, setUITheme] = useState<UITheme>(getInitialUIThemeFromTime())
    const [isUIMobile, setIsUIMobile] = useState<boolean>(window.innerWidth < 960)
    const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false)
    const [isNavBarShown, setIsNavBarShown] = useState<boolean>(true)

    return(
        <UIContext.Provider value={{
            theme: [uiTheme, setUITheme],
            mobile: [isUIMobile, setIsUIMobile],
            sidebar: [isSidebarActive, setIsSidebarActive],
            navbar: [isNavBarShown, setIsNavBarShown],
        }}>
            {children}
        </UIContext.Provider>
    )
}

export {UIContext, UIProvider}
