import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  //@desc: Configuration settings for the react-slick carousel
  const settings = {
    dots: true,           // Show dot indicators under the carousel
    infinite: true,       // Enable infinite looping of slides
    speed: 300,           // Transition speed of the slides
    slidesToShow: 1,      // Number of slides to show at one time
    slidesToScroll: 1,    // Number of slides to scroll on each movement
    autoplay: true,       // Enable auto-forwarding of slides
    autoplaySpeed: 5000,  // Time interval for auto-forwarding
  };

  return (
    //@desc: Main container of the carousel, setting a fixed viewport height
    <div className="relative w-full overflow-hidden" style={{ height: '25vh' }}> 
      <Slider {...settings}>
        {/* First slide with image and text content */}
        <div>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/art.jpg')" }}>
            {/* Overlay to enhance text visibility and provide UI consistency */}
            <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center text-white m-10">
                <h2 className="text-4xl font-bold mb-3">Discover Our Collection</h2>
                <p className="mb-5">Check out the latest arrivals in our store.</p>
                <button className="bg-primary/10 hover:bg-primary/50 border-primary border text-white font-bold py-2 px-4 rounded-full">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Second slide similar to the first, with different content */}
        <div>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/dance.jpg')" }}>
            <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center text-white m-10">
                <h2 className="text-4xl font-bold mb-3">New Season Essentials</h2>
                <p className="mb-5">Explore our collection for the new season.</p>
                <button className="bg-primary/10 hover:bg-primary/50 border-primary border text-white font-bold py-2 px-4 rounded-full">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
