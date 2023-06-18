// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from './../chunks/sectionComponent.tsx';
import IconComponent from "../chunks/iconComponent.tsx";
import titleImage from './../assets/img/firstSection/img-title.png';
import bottomImage from './../assets/img/firstSection/img-bottom.png';

// Creating and exporting functional component of First Section, as default
export default function FirstSectionComponent() {
    // Returning JSX
    return (
        <SectionComponent>
            <h6>| Home</h6>
            <div>
                <a href="#"><IconComponent type={'reddit'}/></a>
                <a href="#"><IconComponent type={'discord'}/></a>
                <a href="#"><IconComponent type={'twitter'}/></a>
                <a href="#"><IconComponent type={'instagram'}/></a>
            </div>
            <img src={titleImage} alt="METAVERSE MADNESS"/>
            <img src={bottomImage} alt="ilustration of space"/>
        </SectionComponent>
    );
}