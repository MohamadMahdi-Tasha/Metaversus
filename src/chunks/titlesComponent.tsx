// Codes By Mahdi Tasha
// Declaring types of prop
interface propsType {
    children: any;
    centred?: boolean;
    small?: boolean;
}

// Creating and exporting functional component of titles, as default
export default function TitlesComponent({children,centred,small}:propsType):JSX.Element {
    // Returning JSX
    return <h1 className={`
        font-bold  text-white
        ${(small) ? ' lg:text-[42px] text-[24px] mb-[16px]' : 'lg:text-[64px] text-[32px] mb-[50px]'}
        ${(centred) ? ' lg:text-center text-left' : false}
    `}>{children}</h1>
}