import { FunctionComponent, useEffect, useState } from "react";
import { observeElementsWithClass } from "../services/viewpoint";
import Gallery from "./miniComps/Gallery";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    const services = [
        "לק ג'ל - מגוון צבעים וסגנונות.",
        "פדיקור - טיפול מקצועי ומפנק.",
        "מניקור - עיצוב וטיפוח ידיים."
    ];

    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [prevServiceIndex, setPrevServiceIndex] = useState(0);

    useEffect(() => {
        observeElementsWithClass(
            'observe-me',
            (element) => {
                element.classList.add('visible'); // אפקט בעת כניסה למסך
            },
            (element) => {
                element.classList.remove('visible'); // אפקט בעת יציאה מהמסך
            }
        );
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevServiceIndex(currentServiceIndex);
            setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentServiceIndex, services.length]);

    return (<>
        <header>
            <div className="overlay">
                <h1 className="observe-me">Yael Nails</h1>
                <ul className="services-swap">
                    {services.map((service, index) => (
                        <li key={index} className={(index === currentServiceIndex ? 'show' : 'hide') + (index === prevServiceIndex ? ' hide' : '')}>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            <video loop autoPlay muted >
                <source src="/Videos/nails_video.mp4" type="video/mp4" />
            </video>
        </header>
        <section id="services">
            <h1>השירותים שלי</h1>
            <ul>

                <li><span className="pink">לק ג'ל</span> - מגוון צבעים וסגנונות.</li>
                <li><span className="pink">עיצוב ציפורניים</span> - עיצובים מותאמים אישית לפי בקשת הלקוח.</li>
                <li><span className="pink">פדיקור</span> - טיפול ומראה לציפורניים ידיים.</li>
            </ul>
        </section>

        <section id="testimonials">
            <h1>מה הלקוחות שלי אומרים</h1>
            <blockquote>
                "שירות מדהים! הלק החזיק מעמד לאורך זמן." - עטרה
            </blockquote>

            <blockquote>
                "יצירתיות בלתי נגמרת בעיצובים!" - תמר
            </blockquote>
        </section>
        <section id="myWork-section">
            <h1>העבודות שלי</h1>
            <Gallery />
        </section>

    </>);
}

export default Home;

