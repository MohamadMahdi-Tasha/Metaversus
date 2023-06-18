// Codes By Mahdi Tasha
// Declaring types of props
interface propsTypes {
    children: any;
    className?: string;
}

// Creating and exporting functional component of Holder which holds everything, as default
export default function HolderComponent({children, className}:propsTypes):JSX.Element {
    // Returning JSX
    return (
        <div className={(className === undefined) ? 'max-w-page-holder mx-auto px-[20px] py-[30px]' : `max-w-page-holder mx-auto px-[20px] py-[30px] ${className}`}>
            {children}
        </div>
    );
}