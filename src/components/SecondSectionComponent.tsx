// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import IconComponent from "../chunks/iconComponent.tsx";

// Creating and exporting functional component of Second Section, as default
export default function SecondSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'mt-[600px] text-center flex flex-col items-center'}>
            <h6 className={'font-normal text-[14px] text-my-grey mb-[8px]'}>| About Metaversus</h6>
            <p className={'text-my-grey text-[32px] mb-[26px] leading-[57.6px]'}><span className={'text-white font-bold'}>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span className={'text-white font-bold'}>madness of the metaverse of today</span>, using only <span className={'text-white font-bold'}>VR</span> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <span className={'text-white font-bold'}>explore</span> the madness of the metaverse by scrolling down</p>
            <IconComponent type={'arrow-down'}/>
        </SectionComponent>
    );
}