import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooking = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData();
    const { img, serviceType, name } = data;
    console.log(data)

    const updateDataHandelar = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const textArea = form.textArea.value;
        const updatedData = {
            name,
            date,
            email,
            serviceType: serviceType,
            message: textArea,
            serviceId: data._id,
            price: data.price,
            img: img
        };
        console.log(updatedData)

        fetch(`http://localhost:5000/booking/${data._id}`, {
            method : "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              body : JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    position: '',
                    icon: 'success',
                    title: ' Data Updated ',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(err => console.log(err))
        

    }

    return (
        <div>

                <h2 className="text-red-500 text-center font-xl font-bold " >Update Your Data</h2>
            <div className=" grid grid-cols-2 mx-5 mt-4 items-center ">
                <img className="w-3/4 mx-auto h-96 rounded-xl " src={img} alt="" />
                <div className="hero  ">
                    <div className="hero-content w-full">
                        <div className="card  w-full shadow-2xl bg-base-100">
                            <div className="card-body">

                                <form onSubmit={updateDataHandelar}>
                                    <div className="form-control grid grid-cols-2 gap-5 ">
                                        <input type="text" name="name" defaultValue={name} required className="input input-bordered" />
                                        <input type="date" name="date" required className="input input-bordered" />
                                    </div>

                                    <div className="form-control grid grid-cols-2 gap-5 my-4 ">
                                        <input type="text" name="email" required defaultValue={user?.email} className="input input-bordered" />
                                        <input type="text" required defaultValue={serviceType} className="input input-bordered" />
                                    </div>


                                    <div className="form-control">
                                        <textarea className="input h-44 input-bordered" required name="textArea" id="" cols="30" rows="10"></textarea>
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Checked</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateBooking;