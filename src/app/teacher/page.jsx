import TeacherCard from "@/lib/components/Card/TeacherCard";
import Table from "@/lib/components/Table/Table";

export const teacherData = [
  {
    "id": 1,
    "name": "John Smith",
    "age": 32,
    "phone": "123-456-7890",
    "class_taken": 5,
    "subject": "Mathematics",
    "experience": "8 Years",
    "place": "Building A, Room 201"
  },
  {
    "id": 2,
    "name": "Sarah Johnson",
    "age": 28,
    "phone": "987-654-3210",
    "class_taken": 8,
    "subject": "English",
    "experience": "6 Years",
    "place": "Building B, Room 102"
  },
  {
    "id": 3,
    "name": "Michael Brown",
    "age": 45,
    "phone": "555-555-5555",
    "class_taken": 3,
    "subject": "Science",
    "experience": "18 Years",
    "place": "Building C, Room 305"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "age": 35,
    "phone": "111-222-3333",
    "class_taken": 6,
    "subject": "History",
    "experience": "12 Years",
    "place": "Building A, Room 115"
  },
  {
    "id": 5,
    "name": "David Lee",
    "age": 40,
    "phone": "444-333-2222",
    "class_taken": 4,
    "subject": "Physical Education",
    "experience": "15 Years",
    "place": "Building C, Room 415"
  },
  {
    "id": 6,
    "name": "Amanda Taylor",
    "age": 29,
    "phone": "777-888-9999",
    "class_taken": 7,
    "subject": "Biology",
    "experience": "9 Years",
    "place": "Building B, Room 205"
  },
  {
    "id": 7,
    "name": "Robert Martinez",
    "age": 38,
    "phone": "666-555-4444",
    "class_taken": 5,
    "subject": "Chemistry",
    "experience": "14 Years",
    "place": "Building C, Room 401"
  },
  {
    "id": 8,
    "name": "Jennifer Wilson",
    "age": 31,
    "phone": "222-333-4444",
    "class_taken": 4,
    "subject": "Geography",
    "experience": "10 Years",
    "place": "Building A, Room 305"
  },
  {
    "id": 9,
    "name": "Kevin Adams",
    "age": 42,
    "phone": "999-888-7777",
    "class_taken": 3,
    "subject": "Physics",
    "experience": "20 Years",
    "place": "Building B, Room 301"
  },
  {
    "id": 10,
    "name": "Linda Garcia",
    "age": 37,
    "phone": "666-444-2222",
    "class_taken": 6,
    "subject": "Spanish",
    "experience": "11 Years",
    "place": "Building C, Room 202"
  },
  {
    "id": 11,
    "name": "Daniel White",
    "age": 33,
    "phone": "555-444-3333",
    "class_taken": 5,
    "subject": "Economics",
    "experience": "7 Years",
    "place": "Building A, Room 104"
  },
  {
    "id": 12,
    "name": "Amy Harris",
    "age": 30,
    "phone": "222-444-6666",
    "class_taken": 4,
    "subject": "Art",
    "experience": "8 Years",
    "place": "Building B, Room 110"
  },
  {
    "id": 13,
    "name": "Christopher Lewis",
    "age": 39,
    "phone": "777-333-1111",
    "class_taken": 7,
    "subject": "Music",
    "experience": "16 Years",
    "place": "Building C, Room 502"
  },
  {
    "id": 14,
    "name": "Melissa Robinson",
    "age": 36,
    "phone": "555-777-8888",
    "class_taken": 6,
    "subject": "Psychology",
    "experience": "13 Years",
    "place": "Building A, Room 208"
  },
  {
    "id": 15,
    "name": "James Walker",
    "age": 44,
    "phone": "333-222-1111",
    "class_taken": 5,
    "subject": "Physical Education",
    "experience": "19 Years",
    "place": "Building C, Room 415"
  },
  {
    "id": 16,
    "name": "Michelle Turner",
    "age": 27,
    "phone": "777-888-5555",
    "class_taken": 8,
    "subject": "English",
    "experience": "5 Years",
    "place": "Building B, Room 101"
  },
  {
    "id": 17,
    "name": "William Hill",
    "age": 41,
    "phone": "444-555-6666",
    "class_taken": 3,
    "subject": "History",
    "experience": "17 Years",
    "place": "Building A, Room 116"
  },
  {
    "id": 18,
    "name": "Karen Green",
    "age": 34,
    "phone": "666-777-8888",
    "class_taken": 4,
    "subject": "Mathematics",
    "experience": "9 Years",
    "place": "Building C, Room 301"
  },
  {
    "id": 19,
    "name": "Richard Parker",
    "age": 43,
    "phone": "222-111-5555",
    "class_taken": 5,
    "subject": "Science",
    "experience": "21 Years",
    "place": "Building B, Room 202"
  },
  {
    "id": 20,
    "name": "Jessica Adams",
    "age": 32,
    "phone": "888-777-5555",
    "class_taken": 6,
    "subject": "Chemistry",
    "experience": "10 Years",
    "place": "Building A, Room 402"
  }
];


const tableHeaders = [
  'Id',
  'Name',
  'Age',
  'Phone',
  'Class Taken',
  'Subject',
  'Experience',
  'Place'
];

export default function Teacher() {
  return (
    <div className="space-y-5">
      <p className="text-2xl text-gray-800 font-medium">
        Teacher: {teacherData.length}
      </p>
      <div className="hidden lg:block"><Table tableData={teacherData} headers={tableHeaders} /></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">      {
        teacherData.map(data => <TeacherCard data={data} key={data.id} />)
      }</div>

    </div>
  )
}
