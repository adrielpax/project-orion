import Link from "next/link";
import { AiFillThunderbolt } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";

const Brand = () => (
  <Link href="/" className="flex items-center space-x-2">
    {/* <img src="/O r i o n.png" width={120} height={50} alt="CLICK LAB logo" /> */}
    {/* <GrTechnology className="text-indigo-500 w-9 h-9" /> */}
    <span className="font-bold text-4xl text-white text-uppercase">
      CLI<span className="text-orange-600">C</span>K LAB 
    </span>
      {/* <LuMousePointerClick className="h-8 w-8 text-white"/> */}
    {/* <AiFillThunderbolt className="text-red-600 w-6 h-6" /> */}
  </Link>
);
export default Brand;
