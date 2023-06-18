// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import HeaderComponent from "./components/headerComponent.tsx";
import FirstSectionComponent from './components/firstSectionComponent.tsx';
import bottomImage from "./assets/img/firstSection/img-bottom.png";


// Creating and exporting functional component of whole app, as default
export default function App():JSX.Element {
    // Returning JSX
    return (
        <React.Fragment>
            <img src={bottomImage} alt="ilustration of space" className={'absolute top-[510px] right-0 -z-10'}/>
            
            <HeaderComponent />
            <FirstSectionComponent />
        </React.Fragment>
    );
}