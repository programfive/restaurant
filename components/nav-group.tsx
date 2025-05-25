"use client"

import {  type LucideIcon } from "lucide-react"
import { usePathname } from "next/navigation"; 
import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function NavGroup({
  label,
  items,
}: {
  label?:string,
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}) {
  const pathName = usePathname();
  return (
    <SidebarGroup className="p-0">
      {
        label && (
          <SidebarGroupLabel>{label}</SidebarGroupLabel>
        )
      }
      <SidebarMenu>
          {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathName === item.url} >
                      <Link href={item.url}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                      </Link>
                  </SidebarMenuButton>
              </SidebarMenuItem>
          ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
