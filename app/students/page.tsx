"use client"
import { useState } from "react"
import { Input } from "@heroui/react"
import { Search } from "lucide-react"
import { StudentsOverview } from "@/components/students-overview"
import { StudentFilters } from "@/components/student-filters"
import { StudentCard } from "@/components/student-card"

interface Student {
  id: number
  name: string
  class: string
  accuracy: number
  xp: number
  streak?: number
  lessons?: number
  rank?: number
}

const allStudents: Student[] = [
  { id: 1, name: "Ahan Kumar", class: "Class 8", accuracy: 96, xp: 830, streak: 15, lessons: 68, rank: 1 },
  { id: 2, name: "Hvff", class: "Class 7", accuracy: 94, xp: 295, streak: 12, lessons: 45, rank: 2 },
  { id: 3, name: "Flower Girl", class: "Class 6", accuracy: 93, xp: 190, streak: 8, lessons: 38, rank: 3 },
  { id: 4, name: "12 June Child Test", class: "Class 5", accuracy: 92, xp: 165, streak: 6, lessons: 32, rank: 4 },
  { id: 5, name: "Hcdff", class: "Class 4", accuracy: 91, xp: 160, streak: 5, lessons: 30, rank: 5 },
  { id: 6, name: "Eva", class: "Class 3", accuracy: 90, xp: 145, streak: 4, lessons: 28, rank: 6 },
  { id: 7, name: "Sophia Kim", class: "Class 2", accuracy: 89, xp: 138, streak: 7, lessons: 26, rank: 7 },
  { id: 8, name: "James Wilson", class: "Class 6", accuracy: 88, xp: 132, streak: 3, lessons: 24, rank: 8 },
  { id: 9, name: "Olivia Davis", class: "Class 5", accuracy: 87, xp: 128, streak: 9, lessons: 22, rank: 9 },
  { id: 10, name: "Liam Garcia", class: "Class 1", accuracy: 86, xp: 120, streak: 2, lessons: 20, rank: 10 },
  { id: 11, name: "Ava Martinez", class: "Class 3", accuracy: 85, xp: 4100, streak: 11, lessons: 55 },
  { id: 12, name: "Noah Thompson", class: "Class 4", accuracy: 83, xp: 3950, streak: 8, lessons: 48 },
  { id: 13, name: "Emma Johnson", class: "Class 2", accuracy: 91, xp: 3800, streak: 14, lessons: 52 },
  { id: 14, name: "William Brown", class: "Class 7", accuracy: 88, xp: 3600, streak: 6, lessons: 41 },
  { id: 15, name: "Isabella Davis", class: "Class 5", accuracy: 92, xp: 3400, streak: 13, lessons: 47 },
  { id: 16, name: "Michael Wilson", class: "Class 8", accuracy: 89, xp: 3200, streak: 9, lessons: 39 },
]

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [classFilter, setClassFilter] = useState("all")
  const [performanceFilter, setPerformanceFilter] = useState("all")
  const [sortOrder, setSortOrder] = useState("desc")

  const filteredStudents = allStudents
    .filter((student) => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesClass =
        classFilter === "all" || student.class.toLowerCase().includes(classFilter.replace("class", "").trim())

      let matchesPerformance = true
      if (performanceFilter !== "all") {
        switch (performanceFilter) {
          case "excellent":
            matchesPerformance = student.accuracy >= 90
            break
          case "good":
            matchesPerformance = student.accuracy >= 80 && student.accuracy < 90
            break
          case "average":
            matchesPerformance = student.accuracy >= 70 && student.accuracy < 80
            break
          case "needs-improvement":
            matchesPerformance = student.accuracy < 70
            break
        }
      }

      return matchesSearch && matchesClass && matchesPerformance
    })
    .sort((a, b) => {
      return sortOrder === "desc" ? b.xp - a.xp : a.xp - b.xp
    })

  return (
    <div className="p-6 space-y-6">
      {/* Overview Stats */}
      <StudentsOverview />

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <Input
          placeholder="Search students by name..."
          value={searchTerm}
          onValueChange={setSearchTerm}
          startContent={<Search className="h-4 w-4 text-gray-400" />}
          size="lg"
          className="max-w-md"
        />
      </div>

      {/* Filters */}
      <StudentFilters
        onClassFilter={setClassFilter}
        onPerformanceFilter={setPerformanceFilter}
        onSortChange={setSortOrder}
      />

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {filteredStudents.length} of {allStudents.length} students
        </p>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No students found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
