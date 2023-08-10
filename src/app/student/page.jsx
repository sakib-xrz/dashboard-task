"use client";
import StudentCard from "@/lib/components/Card/StudentCard";
import Table from "@/lib/components/Table/Table";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export const studentData = [
  {
    name: "John Smith",
    student_id: "101",
    guardian_number: "123-456-7890",
    guardian_name: "Mary Smith",
    grade: "A+",
  },
  {
    name: "Jane Doe",
    student_id: "102",
    guardian_number: "987-654-3210",
    guardian_name: "Michael Doe",
    grade: "A",
  },
  {
    name: "Alex Johnson",
    student_id: "103",
    guardian_number: "555-555-5555",
    guardian_name: "Sarah Johnson",
    grade: "F",
  },
  {
    name: "Emily Brown",
    student_id: "104",
    guardian_number: "111-222-3333",
    guardian_name: "David Brown",
    grade: "B",
  },
  {
    name: "William Taylor",
    student_id: "105",
    guardian_number: "444-555-6666",
    guardian_name: "Jennifer Taylor",
    grade: "A-",
  },
  {
    name: "Sophia Lee",
    student_id: "106",
    guardian_number: "777-888-9999",
    guardian_name: "Robert Lee",
    grade: "C",
  },
  {
    name: "James Wilson",
    student_id: "107",
    guardian_number: "222-333-4444",
    guardian_name: "Linda Wilson",
    grade: "D",
  },
  {
    name: "Emma Anderson",
    student_id: "108",
    guardian_number: "666-777-8888",
    guardian_name: "Richard Anderson",
    grade: "B",
  },
  {
    name: "Michael Martinez",
    student_id: "109",
    guardian_number: "555-444-3333",
    guardian_name: "Laura Martinez",
    grade: "A",
  },
  {
    name: "Olivia Harris",
    student_id: "110",
    guardian_number: "999-888-7777",
    guardian_name: "Matthew Harris",
    grade: "C",
  },
  {
    name: "Liam Hall",
    student_id: "111",
    guardian_number: "333-222-1111",
    guardian_name: "Elizabeth Hall",
    grade: "F",
  },
  {
    name: "Ava Turner",
    student_id: "112",
    guardian_number: "777-666-5555",
    guardian_name: "Daniel Turner",
    grade: "A-",
  },
  {
    name: "Noah Wright",
    student_id: "113",
    guardian_number: "888-999-0000",
    guardian_name: "Rebecca Wright",
    grade: "B",
  },
  {
    name: "Isabella Lewis",
    student_id: "114",
    guardian_number: "444-333-2222",
    guardian_name: "Kevin Lewis",
    grade: "D",
  },
  {
    name: "Sophia Baker",
    student_id: "115",
    guardian_number: "111-555-9999",
    guardian_name: "Christine Baker",
    grade: "A+",
  },
  {
    name: "Mia Mitchell",
    student_id: "116",
    guardian_number: "777-333-8888",
    guardian_name: "Jeffrey Mitchell",
    grade: "C",
  },
  {
    name: "Lucas Green",
    student_id: "117",
    guardian_number: "555-777-1111",
    guardian_name: "Patricia Green",
    grade: "F",
  },
  {
    name: "Jackson Adams",
    student_id: "118",
    guardian_number: "666-444-2222",
    guardian_name: "Mark Adams",
    grade: "B",
  },
  {
    name: "Emma Martinez",
    student_id: "119",
    guardian_number: "888-666-4444",
    guardian_name: "Karen Martinez",
    grade: "A-",
  },
  {
    name: "Oliver Turner",
    student_id: "120",
    guardian_number: "555-999-3333",
    guardian_name: "Steven Turner",
    grade: "C",
  },
  {
    name: "Ethan White",
    student_id: "121",
    guardian_number: "777-555-1111",
    guardian_name: "Angela White",
    grade: "A",
  },
  {
    name: "Harper Scott",
    student_id: "122",
    guardian_number: "666-222-8888",
    guardian_name: "James Scott",
    grade: "C",
  },
  {
    name: "Liam Adams",
    student_id: "123",
    guardian_number: "555-888-4444",
    guardian_name: "Jessica Adams",
    grade: "B",
  },
  {
    name: "Ava Garcia",
    student_id: "124",
    guardian_number: "999-777-5555",
    guardian_name: "Carlos Garcia",
    grade: "A-",
  },
  {
    name: "Sophia Clark",
    student_id: "125",
    guardian_number: "888-666-4444",
    guardian_name: "Donna Clark",
    grade: "F",
  },
  {
    name: "Jackson Turner",
    student_id: "126",
    guardian_number: "555-222-8888",
    guardian_name: "Joseph Turner",
    grade: "B",
  },
  {
    name: "Oliver Hill",
    student_id: "127",
    guardian_number: "777-999-3333",
    guardian_name: "Nancy Hill",
    grade: "D",
  },
  {
    name: "Emma Collins",
    student_id: "128",
    guardian_number: "111-555-7777",
    guardian_name: "Timothy Collins",
    grade: "A",
  },
  {
    name: "Noah Hall",
    student_id: "129",
    guardian_number: "666-333-9999",
    guardian_name: "Sharon Hall",
    grade: "C",
  },
  {
    name: "Liam Wright",
    student_id: "130",
    guardian_number: "888-222-5555",
    guardian_name: "Kenneth Wright",
    grade: "B",
  },
  {
    name: "Isabella Adams",
    student_id: "131",
    guardian_number: "444-555-7777",
    guardian_name: "Christopher Adams",
    grade: "A-",
  },
  {
    name: "Mia Turner",
    student_id: "132",
    guardian_number: "777-333-1111",
    guardian_name: "Margaret Turner",
    grade: "D",
  },
  {
    name: "Lucas Martinez",
    student_id: "133",
    guardian_number: "555-444-8888",
    guardian_name: "Steven Martinez",
    grade: "A",
  },
  {
    name: "Olivia Jackson",
    student_id: "134",
    guardian_number: "111-222-3333",
    guardian_name: "Karen Jackson",
    grade: "F",
  },
  {
    name: "Sophia Johnson",
    student_id: "135",
    guardian_number: "555-666-7777",
    guardian_name: "Richard Johnson",
    grade: "C",
  },
  {
    name: "Ava Brown",
    student_id: "136",
    guardian_number: "888-777-9999",
    guardian_name: "Paul Brown",
    grade: "B",
  },
  {
    name: "Liam Wilson",
    student_id: "137",
    guardian_number: "444-333-6666",
    guardian_name: "Maria Wilson",
    grade: "A-",
  },
  {
    name: "Oliver Harris",
    student_id: "138",
    guardian_number: "111-777-5555",
    guardian_name: "George Harris",
    grade: "D",
  },
  {
    name: "Emma Walker",
    student_id: "139",
    guardian_number: "222-888-4444",
    guardian_name: "Deborah Walker",
    grade: "A",
  },
  {
    name: "Noah Lewis",
    student_id: "140",
    guardian_number: "777-333-5555",
    guardian_name: "Anthony Lewis",
    grade: "C",
  },
];

export const tableHeaders = [
  "Student Id",
  "Name",
  "Guardian Name",
  "Guardian Number",
  "Grade",
];

const gradeValues = ["A+", "A", "A-", "B", "C", "D", "F"];

export default function Student() {
  const filterParams = useSearchParams();
  const getUrlArray = filterParams?.toString()?.split("=")[1]?.split("%26")
  const filters = getUrlArray?.map((filter) => decodeURIComponent(filter).toUpperCase());

  const filteredStudentData =
    filters?.length > 0
      ? studentData.filter((data) => filters.includes(data.grade))
      : studentData;

  return (
    <div className="space-y-5">
      <div className="md:flex justify-between items-center">
        <p className="text-2xl lg:text-3xl text-gray-800 font-medium mb-5 md:mb-0">
          Student: {filteredStudentData.length}
        </p>
        <div className="rounded-md border border-gray-100 bg-teal-100 text-teal-600 p-1">
          <ul className="flex items-center text-sm sm:gap-2 font-medium text-center">
            {gradeValues.map((grade, index) => (
              <li key={index} className="flex-1">
                <Link
                  href={
                    filterParams.toString().length > 0
                      ? `?${filterParams.toString()}${encodeURIComponent(
                        `&${grade}`
                      ).toLowerCase()}`
                      : `?filter=${encodeURIComponent(
                        grade
                      ).toLowerCase()}`
                  }
                  className={`inline-block rounded-md cursor-pointer p-2 hover:text-gray-700 w-10 mx-auto ${filters?.includes(grade)
                      ? "bg-teal-500 hover:bg-teal-500 text-white hover:text-white "
                      : "hover:bg-white text-gray-700"
                    }`}
                >
                  {grade}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden lg:block">
        <Table tableData={filteredStudentData} headers={tableHeaders} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">
        {" "}
        {filteredStudentData.map((data) => (
          <StudentCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
