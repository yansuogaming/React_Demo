/* eslint-disable react-refresh/only-export-components */
import { MENU_TYPES } from '@/data/menuItems';
import React, { createContext, useContext, useState } from 'react'

// Create the context
const HeaderContext = createContext(null);

// Custom hook to use the header context
export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export function HeaderProvider({
    children,
    noBackgroundOnScroll = false
    }) {
        const [background, setBackground] = useState("none");
        const [showSearch, setShowSearch] = useState(false);
        const [logo, setLogo] = useState(null);
        const [color, setColor] = useState(null);
        const [colorIcon, setColorIcon] = useState(null);
        const [isShowNavServices, setShowNavServices] = useState(false);
        const [typeSubmenu, setTypeSubmenu] = useState(null);
        const [rotateEllipsis, setRotateEllipsis] = useState(0);
        const [isVisible, setIsVisible] = useState(false);
        const [isVisibleLang, setIsVisibleLang] = useState(false);
        const [isVisibleSubMenu, setIsVisibleSubMenu] = useState(false);
        const [boxShadow, setBoxShadow] = useState(
            noBackgroundOnScroll ? "none" : "1px 1px 20px #d1d1d1"
        );
    
        const [hoverState, setHoverState] = useState(
            Object.keys(MENU_TYPES).reduce((acc, key) => {
                acc[key] = false;
                acc[`${key}Content`] = false;
                return acc;
            }, {})
        );

        const contextValue = {
            // State values
            background,
            showSearch,
            logo,
            color,
            colorIcon,
            isShowNavServices,
            typeSubmenu,
            rotateEllipsis,
            isVisible,
            isVisibleLang,
            isVisibleSubMenu,
            boxShadow,
            hoverState,
            
            // State setters
            setBackground,
            setShowSearch,
            setLogo,
            setColor,
            setColorIcon,
            setShowNavServices,
            setTypeSubmenu,
            setRotateEllipsis,
            setIsVisible,
            setIsVisibleLang,
            setIsVisibleSubMenu,
            setBoxShadow,
            setHoverState
        };

  
  return(
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContext
