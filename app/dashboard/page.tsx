import { Users, GraduationCap, TrendingUp, Trophy } from "lucide-react";
import { StatsCard } from "@/components/stats-card";
import { EnrollmentChart } from "@/components/enrollment-chart";
import { PerformanceChart } from "@/components/performance-chart";
import { LeaderboardCard } from "@/components/leaderboard-card";
import { StudentDirectory } from "@/components/student-directory";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Students"
          value="245"
          change="+12%"
          changeType="increase"
          icon={
            <Users
              className="h-14 w-14 p-2 rounded-2xl text-white"
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              }}
            />
          }
        />
        <StatsCard
          title="Total Classes"
          value="8"
          change="+8%"
          changeType="increase"
          icon={
            <GraduationCap
              className="h-14 w-14 p-2 rounded-2xl text-white"
              style={{
                background: "linear-gradient(135deg, #079D68, #05714B)",
              }}
            />
          }
        />
        <StatsCard
          title="Avg. Performance"
          value="86.2%"
          change="+5%"
          changeType="increase"
          icon={
            <TrendingUp
              className="h-14 w-14 p-2 rounded-2xl text-white"
              style={{
                background: "linear-gradient(135deg, #962EFF, #6900D1)",
              }}
            />
          }
        />
        <StatsCard
          title="Top Performer"
          value="830 pts"
          change="Ahan K. Class 8"
          icon={
            <Trophy
              className="h-14 w-14 p-2 rounded-2xl text-white"
              style={{
                background: "linear-gradient(135deg, #FFBF00, #A37A00)",
              }}
            />
          }
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EnrollmentChart />
        <PerformanceChart />
      </div>

      {/* Leaderboard */}
      <LeaderboardCard />

      {/* Student Directory */}
      <StudentDirectory />
    </div>
  );
}
