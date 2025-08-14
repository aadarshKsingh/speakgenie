import { Card, CardBody } from "@heroui/react"
import { Users, TrendingUp, Award, Clock } from "lucide-react"

interface OverviewStats {
  totalStudents: number
  activeToday: number
  averageAccuracy: number
  totalLearningHours: number
}

const stats: OverviewStats = {
  totalStudents: 245,
  activeToday: 156,
  averageAccuracy: 86.2,
  totalLearningHours: 2847,
}

export function StudentsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-white shadow-sm">
        <CardBody className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
              <p className="text-sm text-gray-600">Total Students</p>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="bg-white shadow-sm">
        <CardBody className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.activeToday}</p>
              <p className="text-sm text-gray-600">Active Today</p>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="bg-white shadow-sm">
        <CardBody className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Award className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.averageAccuracy}%</p>
              <p className="text-sm text-gray-600">Avg. Accuracy</p>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="bg-white shadow-sm">
        <CardBody className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Clock className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.totalLearningHours.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Learning Hours</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
