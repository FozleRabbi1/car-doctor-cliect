import { Link } from "react-router-dom";
import loginAnimation from "../../loginAnimation.json";
// import success from "../../success.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const { logIn } = useContext(AuthContext)
    

    const loginFormControl = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(res => {
                console.log(res.user)
            }).catch(err => console.log(err.message))

    }
    return (
        <div>
            <div className="hero mt-10 w-11/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row justify-between">

                    <div className="me-10">
                        <Lottie animationData={loginAnimation} ></Lottie>
                        {/* <Lottie className="w-44" animationData={success} ></Lottie> */}
                        {/* <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>

                    <div className="card flex-shrink-0 ms-10 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className=" text-xl font-bold text-center " > Login</h2>

                            <form onSubmit={loginFormControl} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="mt-3">
                                        <p className="text-gray-500">do not have an account? <Link className="text-black font-bold" to={"/register"} >SignUp</Link> </p>
                                    </label>
                                </div>
                                <div className=" mt-6 w-full bg-emerald-900 text-white flex justify-center">
                                    {/* <button className="btn btn-primary">Login</button> */}
                                    <input className=" py-1 px-8 " type="submit" value="Login" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;