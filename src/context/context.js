'use client'

import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext({});

export default function AppContextProvider ({ children }){
    const [isOpenSkills, setIsOpenSkills] = useState(false);
    console.log(isOpenSkills)

    const handleOpenSkills = () => {
        setIsOpenSkills(!isOpenSkills);
    };

    const handleCloseSkills = () => {
        setIsOpenSkills(false);
    };

    return (
        <AppContext.Provider value={{ isOpenSkills, handleOpenSkills, handleCloseSkills }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
