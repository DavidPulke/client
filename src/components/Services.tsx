import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServices } from "../services/appointmentServices";
import { Service } from "../Types/usersType";
import ServiceLayout from "./miniComps/ServiceLayout";


type ServicesProps = {
    goBack?: () => void;
    name?: string;
}

const Services: FunctionComponent<ServicesProps> = ({ name, goBack }) => {
    const navigate = useNavigate();
    const [services, setServices] = useState<Service[]>([]);



    useEffect(() => {
        getServices().then((response) => {
            setServices(response.data);
        }).catch((error) => {
            console.error("Error fetching services:", error);
        });
    }
        , []);

    return (<section className="services-list" >
        <i onClick={goBack} className="fa-solid fa-arrow-right-long back-btn"></i>
        <h2>היי {name}, הנה השרותים שלנו.</h2>

        {/* add services here */}
        {services.length > 0 ? <ServiceLayout services={services} /> : <p>Loading services...</p>}



    </section>);
}

export default Services;