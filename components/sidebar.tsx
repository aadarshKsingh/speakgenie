"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Trophy, Users, BarChart3, Settings, GraduationCap } from "lucide-react"
import { Avatar, Button } from "@heroui/react"

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: Trophy,
  },
  {
    name: "Students",
    href: "/students",
    icon: Users,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-sidebar border-r border-sidebar">
      {/* Logo and Brand */}
      <div className="flex h-16 items-center gap-3 px-6 border-b border-sidebar">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-600">
          <GraduationCap className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-foreground">SpeakGenie</span>
          <span className="text-xs text-muted-foreground">Admin Panel</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "flat" : "light"}
                color={isActive ? "primary" : "default"}
                className={`w-full justify-start gap-3 h-11 flex items-center px-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg"
                    : "text-foreground hover:bg-default-100"
                }`}
                startContent={<item.icon className="h-5 w-5" />}
              >
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t border-sidebar p-4">
        <div className="flex items-center gap-3">
          <Avatar size="sm" name="School Admin" className="bg-primary text-white" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">School Admin</span>
            <span className="text-xs text-muted-foreground">Greenwood Elementary</span>
          </div>
        </div>
      </div>
    </div>
  )
}
