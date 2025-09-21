import Link from "next/link";
import { AiFillThunderbolt } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";

const Brand = () => (
  <Link href="/" className="flex items-center space-x-2">
    {/* <img src="/O r i o n.png" width={120} height={50} alt="click pulso logo" /> */}
    {/* <GrTechnology className="text-indigo-500 w-9 h-9" /> */}
    <span className="flex items-center justify-between 
    font-bold text-2xl text-zinc-900 uppercase">
      Click Lab
         <AiFillThunderbolt className="text-blue-500 w-8 h-8" />
      <span className="">
      </span>
    </span>
      {/* <LuMousePointerClick className="h-8 w-8 text-zinc-900"/> */}
   
  </Link>
);
export default Brand;
