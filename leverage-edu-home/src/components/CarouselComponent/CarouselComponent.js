import Carousel from "../Carousel/Carousel";
import "./CarouselComponent.css";

const CarouselComponent = () => {
  const imageUrls = [
    "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEg3PGPsTqpk9MJkYziqwjA8S-leiQqgoLlZwpcyMKlEI3P84P5gQGDo4Qsn17V7dZP0I&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3pbtiwVxGM2cnTeQ3lGvbOK3T-keMoTHqgJfgdfv1fz40PEJ5rVdWzKXm-o-voLdmlo&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwTzE6T4FLivXc_dveIjT5mg_XV-N-3Vxypb1-lbya44ZSlsoq9bv6Ww7CFoNH-tsZTY&usqp=CAU",
  ];

  return (
    <div className="carousel">
      <Carousel imageUrls={imageUrls} />
    </div>
  );
};

export default CarouselComponent;
