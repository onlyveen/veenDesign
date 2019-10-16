import React from 'react';
import Travel_im from "../../images/travel.svg"

const Travel = () => {

    return (
        <div id="Travel" >
            <div className="container">
                <div className="travel_dec">
                    <h1 class="main-heading-ttl lined">My Journey</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div className="travel_illust">
                    <img src={Travel_im} alt="Veen.Design" title="Veen.Design"/>
                </div>
            </div>
        </div>
    );
};

export default Travel;