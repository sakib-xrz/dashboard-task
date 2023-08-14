"use client";
import { getArt } from "@/lib/api";
import Modal from "@/lib/components/Modal/Modal";
import CustomTable from "@/lib/components/Table/CustomTable";
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
                    <CustomTable
                        headers={headers}
                        tableData={tableData}
                        handleViewDetailsClick={handleViewDetailsClick}
                    />
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
