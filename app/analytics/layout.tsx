import type React from "react"
import { AdminLayout } from "@/components/admin-layout"

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout title="Analytics & Reports">{children}</AdminLayout>
}
