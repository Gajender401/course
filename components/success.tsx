'use client'

import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import OurAchiver from "./OurAchiver";

const stories = [
  {
    name: "Pushpendra Sen",
    position: "Unit Sales Manager",
    description: "Thrilled to transition from student to banker with PW Skills' BFSI program, Pushpendra has secured a placement at ICICI Lombard. A new chapter begins! 🚀",
    from: "Fresher",
    to: "ICICI Lombard",
    image: "/b1.png",
  },
  {
    name: "Ishan Vats",
    position: "Financial Analyst",
    description: "Armed with newfound expertise from our BFSI program, Ishan landed his dream job as a financial analyst in Cognizant, propelling his career to new heights.",
    from: "Fresher",
    to: "Cognizant",
    image: "/b1.png",
  },
  {
    name: "Sagriti Jaiswal",
    position: "Cashier",
    description: "Sagriti's dedication shines as she progresses from novice to proficient banking pro, securing a Cashier role at YES Bank, thanks to our BFSI training!",
    from: "Fresher",
    to: "YES Bank",
    image: "/b1.png",
  },
  {
    name: "Deepti",
    position: "Customer Service Executive",
    description: "Grateful for PW's BFSI program, Deepti feels equipped with essential banking skills and professionalism. Excitement fills the air as they prepare to start their journey at Muthoot...",
    from: "Fresher",
    to: "Muthoot",
    image: "/b1.png",
  },
  {
    name: "Deepti",
    position: "Customer Service Executive",
    description: "Grateful for PW's BFSI program, Deepti feels equipped with essential banking skills and professionalism. Excitement fills the air as they prepare to start their journey at Muthoot...",
    from: "Fresher",
    to: "Muthoot",
    image: "/b1.png",
  },
  {
    name: "Deepti",
    position: "Customer Service Executive",
    description: "Grateful for PW's BFSI program, Deepti feels equipped with essential banking skills and professionalism. Excitement fills the air as they prepare to start their journey at Muthoot...",
    from: "Fresher",
    to: "Muthoot",
    image: "/b1.png",
  },
  {
    name: "Deepti",
    position: "Customer Service Executive",
    description: "Grateful for PW's BFSI program, Deepti feels equipped with essential banking skills and professionalism. Excitement fills the air as they prepare to start their journey at Muthoot...",
    from: "Fresher",
    to: "Muthoot",
    image: "/b1.png",
  },
  {
    name: "Deepti",
    position: "Customer Service Executive",
    description: "Grateful for PW's BFSI program, Deepti feels equipped with essential banking skills and professionalism. Excitement fills the air as they prepare to start their journey at Muthoot...",
    from: "Fresher",
    to: "Muthoot",
    image: "/b1.png",
  },
  {
    name: "Deepti",
    position: "Customer Service Executive",
    description: "Grateful for PW's BFSI program, Deepti feels equipped with essential banking skills and professionalism. Excitement fills the air as they prepare to start their journey at Muthoot...",
    from: "Fresher",
    to: "Muthoot",
    image: "/b1.png",
  },
];

const SuccessStories = () => {
  return (
    <div className=" lg:max-w-[1280px] mx-auto">
      <h2 className="text-4xl font-bold mt-10">Our Achievers Work With</h2>
      <div className="flex justify-center gap-4 ">
        <OurAchiver />
      </div>

      <div className="text-center mt-5">
        <a
          href="https://pwskills.com/"
          className="text-blue-600 underline hover:text-blue-800 text-xl"
        >
          https://pwskills.com/
        </a>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-6 text-center mt-10">Success Stories</h2>
        <div className="flex justify-end mt-8">
          <button className="border-black border-[1px] text-black bg-white px-2 h-10 rounded-full font-semibold">
            View all →
          </button>
        </div>
      </div>
      <div className="relative w-full px-5 mx-auto pb-20">
        <Carousel className="w-full">
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-2">
                  <Card className="min-w-[300px] bg-white rounded-lg shadow-lg h-[350px] w-[300px] mx-auto flex flex-col">
                    <div className="bg-green-100 text-green-700 text-center font-semibold p-2 rounded-t-xl">
                      Cracked First Job
                    </div>
                    <CardContent className="flex flex-col p-4 flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <h3 className="text-lg font-semibold">{story.name}</h3>
                          <p className="text-sm text-gray-500">{story.position}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2 flex-1">{story.description}</p>
                      <div className="flex justify-between items-center text-sm cursor-pointer">
                        <div className="text-green-700">
                          From <strong>{story.from}</strong>
                        </div>
                        <FaArrowRight className="text-gray-400" />
                        <div className="text-blue-700">
                          To <strong>{story.to}</strong>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>


    </div>
  );
};

export default SuccessStories;
