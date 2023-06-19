// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import RightSideImage from "../assets/img/fifthSection/img-right.png";
import IconComponent from "../chunks/iconComponent.tsx";
import TitlesComponent from "../chunks/titlesComponent.tsx";
import PreTitlesComponent from "../chunks/preTitlesComponent.tsx";

// Creating and exporting functional component of Fifth Section, as default
export default function FifthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'lg:mt-[200px] mt-[100px] flex lg:flex-row flex-col items-center'}>
            <div className={'lg:w-[50%] w-full'}>
                <PreTitlesComponent centred>| Whats New?</PreTitlesComponent>
                <TitlesComponent centred>What's new about Metaversus?</TitlesComponent>
                <div className={'flex items-start lg:flex-row flex-col gap-[46px]'}>
                    <div>
                        <div className={'bg-[rgba(256,256,256,.08)] w-[70px] h-[70px] text-white mb-[24px] rounded-[24px] flex items-center justify-center'}><IconComponent type={'image'}/></div>
                        <h6 className={'text-white font-bold text-[24px] mb-[16px]'}>A new world</h6>
                        <p className={'text-my-grey leading-[28px] font-normal text-[16px]'}>we have the latest update with new world for you to try never mind</p>
                    </div>
                    <div>
                        <div className={'bg-[rgba(256,256,256,.08)] w-[70px] h-[70px] text-white mb-[24px] rounded-[24px] flex items-center justify-center'}><IconComponent type={'vr-fill'}/></div>
                        <h6 className={'text-white font-bold text-[24px] mb-[16px]'}>More realistic</h6>
                        <p className={'text-my-grey leading-[28px] font-normal text-[16px]'}>In the latest update, your eyes are narrow, making the world more realistic than ever</p>
                    </div>
                </div>
            </div>
            <img className={'lg:w-[50%] w-full lg:mt-0 mt-[50px]'} src={RightSideImage} alt="Image of planet"/>
        </SectionComponent>
    );
}