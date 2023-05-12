import preson from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen -mt-24 ">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="firstImg relative">
                        <img src={preson} className="  w-84 h-80 rounded-lg shadow-2xl" />
                    </div>
                    <div className="secondImg absolute left-72 bg-white p-2 mt-44">
                        <img src={parts} className='   w-64 h-60 ' alt="" />
                    </div>

                    <div className='ps-28 pe-14 w-8/12 '>
                        <h1 className='text-red-500 font-bold'>About Us</h1>
                        <h1 className="text-3xl pe-20 font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-primary mt-2 ">get more info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;