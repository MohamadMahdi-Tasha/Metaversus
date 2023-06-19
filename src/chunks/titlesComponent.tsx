// Codes By Mahdi Tasha
// Declaring types of prop
interface propsType {
    children: any;
    centred?: boolean;
}

// Creating and exporting functional component of titles, as default
export default function TitlesComponent({children,centred}:propsType):JSX.Element {
    // Returning JSX
    return <h1 className={`
        text-[64px] font-bold mb-[50px] text-white 
        ${(centred) ? ' text-center' : false}
    `}>{children}</h1>
}