import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
// import successFul from "../../successFull.json";
// import Lottie from 'lottie-react'
import Swal from "sweetalert2";
import Loading from "../LoadingComponent/Loading";

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData();
    const { img, title } = data;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    })

    const checkedDataHandelar = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        // const serviceType = form.serviceType.value;
        const textArea = form.textArea.value;
        const bookedData = {
            name,
            date,
            email,
            serviceType: title,
            message: textArea,
            serviceId: data._id,
            price: data.price,
            img: img
        };
        // console.log(bookedData);

        fetch("http://localhost:5000/carData", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(bookedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // alert("data addedd")
                    Swal.fire({
                        position: '',
                        icon: 'success',
                        title: 'SuccessFully Booked',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
            .catch(err => console.log(err.message))


    }
    return (
        <div>

            {
                loading ? <Loading></Loading> :
                    <div>
                        <img className="w-10/12 mt-4 mx-auto h-96 rounded-xl " src={data.img} alt="" />
                        {/* <Lottie animationData={successFul} ></Lottie> */}
                        <div className="hero mt-10 ">
                            <div className="hero-content w-9/12">
                                <div className="card  w-full shadow-2xl bg-base-100">
                                    <div className="card-body">

                                        <form onSubmit={checkedDataHandelar}>
                                            <div className="form-control grid grid-cols-2 gap-5 ">
                                                {/* <input type="text" name="serviceName" defaultValue={title} className="input input-bordered" /> */}
                                                <input type="text" name="name" placeholder="name" required className="input input-bordered" />
                                                <input type="date" name="date" required className="input input-bordered" />
                                                {/* <input type="text" name="serviceName"   value={title || ""} className="input input-bordered" />
                                    <input type="text" name="servicePrice"   value={price || ""}  className="input input-bordered" /> */}
                                            </div>

                                            <div className="form-control grid grid-cols-2 gap-5 my-4 ">
                                                <input type="text" name="email" required defaultValue={user?.email} className="input input-bordered" />
                                                <input type="text" required defaultValue={title} className="input input-bordered" />
                                            </div>


                                            <div className="form-control">
                                                <textarea className="input h-44 input-bordered" required name="textArea" id="" cols="30" rows="10"></textarea>
                                            </div>

                                            <div className="form-control mt-6">
                                                <button className="btn btn-primary">Booked</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default CheckOut;