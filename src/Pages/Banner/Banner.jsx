import { Link } from "react-router-dom";
import Container from "../Shared/Container";
import { useContext } from "react";
import { AuthContext } from "../../provide/AuthProvider";

const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="">
            {/* <img className="w-full object-cover" src="https://th.bing.com/th/id/R.d7c94a31b868bae4a15510057601e91a?rik=F7BmTfWqGQMpjg&pid=ImgRaw&r=0" alt="" /> */}
            <div className="hero min-h-screen mb-56 bg-fixed " style={{ backgroundImage: 'url(https://i.ibb.co/Mf9RXkz/bg.jpg)' }}>
                <div className="hero-overlay bg-opacity-40 backdrop-blur-sm   "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-serif text-white font-bold">Hello there</h1>
                        <p className="mb-5 text-2xl">Empower Your Productivity: Your Personalized To-Do Hub! 🚀✅ Organize, Prioritize, Achieve. One Task at a Time. #ProductivityJourney #CodeLife</p>
                        <Link to={user? '/dashboard': '/login'}>
                            <button className="btn  animate-bounce " >Let’s Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;