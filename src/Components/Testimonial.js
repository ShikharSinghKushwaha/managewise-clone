import React from  'react';
import MsgBox from './MsgBox';
import './Testimonial.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Testimonial({ data }){

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
    return(
        <div>
            <section id="testimonial">
            <div className="testimonial_container">
                <div className='child_question_container'>
                <div className='msg-box'>
                <MsgBox text={'🧡 TESTIMONIALS'} />
                    
                <h1>Hear from our <b className="highlight">Satisfied </b>clients</h1>
                <h3 className='paragraph'>Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.</h3>
                </div> 
                <div className='slider_container'>
                     <div className='box'>
                     <Slider {...settings}>
                        {data.map((item,index) => (
                            <div  key ={index} className='slide'>
                            <h3>{item.comment}</h3>
                            <div className='container'>
                            <div className='info'>
                            <img src={item.image} />
                            </div>
                            <h3 className='highlight'>{item.name}</h3>
                            <h4 style={{marginTop:'5px'}}>{item.designation}</h4>
                            </div>
                            </div>
                        ))}
                        </Slider>
                     </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}

export default Testimonial;