import React, { useState } from 'react';
import '../App.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        altText: 'Interior Design',
        caption: 'Elegant designs to decorate your dream home'
    },
    {
        src:'https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        altText: 'Architects',
        caption: 'The best architects to design your home'
    },
    {
        src: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        altText: 'Construction',
        caption: 'Let us handle the construction for You'
    },
    {
        src: 'https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        altText: 'Properties',
        caption: 'Find properties and lands on sale for lower prices'
    }
];

const Kerosel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

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

    const slides = items.map((item) => {
        return (
            <CarouselItem className="car"
                          onExiting={() => setAnimating(true)}
                          onExited={() => setAnimating(false)}
                          key={item.src}>
                <img className="d-block contain img-fluid c_images" src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.altText} className="caption"/>
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous} >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Kerosel;
