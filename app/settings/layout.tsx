import type React from "react"
import { AdminLayout } from "@/components/admin-layout"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout title="Settings">{children}</AdminLayout>
}
