import type React from "react"
import { Card, CardBody } from "@heroui/react"
import { TrendingUp, TrendingDown } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "increase" | "decrease"
  icon?: React.ReactNode
}

export function StatsCard({ title, value, change, changeType = "increase", icon }: StatsCardProps) {
  return (
    <Card className="bg-white shadow-lg">
      <CardBody className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
            {change && (
              <div className="flex items-center mt-2">
                {changeType === "increase" ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span
                  className={`text-sm font-medium ${changeType === "increase" ? "text-green-600" : "text-red-600"}`}
                >
                  {change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            )}
          </div>
          {icon && <div className="ml-4 p-3 rounded-lg">{icon}</div>}
        </div>
      </CardBody>
    </Card>
  )
}
