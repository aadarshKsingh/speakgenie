"use client"
import { Card, CardHeader, CardBody } from "@heroui/react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const performanceData = [
  { name: "Excellent (90-100%)", value: 35, color: "#22c55e" },
  { name: "Good (80-89%)", value: 45, color: "#3b82f6" },
  { name: "Average (70-79%)", value: 15, color: "#f59e0b" },
  { name: "Needs Improvement", value: 5, color: "#ef4444" },
]

export function PerformanceChart() {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
        Performance Distribution</h3>
          <p className="text-sm text-gray-600">Overall accuracy breakdown across all students</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={performanceData}
                cx="50%"
                cy="50%"
                paddingAngle={2}
                dataKey="value"
              >
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value) => [`${value}%`, "Students"]}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: "12px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  )
}
