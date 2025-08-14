"use client"
import { Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react"
import { Bell, Search, Menu } from "lucide-react"

interface HeaderProps {
  onMenuClick?: () => void
  title?: string
}

export function Header({ onMenuClick, title }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
      <div className="flex items-center gap-4">
        <Button isIconOnly variant="light" className="lg:hidden" onPress={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        {title && (
          <div>
            <h1 className="text-xl font-semibold text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground">Welcome back, School Admin! Here's your school's overview.</p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Button isIconOnly variant="light" className="text-muted-foreground">
          <Search className="h-5 w-5" />
        </Button>

        <Button isIconOnly variant="light" className="text-muted-foreground">
          <Bell className="h-5 w-5" />
        </Button>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar as="button" size="sm" name="School Admin" className="bg-primary text-white cursor-pointer" />
          </DropdownTrigger>
          <DropdownMenu aria-label="User menu">
            <DropdownItem key="profile">Profile</DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  )
}
