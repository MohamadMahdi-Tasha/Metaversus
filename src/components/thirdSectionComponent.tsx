// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import AcardeonHolderComponent from "./acardeonHolderComponent.tsx";
import TitlesComponent from "../chunks/titlesComponent.tsx";
import PreTitlesComponent from "../chunks/preTitlesComponent.tsx";

// Creating and exporting functional component of Third Section, as default
export default function ThirdSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'mt-[202px]'}>
            <PreTitlesComponent centred>| The World</PreTitlesComponent>
            <TitlesComponent centred>Choose the world you want to explore</TitlesComponent>
            <AcardeonHolderComponent />
        </SectionComponent>
    );
}