"use client";
import { Card, CardHeader, CardBody } from "@heroui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const enrollmentData = [
  { class: "Class 1", students: 36 },
  { class: "Class 2", students: 32 },
  { class: "Class 3", students: 28 },
  { class: "Class 4", students: 35 },
  { class: "Class 5", students: 30 },
  { class: "Class 6", students: 25 },
  { class: "Class 7", students: 31 },
  { class: "Class 8", students: 28 },
];

export function EnrollmentChart() {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Class-wise Student Enrollment
          </h3>{" "}
          <p className="text-sm text-gray-600">
            Student distribution across different grades
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={enrollmentData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="class" tick={{ fontSize: 12 }} stroke="#666" />
              <YAxis tick={{ fontSize: 12 }} stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />

              {/* Gradient Definition */}
              <defs>
                <linearGradient
                  id="studentsGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2563eb" stopOpacity={1} />{" "}
                  {/* strong blue */}
                  <stop
                    offset="100%"
                    stopColor="#3b82f6"
                    stopOpacity={1}
                  />{" "}
                  {/* lighter vivid blue */}
                </linearGradient>
              </defs>

              {/* Use Gradient */}
              <Bar
                dataKey="students"
                fill="url(#studentsGradient)"
                radius={[10, 10, 0, 0]}
                name="Students"
                opacity={0.7}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
}
