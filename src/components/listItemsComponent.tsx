// Codes By Mahdi Tasha
// Declaring types of prop
interface propsType {
    number: string;
    children: any;
}

// Creating and exporting functional component of List Items, as default
export default function ListItemsComponent({number, children}:propsType):JSX.Element {
    // Returning JSX
    return (
        <li className={'flex items-center'}>
            <div className={'bg-[rgba(256,256,256,.08)] w-[70px] h-[70px] text-white mr-[30px] rounded-[24px] flex items-center justify-center'}><span>{number}</span></div>
            <p className={'text-my-grey font-normal text-[18px] leading-[32px]'}>{children}</p>
        </li>
    );
}