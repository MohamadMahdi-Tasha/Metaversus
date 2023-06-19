// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from "../chunks/sectionComponent.tsx";
import MouseRotatingAnimationComponent from "../chunks/mouseRotatingAnimationComponent.tsx";
import RightSideImage from "../assets/img/eighthSection/img-right.png";

// Creating and exporting functional component of Eighth Section, as default
export default function EighthSection():JSX.Element {
    // Returning JSX
    return (
        <SectionComponent className={'mt-[200px] relative'}>
            <figure>
                <h5>Samantha</h5>
                <h6>Founder Metaverus</h6>
                <blockquote><p>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p></blockquote>
            </figure>
            <MouseRotatingAnimationComponent className={''} />
            <img src={RightSideImage} alt="illustration of space"/>
        </SectionComponent>
    );
}