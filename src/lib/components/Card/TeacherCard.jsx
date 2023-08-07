export default function TeacherCard({ data }) {
    return (
        <div class="w-full p-4 mx-auto bg-white border border-gray-200 rounded-lg space-y-2">
            <div className="flex items center gap-4">
                <h2 class="font-semibold text-gray-800 mb-2">{data.name}</h2>
                <div>
                    <span class="text-xs bg-teal-100 text-teal-600 rounded-full py-1 px-2">
                        {data.subject}
                    </span>
                </div>
            </div>
            <p className="text-sm text-gray-600">Phone: {data.phone}</p>
            <p class="text-sm text-gray-600">{data.place}</p>
        </div>
    );
}
