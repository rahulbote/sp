import Link from "next/link"
import Navbar from "./Navbar"




const Header = () => {
    const Info = [
        {
            label:'Our location',
            add:"IndraNagar Chinchwad"
            ,
            logo:"logo"
        },
        {
            label:'Email Us',
            add:"sagarpawar.arya@gmail.com",
            logo:"logo"
        },
        {
            label:'Call Us',
            add:"+91 90673 67390",
            logo:"logo"
        },
    ]




  return (
    <div className="flex px-8 items-center justify-around h-[20%] w-full bg-black bg-opacity-10" >
        <div className="logo font-bold  text-4xl"><h1 className="text-red-500 ">SP Construction</h1></div>
        <ul className="flex">
            {
                Info.map((l,index)=>(
                    <div className="flex m-5 items-center" key={index}>
                        <div className="text-white  p-2 font-bold" >{l.logo}</div>
                       <div className="flex  flex-col  p-2 text-white">
                        <span className="font-bold  text-xl ">{l.label}</span>
                        <span className="hover:text-green-400 ">{l.add}</span>
                       </div>

                    </div>
                ))

            }


        </ul>



    </div>
  )
}

export default Header