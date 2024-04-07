import React from "react";
import mapImage from '../images/maps.jpeg';
 
const Events = () => {
    const containerStyle = {
        maxWidth: '375px',
        maxHeight: '812px',
        margin: '0 auto',
        backgroundColor: '#f7f3f0',
    };

    return (
        <div style={containerStyle}>
        <div>
            <div class="row justify-content-between">
            <div class="col-4">
                <h1 class="title">Your Events</h1>
            </div>
            <div class="col-4">
                <button class="plusButton">+</button>
            </div> 
        </div>
     
         
            <h3 class="subheader">Hosting</h3>
                <div class="col">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-8">
                                <div class="card-body text-start">
                                    <h5 class="card-title">Coffee chats!</h5>
                                    <button>26/2/24</button>
                                    <p>Starbucks</p>
                                    <button class="btn btn-primary">Learn more</button>
                                </div>
                            </div>
                            <div class="col-4">
                                <img src={mapImage} class="card-img-top img-fluid rounded-start" alt="map"></img>
                            </div>
                        </div>
                    </div>
                </div>

            <h3 class="subheader">Guesting</h3>
                <div class="col">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-8">
                                <div class="card-body text-start">
                                    <h5 class="card-title">Thrift Marketing</h5>
                                    <button>27/2/24</button>
                                    <p>3820 Locust Walk</p>
                                    <button class="btn btn-primary">Learn more</button>
                                </div>
                            </div>
                            <div class="col-4">
                                <img src={mapImage} class="card-img-top" alt="map"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-8">
                                <div class="card-body text-start">
                                    <h5 class="card-title">Dance Class</h5>
                                    <button>27/2/24</button>
                                    <p>912 Spring Street</p>
                                    <button class="btn btn-primary">Learn more</button>
                                </div>
                            </div>
                            <div class="col-4">
                                <img src={mapImage} class="card-img-top" alt="map"></img>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="col">
                    <div class="card">
                    <img src="..." class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div> */}
        </div>
        </div>
    );
};
 
export default Events;