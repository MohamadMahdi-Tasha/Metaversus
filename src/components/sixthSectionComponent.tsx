// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import BottomImage from "../assets/img/sixthSection/img-bottom.png";

// Creating and exporting functional component of Sixth Section, as default
export default function SixthSectionComponent():JSX.Element {
    // Returning JSX
    return(
        <SectionComponent className={'mt-[200px]'}>
            <h6 className={'font-normal text-[14px] text-my-grey mb-[8px] text-center'}>| People on the World</h6>
            <h1 className={'text-[64px] font-bold text-center mb-[68px] text-white'}>Track friends around you and invite them to play together in the same world</h1>
            <img src={BottomImage} alt="ilustration of People on the World"/>
        </SectionComponent>
    );
}