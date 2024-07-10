import { useNavigate } from "react-router-dom"

export function RootTopBar() {
    const navigate = useNavigate()
    return (
        <div className="py-2 pl-4 md:px-24 flex justify-between border-b border-black">
            <div className="py-3 flex items-center font-bold text-2xl md:text-3xl">
                <div>Attendance </div>
            </div>
            <div className="flex items-center">
                <div className="bg-black text-white p-2 ml-2 md:mx-2 md:py-2 md:px-4 cursor-pointer border rounded-full "
                    onClick={() => {
                        navigate("/login")
                    }}>Sign in</div>
                <div className="bg-black text-white p-2 ml-2 md:mx-2 md:py-2 md:px-4 cursor-pointer border rounded-full "
                    onClick={() => {
                        navigate("/register")
                    }}>Get Started</div>
            </div>
        </div>
    )
}

export function Footer(){
    return (
        <div className="fixed bottom-0 left-0 w-full z-10 overflow:hidden">
        <div className="bg-white py-4 border-t border-black ">
            <div className="flex justify-center space-x-2 cursor-pointer">
            <div>Help</div>
            <div>Status</div>
            <div>About</div>
            <div>Careers</div>
            <div className="hidden md:block">Press</div>
          <div className="hidden md:block">Blog</div>
          <div className="hidden md:block">Privacy</div>
          <div className="hidden md:block">Terms</div>
          <div className="hidden md:block">Text to Speech</div>
          <div className="hidden md:block">Teams</div>
            </div>
        </div>
        </div>
    )   
}