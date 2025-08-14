"use client"
import { Card, CardHeader, CardBody, Switch } from "@heroui/react"
import { Mail, TrendingUp, Bell } from "lucide-react"
import { useState } from "react"

export function NotificationPreferences() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    performanceReports: true,
    newSchoolAlerts: false,
  })

  const handleToggle = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <Card className="bg-white shadow-xl rounded-xl p-5">
      <CardHeader>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Notification Preferences</h3>
          <p className="text-sm text-gray-600">Manage how and when you receive notifications</p>
        </div>
      </CardHeader>
      <CardBody className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Mail className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive updates via email</p>
            </div>
          </div>
          <Switch
            isSelected={notifications.emailNotifications}
            onValueChange={(value) => handleToggle("emailNotifications", value)}
            color="primary"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-full">
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Performance Reports</p>
              <p className="text-sm text-gray-600">Weekly performance summaries</p>
            </div>
          </div>
          <Switch
            isSelected={notifications.performanceReports}
            onValueChange={(value) => handleToggle("performanceReports", value)}
            color="primary"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-full">
              <Bell className="h-4 w-4 text-orange-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">New School Alerts</p>
              <p className="text-sm text-gray-600">Notifications for new school registrations</p>
            </div>
          </div>
          <Switch
            isSelected={notifications.newSchoolAlerts}
            onValueChange={(value) => handleToggle("newSchoolAlerts", value)}
            color="primary"
          />
        </div>
      </CardBody>
    </Card>
  )
}
