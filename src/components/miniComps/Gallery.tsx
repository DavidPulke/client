import { FunctionComponent } from "react";

type GalleryProps = {

}

const Gallery: FunctionComponent<GalleryProps> = () => {
    return (<div id="myWork">
        <div className="card">
            <img src="/images/NailsImage.png" alt="Nails" title="Nails Art" width="400" height="300" loading="eager" />
        </div>
        <div className="card">
            <img src="/images/fingers(4).jpeg" alt="Nails Art 4" title="Nails Art 4" width="400" height="300" />
        </div>
        <div className="card">
            <img src="/images/fingers(6).jpeg" alt="Nails Art 6" title="Nails Art 6" width="400" height="300" />
        </div>
        <div className="card">
            <img src="/images/fingers(1).jpeg" alt="Nails Art 1" title="Nails Art 1" />
        </div>
        <div className="card">
            <img src="/images/fingers(7).jpeg" alt="Nails Art 2" title="Nails Art 2" />
        </div>
        <div className="card">
            <img src="/images/fingers(3).jpeg" alt="Nails Art 3" title="Nails Art 3" />
        </div>

        <div className="card">
            <img src="/images/fingers(10).jpeg" alt="Nails Art 10" title="Nails Art 10" />
        </div>
        <div className="card">
            <img src="/images/NailsImage2.png" alt="Nails" />
        </div>
        <div className="card">
            <img src="/images/NailsImage3.png" alt="Nails" />
        </div>
        <div className="card">
            <img src="/images/fingers(8).jpeg" alt="Nails Art 8" title="Nails Art 8" />
        </div>
        <div className="card">
            <img src="/images/fingers(9).jpeg" alt="Nails Art 9" title="Nails Art 9 " />
        </div>
    </div>);
}

export default Gallery;