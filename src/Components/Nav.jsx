import {
    MdHome,
    MdSearch,
    MdMic,
    MdVideoCall,
    MdNotifications,
    MdAccountCircle
} from "react-icons/md";
import { FaBars } from "react-icons/fa";


// components/Navbar.jsx
export default function Navbar() {
    return (
        <div className=" h-14 flex items-center justify-between px-4 py-2 bg-white shadow-md">


            <div className="w-[250px] flex items-center gap-0">
                <FaBars className="text-2xl font-semibold cursor-pointer text-gray-700" />

                <img className="w-25 h-20" src="youtubeLogo.jpg" alt="" />
                <div className=" text-center text-xl font-semibold">
                    <h2>Youtube</h2>
                </div>

            </div>



            <div className="flex justify-evenly gap-10">

                <div className="flex items-center gap-4 text-2xl font-semibold text-gray-700">
                    <MdHome className="hover:text-red-600 cursor-pointer" />
                </div>

                {/* Middle - Search */}
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full w-[700px]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 bg-transparent outline-none"
                    />
                    <MdSearch className="text-gray-600 cursor-pointer" />
                    <MdMic className="text-gray-600 cursor-pointer" />
                </div>

            </div>




            {/* Right - Icons */}
            <div className="flex items-center gap-4 text-2xl text-gray-700">
                <MdVideoCall className="hover:text-red-600 cursor-pointer" />
                <MdNotifications className="hover:text-red-600 cursor-pointer" />
                <MdAccountCircle className="hover:text-red-600 cursor-pointer" />
            </div>
        </div>
    );
}


