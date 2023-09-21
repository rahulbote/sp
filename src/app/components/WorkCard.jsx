"use client"
import React from "react";
import { Button, Image } from "@nextui-org/react";

const WorkCard = () => {

  const workdata=[
    {
      link:"https://media.istockphoto.com/id/623298654/photo/paving-stone-worker.jpg?s=612x612&w=0&k=20&c=Crb1f7KlO7RktSptlv-9kCJdEU1IxAr4cm0R_X0VRug=",
      sr:"1",
      name:"Asphalt Paving",
      des:"Commercial, Industrial & Residential Paving. Asphalt & Concrete Paving, Constuction."
    },
    {
      link:"https://media.istockphoto.com/id/623298654/photo/paving-stone-worker.jpg?s=612x612&w=0&k=20&c=Crb1f7KlO7RktSptlv-9kCJdEU1IxAr4cm0R_X0VRug=",
      sr:"2",
      name:"Retaining Walls",
      des:"Commercial, Industrial & Residential Paving. Asphalt & Concrete Paving, Constuction."
    },
    {
      link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVvtMtMF0DbFzgf32kRy1hjyy8xMLVOBkzw&usqp=CAU",
      sr:"3",
      name:"Design Service",
      des:"Commercial, Industrial & Residential Paving. Asphalt & Concrete Paving, Constuction."
    },
    {
      link:"https://freerangestock.com/sample/27735/pavement-bricks.jpg",
      sr:"4",
      name:"Roadway Service",
      des:"Commercial, Industrial & Residential Paving. Asphalt & Concrete Paving, Constuction."
    },
  ]


 

  return (
    <div className="flex w-[100vw] h-[80vh] p-4 ">

      {workdata.map((w,index)=>(
        <div key={index} className="bg-green-600 h-[100%] text-white mx-4 w-[30%]">
        <Image
          isZoomed
          src={w.link}
          
          width={400}
          
          className="bg-cover cursor-pointer bg-center"
        />
        <div className="p-4 m-2 relative ">
          <h1 className="text-lg my-2">{w.sr}</h1>
          <h1 className="text-lg my-2 font-bold">{w.name}</h1>
          <p> 
            {w.des}
          </p>
          <Button className=" border-none rounded-lg my-4 text-green-600 font-bold bg-white p-2 bottom-0">Read More </Button >
        </div>
      </div>
      ))}


      
    </div>
  );
};

export default WorkCard;
