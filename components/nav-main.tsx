"use client"

import { MailIcon, PlusCircleIcon, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavGroup } from "./nav-group"
import { NavLinks } from "@/types"

export function NavMain({
  items,
}: {
  items: NavLinks
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
            >
              <PlusCircleIcon />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <MailIcon />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="mt-2">
            <NavGroup items={items.dashboard}/>
            <NavGroup items={items.administration} label="Administacion" />
            <NavGroup items={items.reports} label="Reportes" />
            <NavGroup items={items.accessLevels} label="Roles y Permisos" />
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
