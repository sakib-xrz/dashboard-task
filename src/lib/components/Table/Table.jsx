export default function Table({ tableData, headers }) {
    return (
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
                {tableData.map((data, index) => (
                    <tr key={index} className="border-b text-center">
                        {headers.map((header, columnIndex) => (
                            <td
                                key={columnIndex}
                                className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap"
                            >
                                {data[header.toLowerCase().replace(" ", "_")]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
