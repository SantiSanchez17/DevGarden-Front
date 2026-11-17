import { Outlet } from "react-router-dom";


export default function AuthLayout() {
    return (
        <>
            <div className="bg-[#2A835F] min-h-screen">
                <div className="max-w-xs mx-auto pt-10 px-5">
                    <img className="rounded-full" src="/DevGardenLogo.jpg" alt="Logo" />
                    <div className="py-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
