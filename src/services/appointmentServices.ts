import axios from "axios";
import { Service } from "../Types/usersType";

console.log(import.meta.env.VITE_APP_API_BASE_URL);

const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;

export const getAppointments = () => {
    return axios.get(`${apiBaseUrl}/api/users`);
}


export const getServices = () => {
    return axios.get(`${apiBaseUrl}/api/services`);
}


export const sendToWhatsApp = (service: Service, color: string, time: string, date: string) => {
    const formatDateTime = (date: string, time: string) => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year} ${time}`;
    };


    const phone = import.meta.env.VITE_APP_WHATSAPP_PHONE; // Business phone number
    const message = `
היי יעל 
אשמח לקבוע תור 

שירות: *${service.type}*
צבע: *${color}*
מחיר:*${service.price}₪*
תאריך ושעה מועדפים: *${formatDateTime(date, time)}*
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};
