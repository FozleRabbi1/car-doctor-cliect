import { Link } from "react-router-dom";

import registerAnimation from "../../registerAnimation.json"
import Lottie from "lottie-react"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const registerFormControl = (e) => {
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err.message)
            })


    }
    return (
        <div>
            <div className="hero w-11/12 mx-auto">
                <div className="hero-content flex-col -mt-4 lg:flex-row justify-between">

                    <div className="me-10">
                        <Lottie animationData={registerAnimation} ></Lottie>
                    </div>

                    <div className="card flex-shrink-0 ms-10 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className=" text-xl font-bold text-center " > Register</h2>

                            <form onSubmit={registerFormControl} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="mt-3">
                                        <p className="text-gray-500">Already have an account? <Link className="text-black font-bold" to={"/login"} >LogIn</Link> </p>
                                    </label>
                                </div>
                                <div className=" mt-6 w-full bg-emerald-900 text-white flex justify-center">
                                    <input className=" py-1 px-8 " type="submit" value="Register" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;