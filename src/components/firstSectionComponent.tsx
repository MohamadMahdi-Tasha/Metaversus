// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from './../chunks/sectionComponent.tsx';
import IconComponent from "../chunks/iconComponent.tsx";
import BottomImage from './../assets/img/firstSection/img-bottom.png';
import MouseRotatingAnimationComponent from './../chunks/mouseRotatingAnimationComponent.tsx';
import PreTitlesComponent from "../chunks/preTitlesComponent.tsx";

// Creating and exporting functional component of First Section, as default
export default function FirstSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'lg:mt-[50px] mt-0 relative lg:min-h-[auto] min-h-[100vh]'}>
            <div className={'flex lg:flex-row flex-col items-start justify-between z-10'}>
                <PreTitlesComponent>| Home</PreTitlesComponent>
                <h1 className={'lg:text-[144px] text-[50px] font-bold text-white lg:leading-[158px] leading-[50px] z-10 lg:mb-0 mb-[18px]'}>
                    METAVERSE
                    <span className={'flex items-center'}>
                    MA
                    <svg className={'lg:ml-[18px] lg:mr-[8px] lg:-mb-[6px] mb-0 lg:w-[212px] w-[110px] lg:h-[108px] h-[40px]'} viewBox="0 0 212 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 9H162C184.644 9 203 27.3563 203 50V58C203 80.6437 184.644 99 162 99H9V9Z" stroke="white" stroke-width="18"/>
                    </svg>
                    NESS
                </span>
                </h1>
                <div className={'flex lg:flex-col flex-row gap-[33px] z-10'}>
                    <a href="#"><IconComponent type={'reddit'}/></a>
                    <a href="#"><IconComponent type={'discord'}/></a>
                    <a href="#"><IconComponent type={'twitter'}/></a>
                    <a href="#"><IconComponent type={'instagram'}/></a>
                </div>
            </div>
            <img src={BottomImage} alt="ilustration of space" className={'lg:absolute lg:mt-0 mt-[32px] static lg:w-auto lg:h-auto w-full h-[250px] object-cover rounded-[55px] top-[300px] right-0 -z-10'}/>
            <MouseRotatingAnimationComponent className={'lg:top-[630px] top-[367px] right-[50px]'}/>
        </SectionComponent>
    );
}