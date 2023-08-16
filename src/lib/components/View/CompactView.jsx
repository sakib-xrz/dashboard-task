import React from "react";
import CompactViewCard from "../Card/CompactViewCard";

export default function CompactView({ data }) {
    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mb-10">
            {data?.map((item) => (
                <CompactViewCard data={item} key={data.id} />
            ))}
        </div>
    );
}
