"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, CheckSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function BTabBar() {
  const pathname = usePathname();

  const tabs = [
    {
      href: "/b/orders", // Main work list
      label: "接单",
      icon: ClipboardList,
    },
    {
      href: "/b/home", // Dashboard or Stats
      label: "工作台",
      icon: CheckSquare,
    },
    {
      href: "/b/profile",
      label: "我的",
      icon: User,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white z-50">
      <nav className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href || (tab.href !== '/b/orders' && pathname.startsWith(tab.href));
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
