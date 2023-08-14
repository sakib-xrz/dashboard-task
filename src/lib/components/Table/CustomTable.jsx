import Image from "next/image";
import React from "react";

const CustomTable = ({ headers, tableData, handleViewDetailsClick }) => {
    return (
        <div className="overflow-x-scroll lg:overflow-x-hidden">
            <table className={`text-sm text-gray-500 border w-full mx-auto`}>
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
                        <tr key={index} className="border-b text-center">
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