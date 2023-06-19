// Codes By Mahdi Tasha
// Declaring types of prop
interface propsType {
    children: any;
    centred?: boolean;
    big?: boolean;
    truncate?: boolean;
}

// Creating and exporting functional component of paragraphs, as default
export default function ParagraphComponent({children, centred, big, truncate}:propsType):JSX.Element {
    // Returning JSX
    return <p className={`
        text-my-grey 
        ${(truncate) ? ' truncate' : false} 
        ${(centred) ? ' text-center' : false} 
        ${(big) ? ' font-extrabold lg:text-[32px] text-[16px] lg:leading-[52px] leading-[23px]' : ' font-normal text-[18px] leading-[32px]'}
    `}>{children}</p>

}