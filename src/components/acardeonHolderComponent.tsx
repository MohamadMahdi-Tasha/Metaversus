// Codes By Mahdi Tasha
// Importing Part
import {useState} from "react";
import AcardeonItemComponent from './acardeonItemComponent.tsx';

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
        <div className={'flex gap-[32px] justify-center transition'}>
            <AcardeonItemComponent onClick={() => {setItemOpened1(true);setItemOpened2(false);setItemOpened3(false);setItemOpened4(false);setItemOpened5(false);}} bg={'../src/assets/img/thirdSection/img-1.jpg'} name={'The Hogwartsasdasdasdasdasda'} isOpened={isItemOpened1}/>
            <AcardeonItemComponent onClick={() => {setItemOpened1(false);setItemOpened2(true);setItemOpened3(false);setItemOpened4(false);setItemOpened5(false);}} bg={'../src/assets/img/thirdSection/img-2.jpg'} name={'The Upside Down'} isOpened={isItemOpened2}/>
            <AcardeonItemComponent onClick={() => {setItemOpened1(false);setItemOpened2(false);setItemOpened3(true);setItemOpened4(false);setItemOpened5(false);}} bg={'../src/assets/img/thirdSection/img-3.jpg'} name={'Kadirojo Permai'} isOpened={isItemOpened3}/>
            <AcardeonItemComponent onClick={() => {setItemOpened1(false);setItemOpened2(false);setItemOpened3(false);setItemOpened4(true);setItemOpened5(false);}} bg={'../src/assets/img/thirdSection/img-4.jpg'} name={'Paradise Island'} isOpened={isItemOpened4}/>
            <AcardeonItemComponent onClick={() => {setItemOpened1(false);setItemOpened2(false);setItemOpened3(false);setItemOpened4(false);setItemOpened5(true);}} bg={'../src/assets/img/thirdSection/img-5.jpg'} name={'Hawkins Labs'} isOpened={isItemOpened5}/>
        </div>
    );
}