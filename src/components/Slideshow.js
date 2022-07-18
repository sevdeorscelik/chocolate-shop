import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [

    {
        url: 'img/photo-16.jpg',
        text: 'HAPPY CHOCOLATES ',
        fontFamily: "'Monoton', cursive",
        fontSize: "5rem",
        marginLeft: '5rem',
        marginTop: '15rem',
        className:'first'
    },
    {
        url: 'img/photo-20.jpg',
        text: 'Happy Chocolates has been on the tables of millions of people around the world for more than 50 years, spreading good moments to start the day. A piece of Happy Chocolates tastes great. Thanks to our unique and inimitable recipe, our chocolates has become the most popular and iconic chocolate mark in the world.',
        fontFamily: "'Caveat', cursive",
        fontSize: "2.5rem",
        marginLeft: '35rem',
        marginTop: '5rem',
        className:'second'
    },
    {
        url: 'img/photo-15.jpg',
    },
    {
        url: 'img/photo-18.jpg',
    },
    {
        url: 'img/photo-13.jpg',
    }

];

const Slideshow = () => {

    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide " key={index}>
                        <div className='d-flex justify-content-start text-align-center' style={{ 'backgroundImage': `linear-gradient(rgb(0,0,0, 0.2), rgb(0,0,0,0.7)), url(${slideImage.url})` }}>
                            <span id='span' className={slideImage.className} style={{ fontFamily: slideImage.fontFamily, marginLeft: slideImage.marginLeft, marginTop: slideImage.marginTop,fontSize: slideImage.fontSize }}>
                                {slideImage.text}
                            </span>


                        </div>

                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow