import logo from "../../../assets/logo.svg"
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black text-white py-10 px-10 flex flex-col justify-center md:flex-row md:justify-between ">
                <div  className="mx-auto md:mx-0">
                   <img className=" mx-auto md:mx-0 " src={logo} alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div className=" mx-auto md:mx-0">
                    <span className=" text-gray-400 text-xl md:text-2xl font-bold ">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className=" mx-auto md:mx-0">
                    <span className=" text-gray-400 text-xl md:text-2xl font-bold ">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className=" mx-auto md:mx-0">
                    <span className=" text-gray-400 text-xl md:text-2xl font-bold ">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;