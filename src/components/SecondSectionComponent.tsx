// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import IconComponent from "../chunks/iconComponent.tsx";

// Creating and exporting functional component of Second Section, as default
export default function SecondSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent>
            <h6>| About Metaversus</h6>
            <p>Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today, using only VR devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down</p>
            <IconComponent type={'arow-down'}/>
        </SectionComponent>
    );
}