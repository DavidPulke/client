import { FunctionComponent, useState } from "react";
import { Service } from "../../Types/usersType";
import LivePreview from "./LivePreview";
import ToolTip from "./ToolTip";

type ServiceLayoutProps = {
    services: Service[];
}

const ServiceLayout: FunctionComponent<ServiceLayoutProps> = ({ services }) => {

    const [service, setService] = useState<Service | null>(null);


    return (<div className="service-layout">
        {services.length > 0 && services.map((service: Service) => (
            <div key={service.type} className="service-card" onClick={() => setService(service)}>
                <h3>{service.type}</h3>
                <img src={service.img.src} alt={service.img.alt} />
                <div className="more-services">



                    {/* price */}
                    <p>מחיר: {service.price} ₪</p>
                </div>

            </div>
        ))}
        {service && <LivePreview service={service} setService={setService} />}

    </div>);
}

export default ServiceLayout;