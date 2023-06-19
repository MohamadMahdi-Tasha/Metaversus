// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import BottomImage from "../assets/img/sixthSection/img-bottom.png";
import PreTitlesComponent from "../chunks/preTitlesComponent.tsx";
import TitlesComponent from "../chunks/titlesComponent.tsx";

// Creating and exporting functional component of Sixth Section, as default
export default function SixthSectionComponent():JSX.Element {
    // Returning JSX
    return(
        <SectionComponent className={'lg:mt-[200px] mt-[100px]'}>
            <PreTitlesComponent centred>| People on the World</PreTitlesComponent>
            <TitlesComponent centred>Track friends around you and invite them to play together in the same world</TitlesComponent>
            <img src={BottomImage} alt="ilustration of People on the World"/>
        </SectionComponent>
    );
}