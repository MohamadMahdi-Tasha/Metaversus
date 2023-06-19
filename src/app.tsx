// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import HeaderComponent from "./components/headerComponent.tsx";
import FirstSectionComponent from './components/firstSectionComponent.tsx';
import SecondSectionComponent from "./components/secondSectionComponent.tsx";
import ThirdSectionComponent from './components/thirdSectionComponent.tsx';
import FourthSectionComponent from "./components/fourthSectionComponent.tsx";
import FifthSectionComponent from "./components/fifthSectionComponent.tsx";
import SixthSectionComponent from "./components/sixthSectionComponent.tsx";
import SeventhSectionComponent from "./components/seventhSectionComponent.tsx";
import EighthSection from "./components/eighthSectionComponent.tsx";
import FooterComponent from "./components/footerComponent.tsx";

// Creating and exporting functional component of whole app, as default
export default function App():JSX.Element {
    // Returning JSX
    return (
        <React.Fragment>
            <HeaderComponent />
            <FirstSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
            <SixthSectionComponent />
            <SeventhSectionComponent />
            <EighthSection />
            <FooterComponent />
        </React.Fragment>
    );
}