import { Card, CardHeader, CardBody, Avatar, Input, Select, SelectItem, Button } from "@heroui/react"
import { EyeIcon, Search } from "lucide-react"

interface Student {
  id: number
  name: string
  class: string
  accuracy: number
  xp: number
  avatar: string
}

const allStudents: Student[] = [
  { id: 1, name: "Ahan Kumar", class: "Class 8", accuracy: 96, xp: 830, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Ahan%20Kumar" },
  { id: 2, name: "Hvff", class: "Class 7", accuracy: 94, xp: 295, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Hvff" },
  { id: 3, name: "Flower Girl", class: "Class 6", accuracy: 93, xp: 190, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Flower%20Girl" },
  { id: 4, name: "12 June Child Test", class: "Class 5", accuracy: 92, xp: 165, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=12%20June%20Child%20Test" },
  { id: 5, name: "Hcdff", class: "Class 4", accuracy: 91, xp: 160, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Hcdff" },
  { id: 6, name: "Eva", class: "Class 3", accuracy: 90, xp: 145, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Eva" },
  { id: 7, name: "Sophia Kim", class: "Class 2", accuracy: 89, xp: 138, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Sophia%20Kim" },
  { id: 8, name: "James Wilson", class: "Class 6", accuracy: 88, xp: 132, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=James%20Wilson" },
  { id: 9, name: "Olivia Davis", class: "Class 5", accuracy: 87, xp: 128, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Olivia%20Davis" },
  { id: 10, name: "Liam Garcia", class: "Class 1", accuracy: 86, xp: 120, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Liam%20Garcia" },
  { id: 11, name: "Ava Martinez", class: "Class 3", accuracy: 85, xp: 4100, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Ava%20Martinez" },
  { id: 12, name: "Noah Thompson", class: "Class 4", accuracy: 83, xp: 3950, avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Noah%20Thompson" },
];


export function StudentDirectory() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between w-full">
          <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">All Students</h3>
            <p className="text-sm text-gray-600">Complete student directory with performance details</p>
          </div>
          {/* Search and Filter */}
        <div className="flex gap-3 mb-4">
          <Input
            placeholder="Search students..."
            startContent={<Search className="h-4 w-4 text-gray-400" />}
            className="flex-1"
          />
          <Select
      placeholder="All Classes"
      className="w-40"
      options={[
        { key: "all", label: "All Classes" },
        { key: "class1", label: "Class 1" },
        { key: "class2", label: "Class 2" },
        { key: "class3", label: "Class 3" },
        { key: "class4", label: "Class 4" },
        { key: "class5", label: "Class 5" },
        { key: "class6", label: "Class 6" },
        { key: "class7", label: "Class 7" },
        { key: "class8", label: "Class 8" },
      ]}
    />
        </div>
        </div>
      </CardHeader>
      <CardBody className="pt-0">
        

        {/* Student List */}
        <div className="grid grid-cols-4 gap-6">
  {allStudents.map((student) => (
    <div
      key={student.id}
      className="flex items-center p-4 py-7 border border-gray-100 hover:bg-gray-50 transition-colors shadow-lg rounded-3xl"
    >
      {/* Avatar on the left */}
      <Avatar
        size="lg"
        name={student.name}
        src={student.avatar}
        className="w-16 h-16 rounded-full ring-2 ring-blue-400 shadow-md mr-4"
      />

      {/* Details on the right */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Name & Class */}
        <div className="mb-2">
          <p className="font-medium text-gray-900">{student.name}</p>
          <p className="text-sm text-gray-600">{student.class}</p>
        </div>

        {/* Stats */}
        <div className="flex gap-4">
          {/* Accuracy */}
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-gray-900">{student.accuracy}%</p>
            <p className="text-xs text-gray-500">Accuracy</p>
          </div>

          {/* XP */}
          <div className="flex flex-col items-center">
            <p className="text-sm font-bold text-primary">{student.xp.toLocaleString()}</p>
            <p className="text-xs text-gray-500">XP</p>
          </div>
        </div>
      </div>
      <button className="px-4 py-2 border-2 border-gray-300 rounded-2xl shadow-lg">
        <EyeIcon />
      </button>
    </div>
  ))}
</div>


        <div className="mt-4 text-center">
          <Button variant="light" className="px-4 py-2 rounded-lg border-2 border-gray-300 shadow-lg">
            Load More Students (233 remaining)
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
