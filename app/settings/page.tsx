import { ProfileSettings } from "@/components/profile-settings"
import { SystemSettings } from "@/components/system-settings"
import { NotificationPreferences } from "@/components/notification-preferences"
import { DataManagement } from "@/components/data-management"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Profile and System Settings Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfileSettings />
        <SystemSettings />
        <NotificationPreferences />
        <DataManagement />
      </div>
    </div>
  )
}
