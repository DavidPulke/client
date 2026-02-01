import { FunctionComponent, useRef, useState } from "react";
import { Service } from "../../Types/usersType";
import Tooltip from "./ToolTip";
import ToolTip from "./ToolTip";
import { sendToWhatsApp } from "../../services/appointmentServices";
import { useNavigate } from "react-router-dom";

type LivePreviewProps = {
    service?: Service;
    setService: (service: Service | null) => void;
}

const LivePreview: FunctionComponent<LivePreviewProps> = ({ service, setService }) => {
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [preferredDate, setPreferredDate] = useState<string | null>(null);
    const dateRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();







    return (<div className="live-preview">

        <i onClick={() => setService(null)} className="fa-solid fa-xmark close-btn"></i>

        {/* date picker button */}
        <button
            className="date-btn"
            onClick={() => dateRef.current?.showPicker()}
        >
            {preferredDate
                ? `📅 ${preferredDate}`
                : "תאריך"}
        </button>


        <div className="service-card">
            <h3>{service?.type}</h3>
            <img src={service?.img.src} alt={service?.img.alt} />
            <div className="more-services">

                {/* colors */}
                <div className="colors">
                    {service?.colors.map((color) => (
                        <ToolTip key={color.value} text={color.name}>
                            <span
                                className={`color-dot ${selectedColor === color.name ? "active" : ""}`}
                                style={{ backgroundColor: color.value }}
                                onClick={() => setSelectedColor(color.name)}
                            />
                        </ToolTip>
                    ))}
                </div>


                {/* price */}
                <p>מחיר: {service?.price} ₪</p>


                {/* date picker */}
                <input
                    ref={dateRef}
                    type="date"
                    className="hidden-input"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => {
                        setPreferredDate(e.target.value);
                    }}
                />




            </div>

        </div>



        <button disabled={selectedColor && preferredDate ? false : true} onClick={() => sendToWhatsApp(service as Service, selectedColor as string, preferredDate as string)}>לקביעת התור</button>

    </div>);
}

export default LivePreview;