import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselProps = {
    images: string[];
    carouselClassName: string;
    imageClassName: string;
}

export const ImageCarousel: React.FC<CarouselProps> = ({ images, carouselClassName, imageClassName }) => {
    console.log(images)
    return (
        <Carousel className={carouselClassName}>
            {images.map((image, index) => (
                <div key={index} className={imageClassName}>
                    <img src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    );
}