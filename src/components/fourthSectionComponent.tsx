// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import ListItemsComponent from "./listItemsComponent.tsx";
import LeftSideImage from "../assets/img/fourthSection/img-left.png";
import PreTitlesComponent from "../chunks/preTitlesComponent.tsx";
import TitlesComponent from "../chunks/titlesComponent.tsx";

// Creating and exporting functional component of Fourth Section, as default
export default function FourthSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'lg:mt-[200px] mt-[100px] flex lg:flex-row flex-col items-center'}>
            <img className={'lg:w-[50%] w-full'} src={LeftSideImage} alt="Image of planet"/>
            <div className={'lg:w-[50%] w-full'}>
                <PreTitlesComponent>| How Metaverus Works</PreTitlesComponent>
                <TitlesComponent>Get started with just a few clicks</TitlesComponent>
                <ul className={'flex flex-col gap-[24px]'}>
                    <ListItemsComponent number={'01'}>Find a world that suits you and you want to enter</ListItemsComponent>
                    <ListItemsComponent number={'02'}>Enter the world by reading basmalah to be safe</ListItemsComponent>
                    <ListItemsComponent number={'03'}>No need to beat around the bush, just stay on the gas and have fun</ListItemsComponent>
                </ul>
            </div>
        </SectionComponent>
    );
}