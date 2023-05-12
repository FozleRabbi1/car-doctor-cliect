import SingleService from "./SingleService";

const Services = ({ services }) => {
    // console.log(services)
    return (
        <div className="mb-10">
            <div className="">
                <h5 className="text-center text-xl text-red-500" >services</h5>
                <h2 className="text-center text-5xl my-3" >Our Services Area</h2>
                <p className="text-center mt-2" >the majority have suffered alteration in some form, by injected humour, or randomised</p>
                <p className="text-center -mt-1" >words which do not look even slightly believable. </p>
            </div>

            <div className="grid  md:grid-cols-3 gap-6 mt-10 mb-20">
                {
                    services.map(service => <SingleService key={service._id} service={service} ></SingleService>)
                }
            </div>

        </div>
    );
};

export default Services;