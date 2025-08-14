"use client";

import { Clock, BookOpen, Users, Timer } from "lucide-react";
import { StatsCard } from "@/components/stats-card";
import { AnalyticsPerformanceChart } from "@/components/analytics-performance-chart";
import { EngagementTrendsChart } from "@/components/engagement-trends-chart";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
  BarChart,
  Legend,
} from "recharts";

const skillsData = [
  { skill: "Vocabulary", previous: 77, current: 82 },
  { skill: "Grammar", previous: 70, current: 78 },
  { skill: "Pronunciation", previous: 68, current: 76 },
  { skill: "Listening", previous: 82, current: 85 },
  { skill: "Speaking", previous: 65, current: 74 },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Analytics Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Learning Hours"
          value="2,847"
          change="+12%"
          changeType="increase"
          icon={<Clock className="h-6 w-6 text-primary" />}
        />
        <StatsCard
          title="Lessons Completed"
          value="1,892"
          change="+18%"
          changeType="increase"
          icon={<BookOpen className="h-6 w-6 text-primary" />}
        />
        <StatsCard
          title="Average Session Time"
          value="24 min"
          change="+8%"
          changeType="increase"
          icon={<Timer className="h-6 w-6 text-primary" />}
        />
        <StatsCard
          title="Active Students"
          value="1,156"
          change="+5%"
          changeType="increase"
          icon={<Users className="h-6 w-6 text-primary" />}
        />
      </div>

      {/* Performance Distribution and Engagement Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsPerformanceChart />
        <EngagementTrendsChart />
      </div>

      {/* Skill Performance and Improvements */}
      {/* Chart */}
      <div className="h-lvh p-5 rounded-xl shadow-xl">
        <span className="font-bold text-2xl">Student Engagement Trends </span>
        <br />
        Monthly engagement patterns and learning time
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={skillsData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="skill" tick={{ fontSize: 12 }} stroke="#666" />
            <YAxis
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              tick={{ fontSize: 12, height: 200 }}
              stroke="#666"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value) => [`${value}%`, "Score"]}
            />
            <Legend />
            <Bar
              dataKey="previous"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              name="Previous Month"
            />
            <Bar
              dataKey="current"
              fill="#10b981"
              radius={[4, 4, 0, 0]}
              name="Current Month"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
