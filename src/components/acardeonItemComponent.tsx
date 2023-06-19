// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "../chunks/iconComponent.tsx";

// Declaring types of prop
interface propsType {
    bg: string;
    name: string;
    isOpened: boolean;
    onClick: any;
}

// Creating and exporting functional component of acardeon Item part in third section, as default
export default function AcardeonItemComponent({bg, name, isOpened, onClick}:propsType): JSX.Element {
    // returning jsx
    return (
        <div onClick={onClick} data-opened={isOpened} className={'text-white relative flex overflow-hidden flex-col justify-end cursor-pointer rounded-[24px] p-[32px] transition-all h-[563px] data-[opened="true"]:lg:w-[370px] data-[opened="false"]:lg:w-[170px] [&>div]:lg:data-[opened="false"]:opacity-0 [&>span:first-of-type]:lg:data-[opened="false"]:opacity-0 [&>span:last-of-type]:lg:data-[opened="false"]:rotate-[-90deg] [&>span:last-of-type]:lg:data-[opened="false"]:ml-[70px]'}>
            <img src={bg} className={'-z-10 absolute top-0 left-0 w-full h-full object-cover'} alt="Bg"/>
            <div className={'w-[60px] mb-[16px] h-[60px] flex items-center justify-center transition-all rounded-[24px] backdrop-blur border border-white/20'}><IconComponent type='vr'/></div>
            <span className={'block text-[16px] font-normal transition-all truncate'}>ENTER METAVERSE</span>
            <span className={'block text-[32px] whitespace-nowrap font-bold transition-all origin-bottom-left'}>{(name.length < 14) ? name : `${name.slice(0,14)} ...`}</span>
        </div>
    );
}