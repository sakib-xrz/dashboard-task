"use client";
import { getArt } from "@/lib/api";
import Modal from "@/lib/components/Modal/Modal";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const headers = ["ID", "ART", "TITLE", "PRICE", "SELLER", "DETAILS"];

export default function Art() {
    const { data: tableData, isLoading } = useQuery({
        queryKey: ["art"],
        queryFn: getArt,
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDataId, setSelectedDataId] = useState(null);

    const handleViewDetailsClick = (dataId) => {
        setSelectedDataId(dataId);
        setModalOpen(true);
    };

    return (
        <div>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    Loading...
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl lg:text-3xl text-gray-800 font-medium">
                            Art: {tableData?.length}
                        </p>
                        <Link
                            className="lg:hidden p-2 text-teal-700 rounded-md cursor-pointer font-medium text-lg"
                            href={"/settings"}
                        >
                            <AdjustmentsHorizontalIcon className="h-8 w-8" />
                        </Link>
                    </div>
                    <div className="overflow-x-scroll lg:overflow-x-hidden">
                        <table
                            className={`text-sm text-gray-500 border w-full mx-auto`}
                        >
                            <thead className="text-teal-600 uppercase bg-teal-100">
                                <tr>
                                    {headers.map((header, index) => (
                                        <th key={index} className="px-4 py-3">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tableData?.map((data, index) => (
                                    <tr
                                        key={index}
                                        className="border-b text-center"
                                    >
                                        <td className="px-4 py-2 font-bold text-gray-800 whitespace-nowrap">
                                            {data.id}
                                        </td>
                                        <td className="py-2 flex justify-center">
                                            <Image
                                                className="w-10 h-10 object-cover rounded-md"
                                                src={data.image}
                                                alt={data.title}
                                                width={"200"}
                                                height={"200"}
                                            />
                                        </td>
                                        <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                                            {data.title}
                                        </td>
                                        <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                                            ${data.price}
                                        </td>
                                        <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                                            ${data.seller_name}
                                        </td>
                                        <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                                            <button
                                                onClick={() =>
                                                    handleViewDetailsClick(
                                                        data.id
                                                    )
                                                }
                                                className="border border-teal-500 text-teal-600 px-1 rounded-sm"
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Modal
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        selectedDataId={selectedDataId}
                        setSelectedDataId={setSelectedDataId}
                    />{" "}
                </>
            )}
        </div>
    );
}
