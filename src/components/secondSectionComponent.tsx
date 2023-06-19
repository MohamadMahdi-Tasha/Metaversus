// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import IconComponent from "../chunks/iconComponent.tsx";
import PreTitlesComponent from "../chunks/preTitlesComponent.tsx";
import ParagraphComponent from "../chunks/paragraphComponent.tsx";

// Creating and exporting functional component of Second Section, as default
export default function SecondSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'lg:mt-[600px] mt-0 text-center flex flex-col items-center'}>
            <PreTitlesComponent centred>| About Metaversus</PreTitlesComponent>
            <ParagraphComponent centred big><span className={'text-white font-bold'}>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span className={'text-white font-bold'}>madness of the metaverse of today</span>, using only <span className={'text-white font-bold'}>VR</span> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <span className={'text-white font-bold'}>explore</span> the madness of the metaverse by scrolling down</ParagraphComponent>
            <span className={'mt-[18px]'}><IconComponent type={'arrow-down'}/></span>
        </SectionComponent>
    );
}