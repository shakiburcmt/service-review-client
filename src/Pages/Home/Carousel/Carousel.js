import React from 'react';
import img1 from '../../../assets/images/4.jpg';
import img2 from '../../../assets/images/5.jpg';
import img3 from '../../../assets/images/6.jpg';
import img4 from '../../../assets/images/1.jpg';

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item">
                    <img alt="" src={img1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item">
                    <img alt="" src={img2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item">
                    <img alt="" src={img3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item">
                    <img alt="" src={img4} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;