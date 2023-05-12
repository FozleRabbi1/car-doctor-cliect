// import success from "../../success.json";
import loadingAnim from "../../loadingAnim.json";
import Lottie from "lottie-react";

const Loading = () => {
    return (
        <div>
            <div className="   ">
                <Lottie className="bg-red-500 mx-auto w-44 mt-28" animationData={loadingAnim} ></Lottie>
            </div>
        </div>
    );
};

export default Loading;