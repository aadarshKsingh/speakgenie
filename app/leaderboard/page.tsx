import { Avatar } from "@heroui/react";
import { EyeIcon } from "lucide-react";

export default function LeaderboardPage() {
  const allStudents = [
    {
      id: 1,
      name: "Alice Johnson",
      class: "Grade 10",
      xp: 1420,
      accuracy: 95,
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=AliceJohnson",
    },
    {
      id: 2,
      name: "Bob Smith",
      class: "Grade 9",
      xp: 1325,
      accuracy: 88,
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=BobSmith",
    },
    {
      id: 3,
      name: "Clara Lee",
      class: "Grade 11",
      xp: 1580,
      accuracy: 92,
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=ClaraLee",
    },
    {
      id: 4,
      name: "David Kim",
      class: "Grade 10",
      xp: 1180,
      accuracy: 85,
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=DavidKim",
    },
    {
      id: 5,
      name: "Eva Martinez",
      class: "Grade 9",
      xp: 1250,
      accuracy: 90,
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=EvaMartinez",
    },
    {
      id: 6,
      name: "Frank Liu",
      class: "Grade 12",
      xp: 1600,
      accuracy: 97,
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=FrankLiu",
    },
  ];

  const topThree = allStudents.sort((a, b) => b.xp - a.xp).slice(0, 3);

  const podiumHeights = ["h-24", "h-32", "h-20"]; // Tailwind heights
  const podiumColors = ["bg-gray-200", "bg-yellow-400", "bg-orange-400"];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Leaderboard</h1>
        <p className="text-gray-600">
          Check out the top performers and rankings.
        </p>
      </div>

      {/* Champions Podium */}
      <div className="flex flex-col border-1 border-white rounded-3xl shadow-xl">
        <div className="bg-yellow-50 w-full mx-auto text-center text-xl rounded-lg text-blue-500 font-semibold border-b-2 border-amber-300 border-opacity-40 py-7">
          🏅 Champions Podiums 🏅 <br />
          <span className="text-sm text-amber-600 font-light">
            This month's top 3 achievers
          </span>
        </div>
        <div className=" rounded-xl p-6 flex justify-center gap-6 items-end">
          {topThree.map((student, index) => (
            <div key={student.id} className="flex flex-col items-center">
              {/* Avatar above the bar */}
              <Avatar
                // size="xl"
                name={student.name}
                src={student.avatar}
                className="w-24 h-24 rounded-full ring-2 ring-white mb-2 shadow-lg"
              />

              {/* Podium bar with gradient */}
              <div
                className={`flex flex-col items-center justify-center w-36 rounded-t-xl text-white shadow-md`}
                style={{
                  height: `${[180, 220, 150][index]}px`,
                  background: [
                    "linear-gradient(to top, #d1d5db, #9ca3af)",
                    "linear-gradient(to top, #facc15, #f59e0b)",
                    "linear-gradient(to top, #f97316, #ea580c)",
                  ][index],
                }}
              >
                <p className="font-semibold">{student.name}</p>
                <p className="text-sm">{student.class}</p>
                <p className="font-bold mt-1">{student.xp} pts</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4 border-0 border-gray-300 px-10 py-8 rounded-xl shadow-lg px">
        <input
          type="text"
          placeholder="Search students..."
          className="flex-1 border-2 border-gray-400 rounded-xl px-3 py-2"
        />
        <select className="border border-gray-300 rounded-xl px-3 py-2">
          <option>All Classes</option>
          {[...new Set(allStudents.map((s) => s.class))].map((cls) => (
            <option key={cls}>{cls}</option>
          ))}
        </select>
        <select className="border border-gray-300 rounded-xl px-3 py-2">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
        <button className="border border-gray-300 rounded-xl px-3 py-2 hover:bg-gray-100 transition">
          More Filters
        </button>
      </div>

      {/* Complete Rankings */}
      <div className="flex flex-col gap-3">
        {allStudents
          .sort((a, b) => b.xp - a.xp)
          .map((student, idx) => (
            <div
              key={student.id}
              className={`flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 py-8 ${
                idx < 3
                  ? "bg-yellow-50 border-2 border-yellow-300"
                  : "bg-white border border-gray-400"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-sm font-bold">
                  #{idx + 1}
                </div>
                <Avatar
                  size="lg"
                  name={student.name}
                  src={student.avatar}
                  className="bg-gradient-to-br from-primary to-primary-600 text-white"
                />
                <div>
                  <p className="font-medium text-gray-900">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.class}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-green-700 bg-green-300 bg-opacity-25 px-2 py-1 rounded-xl">
                    {student.accuracy}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-amber-500">
                    {student.xp.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">points</p>
                </div>
                <button className="text-sm whitespace-nowrap flex   rounded-xl text-gray-600 px-2 py-1  border-2 border-gray-400 gap-1 shadow-md bg-white">
                  <EyeIcon className="h-5 w-5 " />
                  View
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Top Achievements */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="flex flex-col items-center p-3 shadow-xl rounded-2xl">
          <p className="text-4xl">👑</p>
          <p className="text-lg font-bold">Current Champion</p>
          <p className="font-medium text-gray-500">{topThree[0].name}</p>
          <p className="text-lg font-semibold text-amber-600">
            {topThree[0].xp} points
          </p>
        </div>
        <div className="flex flex-col items-center p-3 shadow-xl rounded-2xl">
          <p className="text-4xl">🔥</p>

          <p className="text-lg font-bold">Longest Streak</p>
          <p className="font-medium text-gray-500">{topThree[0].name}</p>

          <p className="text-lg font-semibold text-orange-800">15 days</p>
        </div>
        <div className="flex flex-col items-center p-3  shadow-xl rounded-2xl">
          <p className="text-4xl">⚡</p>

          <p className="text-lg font-bold">Most Active</p>
          <p className="font-medium text-gray-500">{topThree[0].name}</p>

          <p className="font-semibold text-lg text-blue-900">68 lessons</p>
        </div>
        <div className="flex flex-col items-center p-3 shadow-xl rounded-2xl">
          <p className="text-4xl">🎯</p>

          <p className="text-lg font-bold">Highest Accuracy</p>
          <p className="font-medium text-gray-500">{topThree[0].name}</p>

          <p className="font-semibold text-lg text-green-600">
            {Math.max(...allStudents.map((s) => s.accuracy))}%
          </p>
        </div>
      </div>
    </div>
  );
}
