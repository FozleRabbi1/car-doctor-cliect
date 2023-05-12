// import img1 from "../../../assets/images/banner/1.jpg"
// import img2 from "../../../assets/images/banner/2.jpg"
// import img3 from "../../../assets/images/banner/3.jpg"
// import img4 from "../../../assets/images/banner/4.jpg"
// import img5 from "../../../assets/images/banner/5.jpg"
// import img6 from "../../../assets/images/banner/6.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./carusole.css";

// import required modules
import { Pagination } from "swiper";

import { useEffect, useState } from "react";


const Carusole = () => {
    const [carDatas, setCarData] = useState([]);
    const [activeIndex, setactiveIndexNo] = useState(0);
    const [swiper, setSwiper] = useState(null);
    const slidePrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };

  

    const slideNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };
    // useEffect(()=>{
        // setTimeout(() => {
        //     swiper.slideNext();
        // }, 3000);
    // })

    useEffect(() => {
        fetch("http://localhost:5000/carData")
            .then(res => res.json())
            .then(data => setCarData(data))
    }, [])

    // console.log(carDatas)
    // console.log(activeIndex)
    // const gradientColor = 'from-blue-500 via-purple-500 to-pink-500';

    return (
        <div>
            <div className="image-div relative mt-3 rounded-md mb-20">
                <img style={{ height: "90vh", display: "block", width: "100%" }} className="rounded-md" src={carDatas[activeIndex]?.image} alt="" />
                <div className="color absolute"  ></div>
            </div>
            <div className={`slider-mainDiv grid grid-cols-2 my-5 rounded-md absolute top-10 `} >
                <div className="text-div -mt-15 md:mt-44 text-white">
                    <h2 className="text-4xl font-bold">{carDatas[activeIndex]?.heading}</h2>
                    <p>{carDatas[activeIndex]?.description}</p>
                    <div className="mt-4">
                    <button className="btn btn-primary px-8">Button</button>
                    <button className="btn btn-outline btn-secondary ms-4 px-8">Button</button>
                    </div>
                </div>

                <div className="carusole relative">
                    <Swiper
                        slidesPerView={2}
                        centeredSlides={true}
                        spaceBetween={30}
                        grabCursor={true}
                        onSwiper={setSwiper}
                        pagination={{
                            clickable: true,
                        }}
                        onSlideChange={(e) => setactiveIndexNo(e.activeIndex)}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <div className="">
                            {
                                carDatas.map(data => <SwiperSlide key={data._id}>
                                    <img className="w-60 h-55 rounded-md " src={data?.image} alt="" />
                                </SwiperSlide>)
                            }


                        </div>

                        <div className="button flex z-20 absolute bottom-0 right-0 justify-between pb-14 text-white">
                            <button className='me-2 bg-red-100 text-black py-1 px-2 rounded-md' onClick={() => slidePrev()} > P </button>
                            <button className="bg-red-100 text-black py-1 px-2 rounded-md" onClick={() => slideNext()}>N</button>
                        </div>



                    </Swiper>
                </div>
            </div>


            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default Carusole;