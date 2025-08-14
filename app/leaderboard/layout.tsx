import type React from "react"
import { AdminLayout } from "@/components/admin-layout"

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout title="Leaderboard">{children}</AdminLayout>
}
