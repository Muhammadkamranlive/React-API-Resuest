import React from 'react';
const Slider = () => {
    return ( 
        <>
            
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/7825aabe-4200-11e7-a976-3b2926e688ff/1193778068/pixabay-screenshot.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/photos/girl-wandering-in-the-forest-picture-id595741194" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/photos/girl-with-camera-taking-pictures-of-nature-in-spring-beautiful-forest-picture-id958104374?s=612x612" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
        </>

     );
}
 
export default Slider;