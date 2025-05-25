import { LucideIcon } from "lucide-react"

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}
export interface NavLinks {
  dashboard: NavItem[];
  administration: NavItem[];
  reports: NavItem[];
  accessLevels: NavItem[];
  navSecondary: NavItem[];
}