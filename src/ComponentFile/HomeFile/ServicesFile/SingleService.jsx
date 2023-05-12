import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
    const { _id, title, img, price } = service;

    return (
        <div>
            <div className="card hover:shadow-2xl duration-500 ">
                <div className="card glass">
                    <img src={img} className="h-64 p-4 rounded-xl " alt="car" />
                    <div className=" p-4 ">
                        <h2 className="text-black  font-bold text-xl " >{title}</h2>
                        <div className="card-actions justify-between ">
                            <span className="text-red-500 font-bold text-base-400"> Price : ${price} </span>
                            <Link to={`/checkOut/${_id}`}  ><i>icone</i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;