import Image from "next/image";
import React from "react";

const headers = ["ID", "ART", "TITLE", "PRICE", "SELLER", "DETAILS"];

const CustomTable = ({ tableData, handleViewDetailsClick }) => {
    return (
        <div className="overflow-x-scroll lg:overflow-x-hidden">
            <table className={`text-sm text-gray-500 border w-full mx-auto`}>
                <thead className="text-teal-600 uppercase bg-teal-100">
                    <tr>
                        <th className="px-4 py-3 hidden md:table-cell">ID</th>
                        <th className="px-4 py-3 ">ART</th>
                        <th className="px-4 py-3 hidden md:table-cell">
                            TITLE
                        </th>
                        <th className="px-4 py-3 hidden sm:table-cell">
                            PRICE
                        </th>
                        <th className="px-4 py-3 hidden sm:table-cell">
                            SELLER
                        </th>
                        <th className="px-4 py-3">DETAILS</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((data, index) => (
                        <tr key={index} className="border-b text-center">
                            <td className="px-4 py-2 font-bold text-gray-800 whitespace-nowrap hidden md:table-cell">
                                {data.id}
                            </td>
                            <td className="py-2 flex flex-col lg:flex-row justify-center items-center gap-2">
                                <Image
                                    className="w-10 h-10 object-cover rounded-md"
                                    src={data.image}
                                    alt={data.title}
                                    width={"200"}
                                    height={"200"}
                                />
                                <dl className="lg:hidden">
                                    <dd className="font-medium text-gray-800 md:hidden line-clamp-1">
                                        {data.title}
                                    </dd>
                                    <dd className="font-medium text-gray-800 sm:hidden">
                                        ${data.price}
                                    </dd>
                                </dl>
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap hidden md:table-cell">
                                {data.title}
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap hidden sm:table-cell">
                                ${data.price}
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap hidden sm:table-cell">
                                ${data.seller_name}
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                                <button
                                    onClick={() =>
                                        handleViewDetailsClick(data.id)
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
    );
};

export default CustomTable;
