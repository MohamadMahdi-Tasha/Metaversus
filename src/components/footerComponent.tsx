// Codes By Mahdi Tasha
// Importing Part
import HolderComponent from "../chunks/holderComponent.tsx";
import ParagraphComponent from "../chunks/paragraphComponent.tsx";
import IconComponent from "../chunks/iconComponent.tsx";

// Creating and exporting functional component of Footer, as default
export default function FooterComponent():JSX.Element {
    return (
        <footer className={'lg:mt-[200px] mt-[100px]'}>
            <HolderComponent>
                <div className={'flex lg:flex-row flex-col lg:items-center gap-[20px] lg:justify-between justify-start lg:pb-[100px] pb-[50px] border-b border-b-white/10'}>
                    <h1 className={'font-bold text-white lg:text-[64px] text-[32px] mb-0'}>Enter the metaverse</h1>
                    <a href="#">
                        <button tabIndex={-1} className={'active:scale-75 lg:w-auto w-full transition bg-my-blue rounded-[50rem] lg:p-[22px] p-[18px] flex text-white'}>
                            <IconComponent type={'vr'} />
                            <span className={'ml-[12px]'}>ENTER METAVERSE</span>
                        </button>
                    </a>
                </div>
                <div className={'py-[50px] flex lg:flex-row flex-col lg:items-center items-start lg:justify-between justify-start gap-[20px] '}>
                    <h1 className={'font-extrabold text-white text-[24px] mb-0'}>METAVERSUS</h1>
                    <ParagraphComponent>Copyright © 2021 - 2022 Metaversus. All rights reserved.</ParagraphComponent>
                    <ul className={'flex items-center gap-[30px] lg:w-auto w-full'}>
                        <li><a href="#"><IconComponent type={'twitter'} /></a></li>
                        <li><a href="#"><IconComponent type={'linkedin'} /></a></li>
                        <li><a href="#"><IconComponent type={'instagram'} /></a></li>
                        <li><a href="#"><IconComponent type={'facebook'} /></a></li>
                    </ul>
                </div>
            </HolderComponent>
        </footer>
    );
}
