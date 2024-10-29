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
import { useState } from "react";

const companies = ["TCS", "Cognizant", "Oracle", "Dell"];
const stories = [
  {
    name: "Pushpendra Sen",
    position: "Unit Sales Manager",
    description: "Thrilled to transition from student to banker with PW Skills' BFSI program, Pushpendra has secured a placement at ICICI Lombard. A new chapter begins! 🚀",
    from: "Fresher",
    to: "ICICI Lombard",
    image: "/path-to-image1.jpg",
  },
  {
    name: "Ishan Vats",
    position: "Financial Analyst",
    description: "Armed with newfound expertise from our BFSI program, Ishan landed his dream job as a financial analyst in Cognizant, propelling his career to new heights.",
    from: "Fresher",
    to: "Cognizant",
    image: "/path-to-image2.jpg",
  },
  {
    name: "Sagriti Jaiswal",
    position: "Cashier",
    description: "Sagriti's dedication shines as she progresses from novice to proficient banking pro, securing a Cashier role at YES Bank, thanks to our BFSI training!",
    from: "Fresher",
    to: "YES Bank",
    image: "/path-to-image3.jpg",
  },
  {
    name: "Deepti",
    position: "Customer Service Executive",
    description: "Grateful for PW's BFSI program, Deepti feels equipped with essential banking skills and professionalism. Excitement fills the air as they prepare to start their journey at Muthoot...",
    from: "Fresher",
    to: "Muthoot",
    image: "/path-to-image4.jpg",
  },
];

const SuccessStories = () => {
  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Achievers Work With</h2>
      <div className="flex justify-center gap-4 mb-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
          >
            <img
              src={`/logos/${company.toLowerCase()}.png`}
              alt={company}
              className="h-8 w-auto"
            />
          </div>
        ))}
      </div>

      <div className="text-center mb-6">
        <a
          href="https://pwskills.com/"
          className="text-blue-600 underline hover:text-blue-800"
        >
          https://pwskills.com/
        </a>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Success Stories</h2>
      <div className="relative w-full px-5 mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="min-w-[300px] bg-white rounded-lg shadow-lg p-4">
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">{story.name}</h3>
                          <p className="text-sm text-gray-500">{story.position}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{story.description}</p>
                      <div className="flex justify-between items-center text-sm">
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

      <div className="flex justify-center mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold">
          View all →
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
