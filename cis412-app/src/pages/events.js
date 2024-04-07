import React from "react";
 
const Events = () => {
    return (
        <div>
            <h1>Your Events</h1>
            <h3>Hosting</h3>
                {/* <div class="row row-cols-1 row-cols-md-2 g-4"> */}
                <div class="col">
                    <div class="card">
                    <img src="..." class="card-img-righ" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Coffee chats!</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

            <h3>Guesting</h3>
            <div class="col">
                    <div class="card">
                    <img src="..." class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="..." class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title 1</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
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
    );
};
 
export default Events;