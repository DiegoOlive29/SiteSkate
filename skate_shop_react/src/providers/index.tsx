import React from "react";
import { MainFunctionProviders } from "../context/MainContext";

interface ProviderType{
    children :React.ReactNode;
}

function Providers({children}:ProviderType){
    return(
        <>
        <MainFunctionProviders>
        {children}
        </MainFunctionProviders>
        </>
    )
}
export default Providers