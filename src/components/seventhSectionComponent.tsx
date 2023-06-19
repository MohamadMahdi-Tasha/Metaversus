// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import PreTitlesComponent from "../chunks/preTitlesComponent.tsx";
import TitlesComponent from "../chunks/titlesComponent.tsx";
import InsightItemComponent from './insightItemComponent.tsx';
import Image1 from './../assets/img/seventhSection/img-1.png';
import Image2 from './../assets/img/seventhSection/img-2.png';
import Image3 from './../assets/img/seventhSection/img-3.png';

// Creating and exporting functional component of Seventh Section, as default
export default function SeventhSectionComponent():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'lg:mt-[200px] mt-[100px]'}>
            <PreTitlesComponent centred>| Insight</PreTitlesComponent>
            <TitlesComponent centred>Insight about metaverse</TitlesComponent>
            <ul className={'flex flex-col lg:gap-[30px] gap-[40px]'}>
                <InsightItemComponent img={Image1} title={'The launch of the Metaverse makes Elon musk ketar-ketir'} paragraph={'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.'}/>
                <InsightItemComponent img={Image2} title={'7 tips to easily master the madness of the Metaverse'} paragraph={'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum'}/>
                <InsightItemComponent img={Image3} title={'With one platform you can explore the whole world virtually'} paragraph={'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem'}/>
            </ul>
        </SectionComponent>
    );
}