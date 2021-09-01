import React, { useState } from 'react';
import Image from '../elements/image';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators} from 'reactstrap';

const CarouselComponent = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    let items= data.img
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item, index) => {
      return (
      <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item?.url}
        >
      <div className="carouselItem">
        <Image
          media={item?.url} 
          className="w-full"
        />
        <div className="absolute inset-x-0 top-60">
          <p className="text-8xl text-white font-bold text-center absolute inset-x-0 top-50 h-16">{item.alternativeText}</p>
          <p className="text-3xl text-white font-semibold text-center absolute inset-x-0 top-40 h-16">{item.caption}</p>
          {/* <a href={'/category/' + data.id} className="hover:no-underline">
            <div className="flex flex-col justify-center items-center">
              <button className="bg-white hover:bg-gray-200 text-4xl text-black font-bold py-2 px-2 rounded absolute top-60 ">
                Explore {item.alternativeText}
              </button>
            </div>
          </a> */}
        </div>
      </div>
      </CarouselItem>
      );
    });
  
    return (
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        );
  }
  export default CarouselComponent;
