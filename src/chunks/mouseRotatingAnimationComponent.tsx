// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent.tsx";
import TextImage from "./../assets/img/img-mouse-animation.png";

// Declaring types of prop
interface propsType {className?: string;}

// Creating and exporting functional component of Rotational Animation Component, as default
export default function MouseRotatingAnimationComponent({className}:propsType):JSX.Element {
    // Returning JSX
    return (
       <div className={(className === undefined) ? 'lg:block hidden bg-[rgba(256,256,256,.08)] flex items-center justify-center rounded-full aspect-square backdrop-blur absolute w-[170px]' : `lg:flex hidden w-[130px] flex items-center justify-center bg-[rgba(256,256,256,.08)] aspect-square rounded-full backdrop-blur absolute ${className}`}>
           <img src={TextImage} alt="EXPLORE AND ENTER THE METAVERSE" className={'aspect-ratio w-[100px] animate-spin-slow'}/>
           <span className={'absolute top-[50%] left-[50%] -translate-x-[60%] -translate-y-[50%]'}><IconComponent type={'mouse'}/></span>
       </div>
    );
}