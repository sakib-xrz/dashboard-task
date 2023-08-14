"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getArt } from "@/lib/api";
import Modal from "@/lib/components/Modal/Modal";
import CustomTable from "@/lib/components/Table/CustomTable";
import CardView from "@/lib/components/View/CardView";
import CompactView from "@/lib/components/View/CompactView";

const headers = ["ID", "ART", "TITLE", "PRICE", "SELLER", "DETAILS"];

export default function Art() {
    const { data, isLoading } = useQuery({
        queryKey: ["art"],
        queryFn: getArt,
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDataId, setSelectedDataId] = useState(null);

    const view = localStorage.getItem("view") || "tabular";

    const handleViewDetailsClick = (dataId) => {
        setSelectedDataId(dataId);
        setModalOpen(true);
    };

    useEffect(() => {
        localStorage.setItem("view", view);
    }, [view]);

    const renderTableView = () => (
        <CustomTable
            headers={headers}
            tableData={data}
            handleViewDetailsClick={handleViewDetailsClick}
        />
    );

    const renderCompactView = () => <CompactView data={data} />;
    const renderCardView = () => <CardView data={data} />;

    const renderView = () => {
        switch (view) {
            case "compact":
                return renderCompactView();
            case "card":
                return renderCardView();
            default:
                return renderTableView();
        }
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
                            Art: {data?.length}
                        </p>
                        <Link
                            className="lg:hidden p-2 text-teal-700 rounded-md cursor-pointer font-medium text-lg"
                            href="/settings"
                        >
                            <AdjustmentsHorizontalIcon className="h-8 w-8" />
                        </Link>
                    </div>
                    {renderView()}
                    <Modal
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        selectedDataId={selectedDataId}
                        setSelectedDataId={setSelectedDataId}
                    />
                </>
            )}
        </div>
    );
}
