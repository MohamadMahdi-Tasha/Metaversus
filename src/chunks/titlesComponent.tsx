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
        ${(small) ? ' text-[42px] mb-[16px]' : 'text-[64px] mb-[50px]'}
        ${(centred) ? ' text-center' : false}
    `}>{children}</h1>
}