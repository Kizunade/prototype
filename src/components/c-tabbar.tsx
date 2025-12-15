"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PlusCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTabBar() {
  const pathname = usePathname();

  // Hide TabBar on Sitter Detail Page
  if (pathname.startsWith('/c/sitter/')) return null;
  
  const tabs = [
    {
      href: "/c/home",
      label: "首页",
      icon: Home,
    },
    {
      href: "/c/profile",
      label: "我的",
      icon: User,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white z-50">
      <nav className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href || (tab.href !== '/c/home' && pathname.startsWith(tab.href));
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
