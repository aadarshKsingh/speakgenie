import { Card, CardHeader, CardBody } from "@heroui/react"
import { TrendingUp, TrendingDown } from "lucide-react"

interface ImprovementItem {
  skill: string
  improvement: number
  isPositive: boolean
}

const improvementData: ImprovementItem[] = [
  { skill: "Vocabulary", improvement: 5, isPositive: true },
  { skill: "Grammar", improvement: 8, isPositive: true },
  { skill: "Pronunciation", improvement: 12, isPositive: true },
  { skill: "Listening", improvement: 3, isPositive: true },
  { skill: "Speaking", improvement: 15, isPositive: true },
]

export function ImprovementMetrics() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Month-over-Month Improvement</h3>
          <p className="text-sm text-gray-600">Performance changes across skill areas</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          {improvementData.map((item) => (
            <div key={item.skill} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="font-medium text-gray-900">{item.skill}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span className={`font-semibold ${item.isPositive ? "text-green-600" : "text-red-600"}`}>
                  {item.isPositive ? "+" : ""}
                  {item.improvement}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
