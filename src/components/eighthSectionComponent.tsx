// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import MouseRotatingAnimationComponent from "../chunks/mouseRotatingAnimationComponent.tsx";
import RightSideImage from "../assets/img/eighthSection/img-right.png";

// Creating and exporting functional component of Eighth Section, as default
export default function EighthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'mt-[200px] relative flex'}>
            <figure className={'w-[370px] h-[610px] mr-[10px] flex flex-col p-[30px] justify-end items-start rounded-[32px] border border-[#6A6A6A] bg-pink-gradiant'}>
                <h5 className={'text-[32px] font-bold mb-[8px] text-white'}>Samantha</h5>
                <h6 className={'text-[18px] font-normal mb-[24px] text-white'}>Founder Metaverus</h6>
                <blockquote><p className={'text-[24px] font-normal text-white'}>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p></blockquote>
            </figure>
            <MouseRotatingAnimationComponent className={'absolute top-[60px] left-[280px]'} />
            <img className={'h-[610px] w-[768px] rounded-[32px]'} src={RightSideImage} alt="illustration of space"/>
        </SectionComponent>
    );
}