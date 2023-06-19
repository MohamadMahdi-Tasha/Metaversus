// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import MouseRotatingAnimationComponent from "../chunks/mouseRotatingAnimationComponent.tsx";
import RightSideImage from "../assets/img/eighthSection/img-right.png";

// Creating and exporting functional component of Eighth Section, as default
export default function EighthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'lg:mt-[200px] mt-[100px] relative flex lg:flex-row flex-col'}>
            <figure className={'lg:w-[370px] w-full h-[610px] lg:mr-[10px] mr-0 lg:mb-0 mb-[10px] flex flex-col p-[30px] justify-end items-start rounded-[32px] border border-[#6A6A6A] bg-pink-gradiant bg-left-top bg-contain bg-no-repeat'}>
                <h5 className={'lg:text-[32px] text-[18px] font-bold mb-[8px] text-white'}>Samantha</h5>
                <h6 className={'lg:text-[18px] text-[16px] font-normal mb-[24px] text-white'}>Founder Metaverus</h6>
                <blockquote><p className={'lg:text-[24px] text-[20px] font-normal text-white'}>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p></blockquote>
            </figure>
            <MouseRotatingAnimationComponent className={'absolute lg:top-[60px] top-[550px] left-[280px]'} />
            <img className={'h-[610px] mt-[10px] lg:w-[768px] w-full object-cover rounded-[32px]'} src={RightSideImage} alt="illustration of space"/>
        </SectionComponent>
    );
}