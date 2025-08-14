"use client"
import { Card, CardHeader, CardBody, Input, Button } from "@heroui/react"
import { User, Mail, Phone } from "lucide-react"
import { useState } from "react"

export function ProfileSettings() {
  const [formData, setFormData] = useState({
    fullName: "Admin User",
    email: "admin@example.com",
    phone: "+1-555-0123",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Profile updated:", formData)
  }

  return (
    <Card className="bg-white shadow-lg rounded-xl p-5">
      <CardHeader>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Profile Settings</h3>
          <p className="text-sm text-gray-600">Update your personal information and contact details</p>
        </div>
      </CardHeader>
      <CardBody className="space-y-4">
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.fullName}
          onValueChange={(value) => handleInputChange("fullName", value)}
          startContent={<User className="h-4 w-4 text-gray-400" />}
          variant="bordered"
        />

        <Input
          label="Email"
          placeholder="Enter your email address"
          type="email"
          value={formData.email}
          onValueChange={(value) => handleInputChange("email", value)}
          startContent={<Mail className="h-4 w-4 text-gray-400" />}
          variant="bordered"
        />

        <Input
          label="Phone"
          placeholder="Enter your phone number"
          type="tel"
          value={formData.phone}
          onValueChange={(value) => handleInputChange("phone", value)}
          startContent={<Phone className="h-4 w-4 text-gray-400" />}
          variant="bordered"
        />

        <div className="pt-2">
          <Button className="bg-blue-700 bg-opacity-80 text-white" onPress={handleSubmit}>
            Update Profile
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
