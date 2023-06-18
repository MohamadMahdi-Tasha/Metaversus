// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "../chunks/iconComponent.tsx";

// Creating and exporting functional component of Header in top, as default
export default function HeaderComponent():JSX.Element {
    // Returning JSX
    return (
        <header>
            <IconComponent type={'search'}/>
            <h6>METAVERSUS</h6>
            <IconComponent type={'menu'}/>
        </header>
    );
}