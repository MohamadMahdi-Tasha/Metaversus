// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import HeaderComponent from "./components/headerComponent.tsx";
import FirstSectionComponent from './components/firstSectionComponent.tsx';

// Creating and exporting functional component of whole app, as default
export default function App():JSX.Element {
    // Returning JSX
    return (
        <React.Fragment>
            <HeaderComponent />
            <FirstSectionComponent />
        </React.Fragment>
    );
}