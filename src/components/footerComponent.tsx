// Codes By Mahdi Tasha
// Importing Part
import HolderComponent from "../chunks/holderComponent.tsx";
import ParagraphComponent from "../chunks/paragraphComponent.tsx";
import IconComponent from "../chunks/iconComponent.tsx";

// Creating and exporting functional component of Footer, as default
export default function FooterComponent():JSX.Element {
    return (
        <footer>
            <HolderComponent>
                <div className={'flex items-center justify-between pb-[100px] border-b border-b-white/10'}>
                    <h1 className={'font-bold text-white text-[64px] mb-0'}>Enter the metaverse</h1>
                    <a href="#">
                        <button className={'active:scale-75 transition bg-my-blue rounded-[50rem] p-[22px] flex text-white'}>
                            <IconComponent type={'vr'} />
                            <span className={'ml-[12px]'}>ENTER METAVERSE</span>
                        </button>
                    </a>
                </div>
                <div className={'py-[50px] flex items-center justify-between'}>
                    <h1 className={'font-extrabold text-white text-[24px] mb-0'}>METAVERSUS</h1>
                    <ParagraphComponent>Copyright © 2021 - 2022 Metaversus. All rights reserved.</ParagraphComponent>
                    <ul className={'flex items-center gap-[30px]'}>
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
