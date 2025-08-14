import { Card, CardBody, Avatar, Button, Progress, Chip } from "@heroui/react"
import { Eye, Trophy, Flame, BookOpen } from "lucide-react"

interface StudentCardProps {
  student: {
    id: number
    name: string
    class: string
    accuracy: number
    xp: number
    streak?: number
    lessons?: number
    rank?: number
  }
}

export function StudentCard({ student }: StudentCardProps) {
  const getPerformanceColor = (accuracy: number) => {
    if (accuracy >= 90) return "success"
    if (accuracy >= 80) return "primary"
    if (accuracy >= 70) return "warning"
    return "danger"
  }

  const getPerformanceLabel = (accuracy: number) => {
    if (accuracy >= 90) return "Excellent"
    if (accuracy >= 80) return "Good"
    if (accuracy >= 70) return "Average"
    return "Needs Improvement"
  }

  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardBody className="p-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar
              size="md"
              name={student.name}
              className="bg-gradient-to-br from-primary to-primary-600 text-white"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{student.name}</h3>
              <p className="text-sm text-gray-600">{student.class}</p>
              {student.rank && (
                <div className="flex items-center gap-1 mt-1">
                  <Trophy className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs text-gray-500">Rank #{student.rank}</span>
                </div>
              )}
            </div>
          </div>
          <Chip size="sm" color={getPerformanceColor(student.accuracy)} variant="flat">
            {getPerformanceLabel(student.accuracy)}
          </Chip>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Accuracy</span>
              <span className="text-sm font-medium">{student.accuracy}%</span>
            </div>
            <Progress value={student.accuracy} color={getPerformanceColor(student.accuracy)} size="sm" />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-lg font-bold text-primary">{student.xp.toLocaleString()}</p>
              <p className="text-xs text-gray-500">XP Points</p>
            </div>
            {student.streak && (
              <div className="flex items-center gap-1">
                <Flame className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium">{student.streak}</span>
                <span className="text-xs text-gray-500">day streak</span>
              </div>
            )}
            {student.lessons && (
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">{student.lessons}</span>
                <span className="text-xs text-gray-500">lessons</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100">
          <Button
            size="sm"
            color="primary"
            variant="light"
            startContent={<Eye className="h-4 w-4" />}
            className="w-full"
          >
            View Profile
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
