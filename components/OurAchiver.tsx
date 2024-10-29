import * as React from "react";
import { useRef } from "react";
import { Button } from "@/components/ui/button"; // Adjust based on your UI library
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { FaArrowRight } from "react-icons/fa";

const companies = [
    { id: 1, logo: "https://www.google.com/imgres?q=mnc%20companies%20logos%20and%20taglines&imgurl=http%3A%2F%2Fanimationvisarts.com%2Fwp-content%2Fuploads%2F2016%2F10%2Ftata-logo-design.jpg&imgrefurl=https%3A%2F%2Fanimationvisarts.com%2Ftop-10-brands-of-india-with-their-logo%2F&docid=XfneYtko-omhOM&tbnid=m39S5JGPmhnDDM&vet=12ahUKEwiFj96VpbOJAxXKRmwGHYy9KkAQM3oECFkQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwiFj96VpbOJAxXKRmwGHYy9KkAQM3oECFkQAA" },
    { id: 2, logo: "https://via.placeholder.com/150/FF0000/FFFFFF?text=LogoB" },
    { id: 3, logo: "https://via.placeholder.com/150/00FF00/FFFFFF?text=LogoC" },
    { id: 4, logo: "https://via.placeholder.com/150/FFFF00/FFFFFF?text=LogoD" },
    { id: 5, logo: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=LogoE" },
    { id: 6, logo: "https://via.placeholder.com/150/00FFFF/FFFFFF?text=LogoF" },
    { id: 7, logo: "https://via.placeholder.com/150/800080/FFFFFF?text=LogoG" },
    { id: 8, logo: "https://via.placeholder.com/150/FFA500/FFFFFF?text=LogoH" },
    { id: 9, logo: "https://via.placeholder.com/150/000080/FFFFFF?text=LogoI" },
    { id: 10, logo: "https://via.placeholder.com/150/008000/FFFFFF?text=LogoJ" },
    { id: 11, logo: "https://via.placeholder.com/150/FFC0CB/FFFFFF?text=LogoK" },
    { id: 12, logo: "https://via.placeholder.com/150/FFD700/FFFFFF?text=LogoL" },
    { id: 13, logo: "https://via.placeholder.com/150/000000/FFFFFF?text=LogoM" },
    { id: 14, logo: "https://via.placeholder.com/150/FFFFFF/000000?text=LogoN" },
    { id: 15, logo: "https://via.placeholder.com/150/C0C0C0/000000?text=LogoO" },
];

const OurAchiver = () => {

    return (
        <div className="relative mt-10 lg:max-w-[1280px] mx-auto">
            <Carousel className="">
                <CarouselContent>
                    {companies.map((card, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 flex justify-center">
                            <div className="p-2 flex justify-center">
                                <Card className="min-w-[300px] bg-white rounded-lg h-[150px] flex justify-center items-center">
                                    <CardContent className="p-4 flex justify-center items-center">
                                        <div className="gap-4 mb-4 flex justify-center">
                                            <img
                                                src={card.logo}
                                                className="w-12 h-12  object-cover"
                                                alt={`Company logo ${index + 1}`}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
            </Carousel>

        </div>
    );
};

export default OurAchiver;
