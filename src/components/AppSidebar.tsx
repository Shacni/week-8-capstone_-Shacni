
import { useState } from "react";
import { 
  Home, 
  Users, 
  UserCheck, 
  Stethoscope, 
  Sun, 
  Activity, 
  FlaskConical, 
  FileText, 
  Scan, 
   
  Eye, 
  CreditCard,
  Receipt,
  FileSpreadsheet,
  Building,
  Vote,
  Shield,
  UserPlus,
  BedDouble,
  MapPin,
  UserX,
  Package,
  ShoppingCart,
  FileBarChart,
  ArrowRightLeft,
  Warehouse,
  ClipboardList,
  BarChart3,
  TrendingUp,
  PieChart,
  Calculator,
  FileBarChart2,
  Settings as SettingsIcon,
  Zap,
  Sliders,
  AlertTriangle,
  Search,
  Pill,
  Bed,
  HeartHandshake
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Reception", url: "/reception", icon: Users },
  { title: "Patient", url: "/patient", icon: UserCheck },
  { title: "Nurse", url: "/nurse", icon: Stethoscope },
  { title: "Day Care Doctor", url: "/daycare-doctor", icon: Sun },
  { title: "Phlebotomy", url: "/phlebotomy", icon: Activity },
  {
    title: "Laboratory",
    icon: FlaskConical,
    subItems: [
      { title: "Laboratory", url: "/laboratory" },
      { title: "Laboratory Reports", url: "/laboratory-reports" },
    ],
  },
  { title: "Radiology", url: "/radiology", icon: Scan },
  { title: "Dental", url: "/dental", icon: Pill },
  { title: "Optical", url: "/optical", icon: Eye },
  {
    title: "Billing",
    icon: CreditCard,
    subItems: [
      { title: "Billing", url: "/billing" },
      { title: "Expenses", url: "/expenses" },
      { title: "Bills", url: "/bills" },
      { title: "Vendors", url: "/vendors" },
      { title: "Vote Heads", url: "/vote-heads" },
      { title: "Claims", url: "/claims" },
    ],
  },
  {
    title: "Inpatient",
    icon: BedDouble,
    subItems: [
      { title: "Registration", url: "/registration" },
      { title: "Admission", url: "/admission" },
      { title: "Ward/Bed Status", url: "/ward-bed-status" },
      { title: "Admitted/Discharged", url: "/admitted-discharged" },
    ],
  },
  {
    title: "Inventory",
    icon: Package,
    subItems: [
      { title: "Items", url: "/items" },
      { title: "Packages", url: "/packages" },
      { title: "Receipts/Adjustments", url: "/receipts-adjustments" },
      { title: "Local Purchase Order", url: "/local-purchase-order" },
      { title: "Transfer", url: "/transfer" },
      { title: "Stores", url: "/stores" },
      { title: "Order Status", url: "/order-status" },
    ],
  },
  {
    title: "Reports",
    icon: BarChart3,
    subItems: [
      { title: "Reports", url: "/reports" },
      { title: "MOLT Reports", url: "/molt-reports" },
      { title: "Dynamic Reports", url: "/dynamic-reports" },
    ],
  },
  {
    title: "Accounting",
    icon: Calculator,
    subItems: [
      { title: "Chart of Accounts", url: "/chart-of-accounts" },
      { title: "Journal Reports", url: "/journal-reports" },
    ],
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    subItems: [
      { title: "ETIMS", url: "/etims" },
      { title: "General", url: "/general-settings" },
      { title: "Allergies", url: "/allergies-settings" },
      { title: "Investigation", url: "/investigation-settings" },
      { title: "Prescription", url: "/prescription-settings" },
      { title: "Inpatient", url: "/inpatient-settings" },
      { title: "Home-Based Care", url: "/home-based-care" },
    ],
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const isActive = (path: string) => currentPath === path;
  
  const isGroupActive = (subItems: any[]) => {
    return subItems?.some((item) => isActive(item.url));
  };

  const toggleGroup = (title: string) => {
    setOpenGroups(prev => 
      prev.includes(title) 
        ? prev.filter(group => group !== title)
        : [...prev, title]
    );
  };

  const getNavClassName = (isActive: boolean) =>
    `flex items-center gap-3 w-full text-left transition-colors ${
      isActive 
        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
    }`;

  return (
    <Sidebar className={`border-r bg-sidebar-background ${!open ? "w-14" : "w-64"}`} collapsible="icon">
      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible 
                      open={openGroups.includes(item.title) || isGroupActive(item.subItems)}
                      onOpenChange={() => toggleGroup(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton 
                          className={getNavClassName(isGroupActive(item.subItems))}
                        >
                          <item.icon className="h-5 w-5 flex-shrink-0" />
                          {open && (
                            <>
                              <span className="flex-1">{item.title}</span>
                              <ChevronRight className={`h-4 w-4 transition-transform ${
                                openGroups.includes(item.title) || isGroupActive(item.subItems) ? "rotate-90" : ""
                              }`} />
                            </>
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {open && (
                        <CollapsibleContent>
                          <SidebarMenuSub className="ml-6 mt-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <NavLink
                                    to={subItem.url}
                                    className={({ isActive }) =>
                                      `block px-3 py-2 text-sm rounded-md transition-colors ${
                                        isActive
                                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                                          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                                      }`
                                    }
                                  >
                                    {subItem.title}
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) => getNavClassName(isActive)}
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        {open && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
