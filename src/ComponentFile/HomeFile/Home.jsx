import { useLoaderData } from "react-router-dom";
import Footer from "../SharedFile/FooterFile/Footer";
import About from "./AboutUsFile/About";
import Carusole from "./CarusoleFile/Carusole";
import Services from "./ServicesFile/Services";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Preloader from "../PreloaderFile/Preloader";

const Home = () => {
    const services = useLoaderData();
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    })
    console.log(user)
    return (
        <div className="">

            {
                loading ? <Preloader></Preloader> :
                    <div>
                        <div className=" px-10">

                            <Carusole></Carusole>
                            <About></About>
                            <Services services={services} ></Services>
                        </div>
                        <Footer></Footer>
                    </div>
            }

        </div>
    );
};

export default Home;