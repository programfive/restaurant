import { NavLinks } from '@/types';
import {
    LayoutDashboardIcon,
    ShoppingCart,
    BadgeDollarSign,
    Users,
    ClipboardX,
    ClipboardList,
    Box,
    Key,
    Tags, 
    SettingsIcon,
    HelpCircleIcon,
    SearchIcon
} from 'lucide-react'; 

export const ROUTES_LINKS:NavLinks = {
    dashboard:  [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboardIcon,
        }
    ],
    administration: [
        {
            title: 'Categorías',
            url: '/administration/categories',
            icon: Tags, 
        },
        {
            title: 'Productos',
            url: '/administration/products',
            icon: Box, 
        },
        {
            title: 'Distribuidores',
            url: '/administration/suppliers',
            icon: Users,
        },
        {
            title: 'Desechos',
            url: '/administration/waste',
            icon: ClipboardX, 
        },
        {
            title: 'Compras',
            url: '/administration/purchases',
            icon: BadgeDollarSign, 
        },
        {
            title: 'Ventas',
            url: '/administration/sales',
            icon: ShoppingCart, 
        },
    ],
    reports: [
        {
            title: 'Inventario',
            url: '/reports/inventories',
            icon: ClipboardList,
        },
        {
            title: 'Compras',
            url: '/reports/purchases',
            icon: BadgeDollarSign, 
        },
        {
            title: 'Ventas',
            url: '/reports/sales',
            icon: ShoppingCart, 
        },
    ],
    accessLevels: [
        {
            title: 'Roles',
            url: '/access-levels/roles',
            icon: Users,
        },
        {
            title: 'Permisos',
            url: '/access-levels/permissions',
            icon: Key,
        },
    ],
    navSecondary: [
        {
          title: "Settings",
          url: "#",
          icon: SettingsIcon,
        },
        {
          title: "Search",
          url: "#",
          icon: SearchIcon,
        },
    ],
}