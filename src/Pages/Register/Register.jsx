// import ContentCenter from "../utilites/ContentCenter.jsx/ContentCenter";
// import login from "../assets/animationJson/login.gif"
import animation from "../../assets/icons/animation/login.gif"
// import google from "../assets/animationJson/google.json"
import googles from "../../assets/icons/animation/google.gif"
// import github from "../assets/animationJson/github.gif"


// import { useLottie } from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
// import { AuthContext } from "../../provide/AuthProvider";
import { useLottie } from "lottie-react";
import { AuthContext } from "../../provide/AuthProvider";

const Login = () => {
    const { createUser, user, googleSignIn } = useContext(AuthContext)
    // console.log(user);

    const options = {
        animationData: animation,

        loop: true,

    };

    const navigate = useNavigate()
    const location = useLocation()

    console.log(location);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleRegister = e => {
        e.preventDefault()


        if (password.length < 6) {
            // setError('Password should be at least 6 characters or longer')
            toast.error('Password should be at least 6 characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password should have at least one upper case')
            return
        }
        else if (!/[^a-zA-Z0-9._-]/.test(password)) {
            toast.error('Password should have at least one special character')
            return
        }


        createUser(email, password)
            .then(result => {
                // updateProfile(result.user, {
                //     displayName: name,
                //     photoURL: url
                // })
                // .then()
                // .catch()
                toast.success("Register Successful")
                navigate(location?.state ? location.state : '/')
                e.target.reset()
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
                e.target.reset()
            })

    }



    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                toast.success("Login Successful")
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    // const { View } = useLottie(options);

    return (

        <div >
            <div className="flex items-center pt-32 justify-center min-h-[700px] bg-slate-50 dark:bg-transparent  ">

                <div className="flex bg-gray-100 rounded-2xl shadow-lg dark:bg-transparent dark:shadow-2xl">
                    {/* form section */}
                    <div className="sm:w-1/2 px-16 mb-5">
                        <h2 className="font-bold text-3xl mt-5">Register</h2>
                        {/* <p className="text-sm mt-4">By creating an account or signing in, you understand and agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies.</p> */}

                        <form className="flex flex-col gap-2" onSubmit={handleRegister}>
                            <input onChange={e => setEmail(e.target.value)} className="p-2 duration-300 ring-1 ring-violet-600 mt-8 rounded-xl border hover:shadow-lg" type="email" name="email" placeholder="E-mail" required />
                            <input onBlur={e => setPassword(e.target.value)} className="p-2 duration-300 ring-1 ring-violet-500 mt-7 rounded-xl border hover:shadow-lg" type="password" name="password" placeholder="Password" required />
                            <button className="bg-gradient-to-r  from-violet-600 to-indigo-600 text-white font-semibold rounded-xl py-2 mt-5 shadow-lg hover:scale-105 duration-300">Register</button>
                        </form>

                        <div className="mt-10  grid grid-cols-3 items-center text-gray-500 ">
                            <hr className="border-gray-500" />
                            <p className="text-center">OR</p>
                            <hr className="border-gray-500" />
                        </div>

                        <button onClick={handleGoogleLogIn} className="bg-white shadow-lg hover:scale-105 duration-300 border bg-gradient-to-r from-purple-300 to-indigo-400  w-full rounded-xl mt-5 flex justify-center items-center text-sm">
                            {/* <span className="">{Views}</span>  */}
                            <img className="w-10 " src={googles} alt="" />
                            Continue With Google</button>

                        {/* <button onClick={handleGithubLogIn} className="bg-white mb-7 shadow-lg hover:scale-105 duration-300 border bg-gradient-to-r from-purple-300 to-indigo-400 w-full rounded-xl mt-5 flex justify-center items-center text-sm">
                        
                            <img className="w-10 dark:" src={github} alt="" />
                            Continue With Github
                        </button> */}

                        <div>
                            <p className="border-t mt-2 py-4 border-gray-400">Already have an Account?<Link to='/login'><span className="underline text-slate-600 ">Login</span></Link></p>
                        </div>
                    </div>

                    {/* logo section */}
                    {/* <div className="w-1/2  hidden sm:block">
                        <span className="w-72 h-[700px] bg-cover " >{View}</span>
                    </div> */}
                    <div className="w-1/2 hidden sm:block">
                        <img src='https://th.bing.com/th/id/R.6a16c9b864263b1c0bed33c1bbc0906d?rik=xXimgLIZEKviFg&pid=ImgRaw&r=0' alt="" />
                    </div>
                </div>
            </div>

        </div >

    );
};

export default Login;










