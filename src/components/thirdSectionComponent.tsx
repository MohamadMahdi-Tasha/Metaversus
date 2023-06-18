// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";

// Creating and exporting functional component of Third Section, as default
export default function ThirdSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'mt-[202px]'}>
            <h6 className={'font-normal text-[14px] text-center text-my-grey mb-[8px]'}>| The World</h6>
            <h1 className={'text-[64px] font-bold text-center mb-[50px] text-white'}>Choose the world you want to explore</h1>
        </SectionComponent>
    );
}