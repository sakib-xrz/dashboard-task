export default function StudentCard({ data }) {
    return (
        <div
            class={`w-full p-4 mx-auto bg-white border ${
                data.grade === "F" ? "border-red-200" : "border-gray-200"
            }  rounded-lg space-y-2`}
        >
            <h2 class="font-semibold text-gray-800 mb-2">{data.name}</h2>
            <p class={`text-sm text-gray-600`}>
                Grade:{" "}
                <span
                    className={`${
                        data.grade === "F" ? "text-red-600 " : " text-teal-600 "
                    } `}
                >
                    {data.grade}
                </span>
            </p>
            <p class="text-sm text-gray-600">
                Guardian Name {data.guardian_name}
            </p>
            <p className="text-sm text-gray-600">
                Guardian Number: {data.guardian_number}
            </p>
        </div>
    );
}
