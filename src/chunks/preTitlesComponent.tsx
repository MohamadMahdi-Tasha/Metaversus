// Codes By Mahdi Tasha
// Declaring types of prop
interface propsType {
    children: any;
    centred?: boolean;
}

// Creating and exporting functional component of pre titles, as default
export default function PreTitlesComponent({children, centred}:propsType):JSX.Element {
    // Returning JSX
    return <h6 className={`
        font-normal text-[14px] text-my-grey mb-[8px] 
        ${(centred) ? ' text-center' : false}`
    }>{children}</h6>
}