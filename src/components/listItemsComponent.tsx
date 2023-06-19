// Codes By Mahdi Tasha
// Importing Part
import ParagraphComponent from "../chunks/paragraphComponent.tsx";

// Declaring types of prop
interface propsType {
    number: string;
    children: any;
}

// Creating and exporting functional component of List Items, as default
export default function ListItemsComponent({number, children}:propsType):JSX.Element {
    // Returning JSX
    return (
        <li className={'flex items-center'}>
            <div className={'bg-[rgba(256,256,256,.08)] mr-[30px] px-[25px] py-[25px] col-span-1 aspect-square text-white rounded-[24px] flex items-center justify-center'}><span>{number}</span></div>
            <ParagraphComponent>{children}</ParagraphComponent>
        </li>
    );
}