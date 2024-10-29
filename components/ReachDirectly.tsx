import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const ReachDirectly = () => {
    return (
        <div>
            <div className="lg:max-w-[1280px] mx-auto py-10">
                <div className="flex justify-center">
                    <Button className='bg-black rounded-full py-2'>Start Learning →</Button>
                </div>


                <div className="flex lg:flex-row flex-col justify-center gap-20 bg-gray-100 rounded-2xl mt-5 px-20 py-10">
                    <div className=" lg:max-w-[500px]">
                        <h1 className='lg:text-5xl font-bold py-5'>Reach me directly</h1>
                        <div className="flex items-center gap-5 bg-white rounded-3xl p-8">
                            <Image src="/plane.png" width={100} height={20} alt="" />
                            <div className="">
                                <div className="lg:text-2xl font-semibold">Email Me</div>
                                <div className="">
                                    Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa.
                                    <p className='font-bold cursor-pointer mt-5'>Contact@course.com  {">"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:max-w-[500px]">
                        <p className='text-[#8c8c8c] py-5'>
                            Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa.

                        </p>
                        <div className="flex items-center gap-5 bg-white rounded-3xl p-8">
                            <Image src="/book.png" width={100} height={20} alt="" />
                            <div className="">
                                <div className="lg:text-2xl font-semibold">Live Chat</div>
                                <div className="">
                                    Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa.
                                    <p className='font-bold cursor-pointer mt-5'>Chat now  {">"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReachDirectly