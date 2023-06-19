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
       <div className={(className === undefined) ? 'bg-[rgba(256,256,256,.08)] w-[155px] h-[155px] flex items-center justify-center rounded-full backdrop-blur absolute' : `flex items-center justify-center bg-[rgba(256,256,256,.08)] w-[155px] h-[155px] rounded-full backdrop-blur absolute ${className}`}>
           <img src={TextImage} alt="EXPLORE AND ENTER THE METAVERSE" className={'w-[130px] h-[130px] animate-spin-slow'}/>
           <span className={'absolute top-[50%] left-[50%] -translate-x-[60%] -translate-y-[50%]'}><IconComponent type={'mouse'}/></span>
       </div>
    );
}