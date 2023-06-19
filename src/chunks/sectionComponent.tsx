// Codes By Mahdi Tasha
// Importing Part
import HolderComponent from "./holderComponent.tsx";

// Declaring types of props
interface propsTypes {
    children: any;
    className?: string;
}

// Creating and exporting functional component of Sections, as default
export default function SectionComponent({children,className}:propsTypes):JSX.Element {
    // Returning JSX
    return (
        <section>
            {
                (className) === undefined
                    ? <HolderComponent>{children}</HolderComponent>
                    : <HolderComponent className={className}>{children}</HolderComponent>
            }
        </section>
    );
}