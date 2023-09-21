import Image from "next/image";
import fb from "@/../public/icons/fb.png";
import insta from "@/../public/icons/insta.png";
import tele from "@/../public/icons/tele.png";
import tw from "@/../public/icons/tw.png";

const Hero = () => {
  return (
    <div className="flex">
      <div className="flex h-[60vh] w-20 text-white flex-col justify-center items-center   ">
        <ul className="flex   flex-col justify-center items-center py-2  ">
          <li className=" m-4 hover:bg-green-400 p-2 rounded-[50%]  ">
            <Image className="" src={fb} width={20} height={20}></Image>
          </li>
          <li className=" m-4 hover:bg-green-400 p-2 rounded-[50%]  ">
            <Image className="" src={insta} width={20} height={20}></Image>
          </li>
          <li className=" m-4 hover:bg-green-400 p-2 rounded-[50%]  ">
            <Image className="" src={tele} width={20} height={20}></Image>
          </li>
          <li className=" m-4 hover:bg-green-400 p-2 rounded-[50%]  ">
            <Image
              className="fill-red-400"
              src={tw}
              width={20}
              height={20}
            ></Image>
          </li>
        </ul>
      </div>
      <div className="r flex flex-col  w-[35vw] p-2  mx-5 my-8">
        <h1 className="my-2 text-6xl text-white font-bold">In Business</h1>
        <h1 className=" text-6xl text-white font-bold">Since 1998</h1>
        <p className="my-3 text-xl text-white ">
          Commercial, Industrial & Residential Paving. Asphalt & Concrete
          Paving, Constuction.{" "}
        </p>

        <button className="my-3 p-2 w-[40%] bg-green-600 text-white hover:bg-transparent border-green-600 border-2">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Hero;
