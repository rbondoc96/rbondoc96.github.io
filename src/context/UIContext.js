import React, {createContext, useState} from "react"

export const UIContext = createContext()

export function UIProvider({children}) {

    const [uiTheme, setUITheme] = useState("light")
    const [isUIMobile, setIsUIMobile] = useState(window.innerWidth < 960)
    const [isSidebarActive, setIsSidebarActive] = useState(false)
    const [isNavBarShown, setIsNavBarShown] = useState(true)

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