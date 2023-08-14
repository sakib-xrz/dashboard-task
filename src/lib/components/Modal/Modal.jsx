"use client";
import { getSingleArt } from "@/lib/api";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Modal({
    modalOpen,
    setModalOpen,
    selectedDataId,
    setSelectedDataId,
}) {
    const { data, isLoading } = useQuery({
        queryKey: [`art/${selectedDataId}`],
        queryFn: () => getSingleArt(selectedDataId),
        enabled: selectedDataId !== null, // Only enable the query when selectedDataId is not null
    });

    useEffect(() => {
        // Whenever modalOpen or selectedDataId changes to null, reset the selectedDataId
        if (!modalOpen || selectedDataId === null) {
            setSelectedDataId(null);
        }
    }, [modalOpen, selectedDataId, setSelectedDataId]);

    console.log(data);
    return (
        <div
            class={`${
                modalOpen ? "block" : "hidden"
            } min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover`}
        >
            <div
                onClick={() => {
                    setModalOpen(false), setSelectedDataId(null);
                }}
                class="absolute bg-black opacity-50 inset-0 z-0"
            ></div>

            {isLoading ? (
                "Loading..."
            ) : (
                <div class="w-full max-w-2xl p-5 mx-5 relative lg:mx-auto my-auto rounded-md shadow-lg bg-white ">
                    <XMarkIcon
                        onClick={() => {
                            setModalOpen(false), setSelectedDataId(null);
                        }}
                        className="w-8 h-8 cursor-pointer text-teal-600 bg-teal-100 rounded-full absolute top-5 right-5 p-1"
                    />
                    <h2 className="text-center font-semibold text-2xl underline">
                        Art Details
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
                        <Image
                            className="w-4/12 h-auto object-cover rounded-md"
                            src={data?.image}
                            alt={data?.title}
                            width={"200"}
                            height={"200"}
                        />
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <Image
                                    className="w-12 h-12 lg:w-16 lg:h-16 object-cover rounded-full"
                                    src={data.seller_avatar}
                                    alt={data.title}
                                    width={"200"}
                                    height={"200"}
                                />
                                <div>
                                    <h4 className="font-semibold text-lg">
                                        {data.seller_name}
                                    </h4>
                                    <p className="text-md">
                                        {data.seller_city},{data.seller_country}
                                    </p>
                                </div>
                            </div>
                            <h3 className="font-semibold text-xl">
                                {data.title}
                            </h3>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Veritatis aliquam odio
                                debitis, rerum error iusto.
                            </p>

                            <h4 className="font-bold text-3xl mb-5">
                                ${data.price}
                            </h4>
                            <div className="flex justify-center">
                                <button className="bg-teal-100 w-full text-teal-600 px-2 py-1 rounded-md text-lg">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
