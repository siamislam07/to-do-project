import { useContext, useState } from "react";
import { AuthContext } from "../../provide/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const {signIn} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        signIn(email, password)
        .then(result=>{
            console.log(result);
            toast.success('Login Successful')
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error);
            toast.error('Please Try With Google')
            toast.error(error.message)
        })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);

                // setSuccess(Swal.fire({
                //     icon: 'success',
                //     title: 'Great',
                //     text: 'You Login successfully',

                // }))
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                // setError(error.message)
            })
    }
    return (
        <div className="pt-24">
            <div className="max-w-[280px] mx-auto">
                <div className="flex flex-col items-center mt-[10vh]">
                    <h2 className="mb-5 text-inherit font-mono font-bold text-xl">Log In</h2>
                    <button onClick={handleGoogleSignIn} className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-transparent  border border-slate-600 rounded-md hover:bg-inherit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
                        <svg viewBox="0 0 48 48" width="24" height="24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </g></svg>
                        <span className="text-inherit font-medium">Continue with Google</span>
                    </button>
                    <span className="mb-2 text-gray-900">Or</span>
                    <form onSubmit={handleSubmit}>
                        <input onChange={e => setEmail(e.target.value)} type="email" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Email" />
                        <input onBlur={e => setPassword(e.target.value)} type="password" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Password"  />
                        <button className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">Log In</button>
                    </form>

                    <p className="text-center mt-3 text-[14px]">Don&#x27;t have an account?
                        <Link to="/register" clLinkssName="text-gray-600">Create one</Link>
                    </p>

                    {/* <p className="text-center mt-3 text-[14px]">By clicking continue, you agree to our
                        <a href="/terms" className="text-gray-600">Terms of Service</a> and <a href="/privacy" className="text-gray-600">Privacy Policy</a>.
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default Login;