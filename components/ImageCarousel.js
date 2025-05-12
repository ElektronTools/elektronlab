import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/ImageCarousel.module.css';

const ImageCarousel = ({ slides }) => {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      {slides.map((slide, index) => (
        <div key={index} className={styles.slideContainer}>
          <img src={slide.image} alt={`Slide ${index}`} className={styles.image} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel; 