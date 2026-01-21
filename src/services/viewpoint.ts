import axios from 'axios';

// observerService.ts
export function observeElementsWithClass(
    className: string,
    onEnter: (element: Element) => void,
    onExit?: (element: Element) => void
) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    onEnter(entry.target); // כאשר האלמנט נכנס למסך
                } else if (onExit) {
                    onExit(entry.target); // כאשר האלמנט יוצא מהמסך (אם הוגדר)
                }
            });
        },
        { threshold: 0.1 } // מזהה כאשר לפחות 10% מהאלמנט מופיע
    );

    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element) => observer.observe(element));
}



// get services from api
export function getServices() {
    return axios.get('/api/services')
}
