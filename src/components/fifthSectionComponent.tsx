// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import RightSideImage from "../assets/img/fifthSection/img-right.png";
import IconComponent from "../chunks/iconComponent.tsx";

// Creating and exporting functional component of Fifth Section, as default
export default function FifthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'mt-[200px] flex items-center'}>
            <div className={'w-[50%]'}>
                <h6 className={'font-normal text-[14px] text-my-grey mb-[8px]'}>| Whats New?</h6>
                <h1 className={'text-white text-[64px] font-bold mb-[24px] leading-[76px]'}>What's new about Metaversus?</h1>
                <div className={'flex items-start gap-[46px]'}>
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
            <img className={'w-[50%]'} src={RightSideImage} alt="Image of planet"/>
        </SectionComponent>
    );
}