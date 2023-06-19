// Codes By Mahdi Tasha
// Importing Part
import {useState} from "react";
import AcardeonItemComponent from './acardeonItemComponent.tsx';
import image1 from '../assets/img/thirdSection/img-1.jpg';
import image2 from '../assets/img/thirdSection/img-2.jpg';
import image3 from '../assets/img/thirdSection/img-3.jpg';
import image4 from '../assets/img/thirdSection/img-4.jpg';
import image5 from '../assets/img/thirdSection/img-5.jpg';

// Creating and exporting functional component of acardeon part in third section, as default
export default function AcardeonHolderComponent():JSX.Element {
    // Creating States
    const [isItemOpened1,setItemOpened1] = useState(true);
    const [isItemOpened2,setItemOpened2] = useState(false);
    const [isItemOpened3,setItemOpened3] = useState(false);
    const [isItemOpened4,setItemOpened4] = useState(false);
    const [isItemOpened5,setItemOpened5] = useState(false);

    // returning jsx
    return (
        <div className={'flex lg:flex-row flex-col gap-[32px] justify-center transition'}>
            <AcardeonItemComponent onClick={() => {setItemOpened1(true);setItemOpened2(false);setItemOpened3(false);setItemOpened4(false);setItemOpened5(false);}} bg={image1} name={'The Hogwartsasdasdasdasdasda'} isOpened={isItemOpened1}/>
            <AcardeonItemComponent onClick={() => {setItemOpened1(false);setItemOpened2(true);setItemOpened3(false);setItemOpened4(false);setItemOpened5(false);}} bg={image2} name={'The Upside Down'} isOpened={isItemOpened2}/>
            <AcardeonItemComponent onClick={() => {setItemOpened1(false);setItemOpened2(false);setItemOpened3(true);setItemOpened4(false);setItemOpened5(false);}} bg={image3} name={'Kadirojo Permai'} isOpened={isItemOpened3}/>
            <AcardeonItemComponent onClick={() => {setItemOpened1(false);setItemOpened2(false);setItemOpened3(false);setItemOpened4(true);setItemOpened5(false);}} bg={image4} name={'Paradise Island'} isOpened={isItemOpened4}/>
            <AcardeonItemComponent onClick={() => {setItemOpened1(false);setItemOpened2(false);setItemOpened3(false);setItemOpened4(false);setItemOpened5(true);}} bg={image5} name={'Hawkins Labs'} isOpened={isItemOpened5}/>
        </div>
    );
}