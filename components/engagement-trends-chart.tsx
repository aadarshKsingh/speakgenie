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
  Cell,
} from "recharts";

const skillsData = [
  { skill: "Vocabulary", value: 82, color: "#3b82f6", improvement: 5 },
  { skill: "Grammar", value: 78, color: "#10b981", improvement: 8 },
  { skill: "Pronunciation", value: 76, color: "#f59e0b", improvement: 12 },
  { skill: "Listening", value: 85, color: "#8b5cf6", improvement: 3 },
  { skill: "Speaking", value: 74, color: "#ef4444", improvement: 15 },
];

export function EngagementTrendsChart() {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Average Performance by Skill Area
          </h3>
          <p className="text-sm text-gray-600">
            Individual skill performance metrics and improvements
          </p>
        </div>
      </CardHeader>

      <CardBody className="space-y-6">
        {/* Progress Bars */}
        <div className="space-y-3">
          {skillsData.map((item) => (
            <div key={item.skill}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">
                  {item.skill}
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  {item.value}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 align-middle rounded-full"
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={skillsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="skill" tick={{ fontSize: 12 }} stroke="#666" />
              <YAxis tick={{ fontSize: 12 }} stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value) => [`${value}%`, "Performance"]}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {skillsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Improvement Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-xl bg-gray-200 bg-opacity-30 p-4">
          <div className="col-span-2 sm:col-span-3 flex">
            <span className="w-max whitespace-nowrap font-medium text-gray-800">
              Month-over-month Improvement
            </span>
          </div>

          {skillsData.map((item) => (
            <div
              key={item.skill}
              className="border border-gray-200 rounded-xl p-3 flex justify-between items-center bg-white"
            >
              <span className="text-sm font-medium text-gray-700">
                {item.skill}
              </span>
              <span className="text-sm font-semibold text-green-600">
                +{item.improvement}%
              </span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
