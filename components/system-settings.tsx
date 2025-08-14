"use client"
import { Card, CardHeader, CardBody, Select, SelectItem, Button } from "@heroui/react"
import { Globe, Clock } from "lucide-react"
import { useState } from "react"

export function SystemSettings() {
  const [settings, setSettings] = useState({
    language: "english",
    timezone: "utc-5",
  })

  const handleSave = () => {
    // Handle settings save
    console.log("Settings saved:", settings)
  }

  return (
    <Card className="bg-white shadow-lg rounded-xl p-5">
      <CardHeader>
        <div>
          <h3 className="text-xl font-bold text-gray-900">System Settings</h3>
          <p className="text-sm text-gray-600">Configure system preferences and default options</p>
        </div>
      </CardHeader>
      <CardBody className="space-y-4">
        <Select
          label="Default Language"
          placeholder="Select language"
          selectedKeys={[settings.language]}
          onSelectionChange={(keys) => setSettings((prev) => ({ ...prev, language: Array.from(keys)[0] as string }))}
          startContent={<Globe className="h-4 w-4 text-gray-400" />}
          variant="bordered"
        >
          <SelectItem key="english">English</SelectItem>
          <SelectItem key="spanish">Spanish</SelectItem>
          <SelectItem key="french">French</SelectItem>
          <SelectItem key="german">German</SelectItem>
          <SelectItem key="chinese">Chinese</SelectItem>
        </Select>

        <Select
          label="Time Zone"
          placeholder="Select timezone"
          selectedKeys={[settings.timezone]}
          onSelectionChange={(keys) => setSettings((prev) => ({ ...prev, timezone: Array.from(keys)[0] as string }))}
          startContent={<Clock className="h-4 w-4 text-gray-400" />}
          variant="bordered"
        >
          <SelectItem key="utc-8">UTC-8 (Pacific Time)</SelectItem>
          <SelectItem key="utc-7">UTC-7 (Mountain Time)</SelectItem>
          <SelectItem key="utc-6">UTC-6 (Central Time)</SelectItem>
          <SelectItem key="utc-5">UTC-5 (Eastern Time)</SelectItem>
          <SelectItem key="utc+0">UTC+0 (GMT)</SelectItem>
          <SelectItem key="utc+1">UTC+1 (Central European Time)</SelectItem>
        </Select>

        <div className="pt-2">
          <Button className="bg-blue-700 bg-opacity-70 text-white" onPress={handleSave}>
            Save Settings
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
