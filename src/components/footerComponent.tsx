// Codes By Mahdi Tasha
// Importing Part
import HolderComponent from "../chunks/holderComponent.tsx";
import TitlesComponent from "../chunks/titlesComponent.tsx";
import ParagraphComponent from "../chunks/paragraphComponent.tsx";
import IconComponent from "../chunks/iconComponent.tsx";

// Creating and exporting functional component of Footer, as default
export default function FooterComponent():JSX.Element {
    return (
        <footer>
            <HolderComponent>
                <div>
                    <TitlesComponent>Enter the metaverse</TitlesComponent>
                    <a href="#">
                        <button className={'active:scale-75 transition'}>
                            <IconComponent type={'vr'} />
                            ENTER METAVERSE
                        </button>
                    </a>
                </div>
                <div>
                    <TitlesComponent small>METAVERSE</TitlesComponent>
                    <ParagraphComponent>Copyright © 2021 - 2022 Metaversus. All rights reserved.</ParagraphComponent>
                    <ul>
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
