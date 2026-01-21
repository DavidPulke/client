import { FunctionComponent, useRef, useState } from "react";
import { Service } from "../../Types/usersType";
import Tooltip from "./ToolTip";
import ToolTip from "./ToolTip";
import { sendToWhatsApp } from "../../services/appointmentServices";

type LivePreviewProps = {
    service?: Service;
}

const LivePreview: FunctionComponent<LivePreviewProps> = ({ service }) => {
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [preferredDate, setPreferredDate] = useState<string | null>(null);
    const [preferredTime, setPreferredTime] = useState<string | null>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const timeRef = useRef<HTMLInputElement>(null);
    const handleTimeChange = (time: string) => {
        const minTime = "10:00";
        const maxTime = "21:00";

        if (time < minTime) {
            setPreferredTime(minTime);
        } else if (time > maxTime) {
            setPreferredTime(maxTime);
        } else {
            setPreferredTime(time);
        }
    };







    return (<div className="live-preview">

        {/* date picker button */}
        <button
            className="date-btn"
            onClick={() => dateRef.current?.showPicker()}
        >
            {preferredDate && preferredTime
                ? `📅 ${preferredDate} ⏰ ${preferredTime}`
                : "תאריך ושעה"}
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

                        // ✨ autp open time picker after date is selected
                        setTimeout(() => {
                            timeRef.current?.showPicker();
                        }, 0);
                    }}
                />

                {/* time picker */}
                <input
                    ref={timeRef}
                    type="time"
                    min={10}
                    max={22}
                    step="900"
                    className="hidden-input"
                    onChange={(e) => handleTimeChange(e.target.value)}
                />



            </div>

        </div>



        <button disabled={selectedColor && preferredDate && preferredTime ? false : true} onClick={() => sendToWhatsApp(service as Service, selectedColor, preferredTime as string, preferredDate as string)}>לקביעת התור</button>

    </div>);
}

export default LivePreview;