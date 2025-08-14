"use client"
import { Card, CardHeader, CardBody } from "@heroui/react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const analyticsPerformanceData = [
  { name: "Excellent (85-100%)", value: 40, color: "#22c55e" },
  { name: "Good (70-84%)", value: 35, color: "#3b82f6" },
  { name: "Needs Improvement (<70%)", value: 25, color: "#f59e0b" },
]

export function AnalyticsPerformanceChart() {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Student Performance Distribution</h3>
          <p className="text-sm text-gray-600">Overall accuracy breakdown across all students</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={analyticsPerformanceData}
                cx="50%"
                cy="50%"
                paddingAngle={2}
                dataKey="value"
              >
                {analyticsPerformanceData.map((entry, index) => (
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
