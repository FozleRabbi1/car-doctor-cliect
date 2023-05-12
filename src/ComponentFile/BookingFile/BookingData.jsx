import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import SingleBooking from "./SingleBooking";
import Swal from "sweetalert2";


const BookingData = () => {
    const [datas, setData] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const deleteDataFun = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete this this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remining = datas.filter(data => data._id !== id)
                            setData(remining)
                        }
                    }).catch(err => {
                        console.log(err)
                    })
            }
        })

    }

    const confirmFun = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    
                    const remining = datas.filter(data => data._id !== id)
                    const updatedData = datas.find(data => data._id === id)
                    updatedData.status = "confirm";
                    const newData = [updatedData, ...remining]
                    setData(newData)

                    // fetch(`http://localhost:5000/booking?email=${email}`)
                    //     .then(res => res.json())
                    //     .then(data => setData(data))

                }
            })
    }

    const removeConfirmFun = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ status: "reoveConfirm" })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    const remining = datas.filter(data => data._id !== id)
                    const removeCOnfirmData = datas.find(data => data._id === id);
                    removeCOnfirmData.status = "reoveConfirm";
                    const newData = [removeCOnfirmData, ...remining]
                    setData(newData)
                    // fetch(`http://localhost:5000/booking?email=${email}`)
                    //     .then(res => res.json())
                    //     .then(data => setData(data))

                }
            })
    }



    return (
        <div className="mt-10 px-10">
            {/* {
                datas?.map(data => <SingleBooking key={data._id} data={data} ></SingleBooking>)
            } */}

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    delete
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Update</th>
                            <th>Confirm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map(data => <SingleBooking key={data._id} data={data} deleteDataFun={deleteDataFun} confirmFun={confirmFun} removeConfirmFun={removeConfirmFun} ></SingleBooking>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BookingData;