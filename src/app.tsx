// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import HeaderComponent from "./components/headerComponent.tsx";
import FirstSectionComponent from './components/firstSectionComponent.tsx';
import SecondSectionComponent from "./components/secondSectionComponent.tsx";
import ThirdSectionComponent from './components/thirdSectionComponent.tsx';

// Creating and exporting functional component of whole app, as default
export default function App():JSX.Element {
    // Returning JSX
    return (
        <React.Fragment>
            <HeaderComponent />
            <FirstSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
        </React.Fragment>
    );
}