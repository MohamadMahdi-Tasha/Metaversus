// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "../chunks/iconComponent.tsx";
import HolderComponent from "../chunks/holderComponent.tsx";

// Creating and exporting functional component of Header in top, as default
export default function HeaderComponent():JSX.Element {
    // Returning JSX
    return (
        <header>
            <HolderComponent className={'flex items-center justify-between'}>
                <button className={'active:scale-75 transition'}><IconComponent type={'search'}/></button>
                <a href={'#'} className={'text-white lg:block hidden font-bold font-[24px]'}>METAVERSUS</a>
                <button className={'active:scale-75 transition'}><IconComponent type={'menu'}/></button>
            </HolderComponent>
        </header>
    );
}