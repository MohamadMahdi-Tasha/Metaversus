// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from './../chunks/sectionComponent.tsx';
import IconComponent from "../chunks/iconComponent.tsx";
import BottomImage from './../assets/img/firstSection/img-bottom.png';

// Creating and exporting functional component of First Section, as default
export default function FirstSectionComponent() {
    // Returning JSX
    return (
        <SectionComponent className={'mt-[50px] relative'}>
            <div className={'flex items-start justify-between z-10'}>
                <h6 className={'font-[14px] font-normal text-my-grey'}>| Home</h6>
                <h1 className={'text-[144px] font-bold text-white leading-[158px] z-10'}>
                    METAVERSE
                    <span className={'flex items-center'}>
                    MA
                    <svg className={'ml-[18px] mr-[8px] -mb-[6px]'} width="212" height="108" viewBox="0 0 212 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 9H162C184.644 9 203 27.3563 203 50V58C203 80.6437 184.644 99 162 99H9V9Z" stroke="white" stroke-width="18"/>
                    </svg>
                    NESS
                </span>
                </h1>
                <div className={'flex flex-col gap-[33px] z-10'}>
                    <a href="#"><IconComponent type={'reddit'}/></a>
                    <a href="#"><IconComponent type={'discord'}/></a>
                    <a href="#"><IconComponent type={'twitter'}/></a>
                    <a href="#"><IconComponent type={'instagram'}/></a>
                </div>
            </div>
            <img src={BottomImage} alt="ilustration of space" className={'absolute top-[300px] right-0 -z-10'}/>
        </SectionComponent>
    );
}