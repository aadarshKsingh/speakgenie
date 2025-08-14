import type React from "react"
import { AdminLayout } from "@/components/admin-layout"

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout title="Students">{children}</AdminLayout>
}
