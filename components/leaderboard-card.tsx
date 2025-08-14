import { Card, CardHeader, CardBody, Avatar, Button } from "@heroui/react";
import { Trophy, Flame, BookOpen, Eye } from "lucide-react";

interface Student {
  id: number;
  name: string;
  class: string;
  points: number;
  accuracy: number;
  streak: number;
  lessons: number;
  rank: number;
  avatar: string;
}

const topStudents: Student[] = [
  {
    id: 1,
    name: "Ahan Kumar",
    class: "Class 8",
    points: 830,
    accuracy: 96,
    streak: 15,
    lessons: 68,
    rank: 1,
    avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Ahan%20Kumar",
  },
  {
    id: 2,
    name: "Hvff",
    class: "Class 7",
    points: 295,
    accuracy: 94,
    streak: 12,
    lessons: 45,
    rank: 2,
    avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Hvff",
  },
  {
    id: 3,
    name: "Flower Girl",
    class: "Class 6",
    points: 190,
    accuracy: 93,
    streak: 8,
    lessons: 38,
    rank: 3,
    avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Flower%20Girl",
  },
  {
    id: 4,
    name: "12 June Child Test",
    class: "Class 5",
    points: 165,
    accuracy: 92,
    streak: 6,
    lessons: 32,
    rank: 4,
    avatar:
      "https://api.dicebear.com/6.x/bottts/svg?seed=12%20June%20Child%20Test",
  },
  {
    id: 5,
    name: "Hcdff",
    class: "Class 4",
    points: 160,
    accuracy: 91,
    streak: 5,
    lessons: 30,
    rank: 5,
    avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Hcdff",
  },
  {
    id: 6,
    name: "Eva",
    class: "Class 3",
    points: 145,
    accuracy: 90,
    streak: 4,
    lessons: 28,
    rank: 6,
    avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Eva",
  },
  {
    id: 7,
    name: "Sophia Kim",
    class: "Class 2",
    points: 138,
    accuracy: 89,
    streak: 7,
    lessons: 26,
    rank: 7,
    avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Sophia%20Kim",
  },
  {
    id: 8,
    name: "James Wilson",
    class: "Class 6",
    points: 132,
    accuracy: 88,
    streak: 3,
    lessons: 24,
    rank: 8,
    avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=James%20Wilson",
  },
  {
    id: 9,
    name: "Olivia Davis",
    class: "Class 5",
    points: 128,
    accuracy: 87,
    streak: 9,
    lessons: 22,
    rank: 9,
    avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Olivia%20Davis",
  },
  {
    id: 10,
    name: "Liam Garcia",
    class: "Class 1",
    points: 120,
    accuracy: 86,
    streak: 2,
    lessons: 20,
    rank: 10,
    avatar: "https://api.dicebear.com/6.x/bottts/svg?seed=Liam%20Garcia",
  },
];

export function LeaderboardCard() {
  return (
    <Card className="bg-white shadow-lg rounded-xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              School Leaderboard - Top 10 Champions
            </h3>
            <p className="text-sm text-gray-600">
              Our highest performing students this month with points and
              achievements
            </p>
          </div>
          <div className="text-xs text-gray-500">
            CBSE Board Last updated: 12/08/2025, 15:46:57
          </div>
        </div>
      </CardHeader>
      <CardBody className="pt-0 shadow-lg rounded-xl">
        <div className="grid grid-cols-5 gap-6">
          {topStudents.map((student) => (
            <div
              key={student.id}
              className="relative flex flex-col items-center p-4 border border-gray-100 rounded-3xl shadow-lg hover:bg-gray-50 transition-colors"
            >
              {/* Rank badge in corner */}
              <div className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold shadow-md">
                #{student.rank}
              </div>

              {/* Avatar */}
              <Avatar
                size="lg"
                name={student.name}
                src={student.avatar}
                className="w-24 h-24 mb-3 rounded-full ring-4 ring-blue-400 shadow-lg"
              />

              {/* Name & class */}
              <div className="text-center mb-3">
                <p className="font-medium text-gray-900">{student.name}</p>
                <p className="text-sm text-gray-600">{student.class}</p>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-2 w-full items-center">
                {/* Points */}
                <div className="flex items-baseline gap-1 justify-center bg-amber-400 rounded-3xl text-white px-3 py-1 w-fit shadow-sm">
                  <p className="text-lg font-bold">{student.points}</p>
                  <p className="text-xs">pts</p>
                </div>

                {/* Accuracy */}
                <div className="flex items-baseline justify-center gap-1 whitespace-nowrap bg-green-300 bg-opacity-40 rounded-xl text-green-700 font-semibold px-3 py-1 w-fit">
                  <p className="text-sm font-medium">{student.accuracy}%</p>
                  <p className="text-xs">Accuracy</p>
                </div>

                {/* Streak */}
                <div className="flex items-center gap-1 justify-center text-gray-700">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">{student.streak}</span>
                  <span className="text-xs text-gray-500">day streak</span>
                </div>

                {/* View Profile Button */}
                <Button
                  size="sm"
                  variant="light"
                  color="primary"
                  startContent={<Eye className="h-4 w-4" />}
                  className="mt-2 px-3 py-1 rounded-xl border border-gray-300 shadow-sm text-black font-semibold"
                >
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Top Achievements */}
        <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="text-center bg-yellow-300 bg-opacity-10 border-2 border-yellow-100 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-center text-3xl mx-auto mb-2  rounded-lg">
              🏆
            </div>
            <p className="text-md text-yellow-800 font-bold mb-1">Top Scorer</p>
            <p className="text-sm text-yellow-600 font-medium ">
              Ahan Kumar - 830 pts
            </p>
          </div>
          <div className="text-center bg-green-300 bg-opacity-10 border-2 border-green-100 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-center text-3xl mx-auto mb-2 rounded-lg">
              🔥
            </div>
            <p className="text-md text-green-800 font-bold mb-1">
              Longest Streak
            </p>
            <p className="text-sm font-medium text-green-600">
              Ahan Kumar - 15 days
            </p>
          </div>
          <div className="text-center bg-blue-300 bg-opacity-10 border-2 border-blue-100 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-center text-3xl mx-auto mb-2 rounded-lg">
              ⚡
            </div>
            <p className="text-md text-blue-800 font-bold mb-1">Most Lessons</p>
            <p className="text-sm font-medium text-blue-600">
              Ahan Kumar - 68 lessons
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
