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
            <a href="#" className={'flex items-center'}>
                <img className={'w-[270px] h-[250px] object-cover rounded-[32px] mr-[62px]'} src={img} alt="Image of insight"/>
                <div className={'mr-[92px]'}>
                    <TitlesComponent small>{title}</TitlesComponent>
                    <ParagrapchComponent>{paragraph}</ParagrapchComponent>
                </div>
                <IconComponent type={'circle-arrow-top-right'}/>
            </a>
        </li>
    );
}