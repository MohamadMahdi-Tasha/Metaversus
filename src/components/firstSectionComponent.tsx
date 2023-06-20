// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from './../chunks/sectionComponent.tsx';
import IconComponent from "../chunks/iconComponent.tsx";
import BottomImage from './../assets/img/firstSection/img-bottom.png';
import MouseRotatingAnimationComponent from './../chunks/mouseRotatingAnimationComponent.tsx';
import PreTitlesComponent from "../chunks/preTitlesComponent.tsx";
import TitleImage from "./../assets/img/firstSection/img-title.png";

// Creating and exporting functional component of First Section, as default
export default function FirstSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'lg:mt-[50px] mt-0 relative lg:min-h-[auto] min-h-[100vh]'}>
            <div className={'flex lg:flex-row flex-col items-start justify-between z-10'}>
                <PreTitlesComponent>| Home</PreTitlesComponent>
		<img src={TitleImage} alt="METAVERSE MADNESS" className={'lg:w-auto w-[80%] lg:mb-0 mb-[18px]'}/>
                <div className={'flex lg:flex-col flex-row gap-[33px] z-10'}>
                    <a href="#"><IconComponent type={'reddit'}/></a>
                    <a href="#"><IconComponent type={'discord'}/></a>
                    <a href="#"><IconComponent type={'twitter'}/></a>
                    <a href="#"><IconComponent type={'instagram'}/></a>
                </div>
            </div>
            <img src={BottomImage} alt="ilustration of space" className={'lg:absolute lg:mt-0 mt-[32px] static lg:w-auto lg:h-auto w-full h-[250px] object-cover lg:rounded-[0] rounded-[55px] top-[300px] right-0 -z-10'}/>
            <MouseRotatingAnimationComponent className={'top-[630px] right-[50px]'}/>
        </SectionComponent>
    );
}