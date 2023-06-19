// Codes By Mahdi Tasha
// importing Part
import IconComponent from "../chunks/iconComponent.tsx";
import TitlesComponent from "../chunks/titlesComponent.tsx";
import ParagrapchComponent from "../chunks/paragraphComponent.tsx";

// Declaring types of prop
interface propsType {
    img: string;
    title: string;
    paragraph: string;
}

// Creating and exporting functional component of Insight Items, as default
export default function InsightItemComponent({img,title,paragraph}:propsType):JSX.Element {
    // Returning JSX
    return (
        <li>
            <a href="#" className={'flex lg:flex-row flex-col items-center justify-start'}>
                <img className={'lg:w-[270px] w-full h-[250px] object-cover rounded-[32px] lg:mr-[62px] mr-0 lg:mb-0 mb-[18px]'} src={img} alt="Image of insight"/>
                <div className={'lg:mr-[92px] mr-0 lg:mb-0 mb-[20px]'}>
                    <TitlesComponent small>{title}</TitlesComponent>
                    <ParagrapchComponent>{paragraph}</ParagrapchComponent>
                </div>
                <IconComponent className={'lg:block hidden'} type={'circle-arrow-top-right'}/>
            </a>
        </li>
    );
}