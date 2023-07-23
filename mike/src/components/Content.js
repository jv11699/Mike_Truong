import React from "react";
import "../css/Content.css"
import Mike from '../images/MikeTruong.png';
function Content() {
    const handleImage = () => {
        window.location.href = 'https://michaeltruong.exprealty.com/';
    }
    return (
        <>
            
            <div className="row">
                <div class="col-md-10 offset-md-3">
                    <h3>About Me</h3>
                </div>
           
            </div>
            <img src={Mike} id="MikePic" onClick={handleImage} />
        </>
    );
}

export default Content;