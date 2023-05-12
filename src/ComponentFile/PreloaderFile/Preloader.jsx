import { Circles } from 'react-loader-spinner'

const Preloader = () => {
    return (
        <div className='w-full h-96 flex justify-center items-center '>
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Preloader;