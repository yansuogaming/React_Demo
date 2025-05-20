import imgLogo from "@images/logo2.webp";
import { Toaster } from "react-hot-toast";

export default function GuestLayout({ children }) {
    return (
        <main className='bg-primary-foreground container grid h-svh max-w-none items-center justify-center'>
            <div className='mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8'>
                <div className='mb-4 mx-auto'>
                    <img src={imgLogo} alt="" width={100} />
                </div>
                {children}
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </main>
    )
}
