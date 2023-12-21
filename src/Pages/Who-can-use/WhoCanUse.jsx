import React from 'react';
// import Title from '../../Shared/Title/Title';

const WhoCanUse = () => {
    const info=[
        {
            name: 'Student',
            icon:'https://hopelives365.com/wp-content/uploads/2017/12/learn.png'
        },
        {
            name: 'Developer',
            icon: 'https://th.bing.com/th/id/R.cf83382e3c38a659882adb43b024c06e?rik=jjSzOV6hXrc8ig&pid=ImgRaw&r=0'
        },
        {
            name: 'Productivity Enthusiasts',
            icon: 'https://cdn0.iconfinder.com/data/icons/business-butterscotch-vol-2/512/Productivity-512.png'
        },
        {
            name: 'Remote Workers',
            icon:'https://cdn-icons-png.flaticon.com/512/3912/3912851.png'
        }
    ]
    return (
        <div className="my-10 mb-56">
            {/* <Title /> */}
            <p className='text-center text-7xl mb-24 font-bold underline '>Who can use it ?</p>
            <div className="container mx-auto lg:max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 justify-center items-center">
                {
                    info.map((info, i)=>(

                <div key={i} className="text-center  transition-transform duration-400 hover:scale-105 hover:shadow-xl" >
                    <div className="p-3 border rounded-lg  shadow-md">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-primary-500 w-16 h-16 mx-auto mb-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                        </svg> */}
                        <img src={info.icon} className='w-40 h-56 mx-auto'  alt="" />
                        <h6 className="text-lg font-semibold mt-4">{info?.name}</h6>
                    </div>
                </div>
                    ))
                }

                {/* <div
                    className="text-center transition-transform duration-400 hover:scale-105"
                >
                    <div className="p-3 bg-white shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-primary-500 w-16 h-16 mx-auto mb-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                        </svg>
                        <h6 className="text-lg font-semibold mt-2">24x7 Call</h6>
                    </div>
                </div>

                <div
                    className="text-center transition-transform duration-400 hover:scale-105 hover:shadow-xl"
                >
                    <div className="p-3 bg-white shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-primary-500 w-16 h-16 mx-auto mb-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                        </svg>
                        <h6 className="text-lg font-semibold mt-2">QualityFull Result</h6>
                    </div>
                </div>

                <div
                    className="text-center transition-transform duration-400 hover:scale-105"
                >
                    <div className="p-3 bg-white shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-primary-500 w-16 h-16 mx-auto mb-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                        </svg>
                        <h6 className="text-lg font-semibold mt-2">Up To Date</h6>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default WhoCanUse;
