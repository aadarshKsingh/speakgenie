"use client"
import { Select, SelectItem, Button } from "@heroui/react"
import { Filter, SortAsc, SortDesc } from "lucide-react"
import { useState } from "react"

interface StudentFiltersProps {
  onClassFilter: (classValue: string) => void
  onPerformanceFilter: (performance: string) => void
  onSortChange: (sort: string) => void
}

export function StudentFilters({ onClassFilter, onPerformanceFilter, onSortChange }: StudentFiltersProps) {
  const [sortOrder, setSortOrder] = useState("asc")

  const handleSortToggle = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc"
    setSortOrder(newOrder)
    onSortChange(newOrder)
  }

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filters:</span>
      </div>

      <Select
        placeholder="All Classes"
        className="w-40"
        size="sm"
        onSelectionChange={(keys) => onClassFilter(Array.from(keys)[0] as string)}
      >
        <SelectItem key="all">All Classes</SelectItem>
        <SelectItem key="class1">Class 1</SelectItem>
        <SelectItem key="class2">Class 2</SelectItem>
        <SelectItem key="class3">Class 3</SelectItem>
        <SelectItem key="class4">Class 4</SelectItem>
        <SelectItem key="class5">Class 5</SelectItem>
        <SelectItem key="class6">Class 6</SelectItem>
        <SelectItem key="class7">Class 7</SelectItem>
        <SelectItem key="class8">Class 8</SelectItem>
      </Select>

      <Select
        placeholder="All Performance"
        className="w-44"
        size="sm"
        onSelectionChange={(keys) => onPerformanceFilter(Array.from(keys)[0] as string)}
      >
        <SelectItem key="all">All Performance</SelectItem>
        <SelectItem key="excellent">Excellent (90-100%)</SelectItem>
        <SelectItem key="good">Good (80-89%)</SelectItem>
        <SelectItem key="average">Average (70-79%)</SelectItem>
        <SelectItem key="needs-improvement">Needs Improvement (&lt;70%)</SelectItem>
      </Select>

      <Button
        variant="bordered"
        size="sm"
        startContent={sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
        onPress={handleSortToggle}
      >
        Sort by XP
      </Button>
    </div>
  )
}
