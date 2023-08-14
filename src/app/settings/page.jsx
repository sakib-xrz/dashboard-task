"use client";
import React, { useState, useEffect } from "react";

export default function Settings() {
    const [view, setView] = useState("");

    // Load the default view mode from localStorage
    useEffect(() => {
        const storedView = localStorage.getItem("view");
        if (storedView) {
            setView(storedView);
        } else {
            setView("tabular");
        }
    }, []);

    const handleViewChange = (newView) => {
        setView(newView);
        // Store the selected view mode in localStorage
        localStorage.setItem("view", newView);
    };

    return (
        <div>
            <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                    Select view mode
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    This view will only be used for the art page.
                </p>
                <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                        <input
                            id="tabular"
                            name="select-view"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-600 outline-none cursor-pointer"
                            checked={view === "tabular"}
                            onChange={() => handleViewChange("tabular")}
                        />
                        <label
                            htmlFor="tabular"
                            className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
                        >
                            Tabular View
                        </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <input
                            id="compact"
                            name="select-view"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-600 outline-none cursor-pointer"
                            checked={view === "compact"}
                            onChange={() => handleViewChange("compact")}
                        />
                        <label
                            htmlFor="compact"
                            className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
                        >
                            Compact View
                        </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <input
                            id="card"
                            name="select-view"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-600 outline-none cursor-pointer"
                            checked={view === "card"}
                            onChange={() => handleViewChange("card")}
                        />
                        <label
                            htmlFor="card"
                            className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
                        >
                            Card View
                        </label>
                    </div>
                </div>
            </fieldset>
        </div>
    );
}
