import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const SingleBooking = ({ data, deleteDataFun, confirmFun, removeConfirmFun }) => {
    console.log(data.status)
    const { _id, img, name, price, date, serviceType } = data;
    // <h2>{data.serviceType}</h2>   




    return (
        <tr>
            <th>
                <label>
                    <button className="bg-red-400 w-6 h-6 rounded-full " onClick={() => deleteDataFun(_id)} >X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">BD</div>
                        <div className="text-sm opacity-50">Size : M</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceType}
                {/* <span className="badge badge-ghost bg-red-200 px-4 ">{serviceType}</span> */}
            </td>
            <td>
                <span className="badge badge-ghost bg-red-200 px-4 ">{price}</span>
            </td>

            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs bg-green-400 ">
                    <Link to={`/updateBooking/${_id}`}>Update</Link>
                </button>
            </th>
            <th>
                {
                    data.status === "confirm" ? <button onClick={() => removeConfirmFun(_id)} className="btn btn-ghost btn-xs bg-red-500 ">  Remove Confirm </button> :
                        <button onClick={() => confirmFun(_id)} className="btn btn-ghost btn-xs bg-green-500 ">
                            Please Confirm
                        </button>
                }

            </th>
        </tr>
    );
};

export default SingleBooking;