import { Link, useNavigate } from "react-router-dom"
import { useToast } from "../../components/ui/use-toast";
import { useState } from "react";
import { ToastAction } from "../../components/ui/toast";
import { signin } from "../../services/auth";

const Signin = () => {
    
    const [noticePw, setNoticePw] = useState("")
    const [noticeEm, setNoticeEm] = useState("")
    const [pwClasslist, setPwClasslist] = useState("focus:outline-none w-full rounded-lg border-gray-200 p-4 ps-12 text-sm shadow-sm bg-[#F4F4F4]")
    const [emClasslist, setEmClasslist] = useState("focus:outline-none w-full rounded-lg border-gray-200 p-4 ps-12 text-sm shadow-sm bg-[#F4F4F4]")
    const navi = useNavigate()
    const { toast } = useToast()
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleToggle = () => {
        setShowPassword(!showPassword);
      };
      const curent_date = new Date()
      const today = curent_date.toLocaleDateString('vi-VN',{day:'numeric',month:'numeric',year:'numeric'})
    const handleSubmit = async (e:any) => {
        e.preventDefault();
       if (!email) {
            setEmClasslist("focus:outline-none w-full border-solid border-4 rounded-lg border-[#FF6A55] p-4 ps-12 text-sm shadow-sm bg-[#FFEDE4]")
            setNoticeEm('Email must not be empty!')
            return;        
       } else {
            setEmClasslist("focus:outline-none w-full rounded-lg border-gray-200 p-4 ps-12 text-sm shadow-sm bg-[#F4F4F4]")
            setNoticeEm('')
    }
       if (!password) {
            setPwClasslist("focus:outline-none w-full border-solid border-4 rounded-lg border-[#FF6A55] p-4 ps-12 text-sm shadow-sm bg-[#FFEDE4]")
            setNoticePw('Password must not be empty!')
            return;  
       } else {
            setPwClasslist("focus:outline-none w-full rounded-lg border-gray-200 p-4 ps-12 text-sm shadow-sm bg-[#F4F4F4]")
            setNoticePw('')
       }
 
       const formData = new FormData();
       formData.append("email_or_username", email);
       formData.append("password", password);
        try {
          const response:any = await signin(formData);
          const { message } = response;
          
            if(message === "Invalid Password!!") {
              toast({
                variant: "destructive",
                description: `${message}`,
                action: <ToastAction altText="Try again">Try again</ToastAction>
              })
            }
                else{
                    toast({
                    variant: "default",
                    description: `Login successfully!!`,
                    });
                    const account = JSON.stringify(response)
                    localStorage.setItem('accessToken',response.token)
                    localStorage.setItem('user',account)
                    localStorage.setItem('lastLoginDate',today)
                    navi(`/profile/edit/${response.id_user}`)
            }            
        } catch (error) {
          console.log(error);
          toast({
            variant: "destructive",
            description: `Login fail!!`,
            action: <ToastAction altText="Try again">Try again</ToastAction>
          });
        }       
      };
  return (
    <div className="md:w-[1440px] w-[390px] mx-auto">
        
        <div className="md:grid grid-cols-2">
            <div className="bg-[#F2FDFF] items-center md:w-[750px] w-[390px]">
            <header className="pt-[20px] md:pl-[28px] pl-[150px] pb-[20px]">
            <img src="img\logo.png" alt="" />
            </header>
                <img className="px-[29px] mt-[150px] mb-[90px] md:block hidden" src="img\signin.png" alt="" />
            </div>
            <div className="mx-auto md:w-[602px] max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg md:mt-[180px] mt-[60px]">
                            <form onSubmit={handleSubmit} className="mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                                
                            <h1 className="text-2xl font-bold text-[#2A85FF]-600 sm:text-3xl">Sign In</h1>
                            
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>

                                <div className="relative">
                                <input
                                    id="em_box"
                                    type="text"
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    className={emClasslist}
                                    placeholder="Enter email"
                                    
                                />
                                
                                <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                
                                </div>
                                <span className="text-[#FF6A55] font-[600] text-[13px] ml-2">{noticeEm}</span>
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>

                                <div className="relative">
                                    <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                </span>
                                
                                <input
                                    id="pw_box"
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                    className={pwClasslist}
                                    placeholder="Enter password"
                                />
                                {
                                    showPassword?
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer" onClick={()=>handleToggle()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg></span>
                                    :
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer" onClick={()=>handleToggle()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg></span>
                                }
                                </div>
                                <span className="text-[#FF6A55] font-[600] text-[13px] ml-2">{noticePw}</span>
                            </div>
                            <div className="mb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <label className="block text-gray-500 font-bold" htmlFor="remember">
                                        <input className="mx-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" id="remember" name="remember"/>
                                        <span className="text-sm">
                                        Remember me
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <Link className="font-bold text-sm text-blue-500 hover:text-blue-800" to={`/forgotpassword`}>
                                        Forgot password
                                    </Link>
                                </div>
                            </div>
                        </div>
                            
                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-[#2A85FF] px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign in
                            </button>
                            
                            <p className="text-sm text-gray-500">
                                Don't have an account?
                                <Link className="underline" to={`/signup`}>Sign up</Link>
                            </p>
                            </form>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default Signin
