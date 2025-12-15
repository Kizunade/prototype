"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar as CalendarIcon } from "lucide-react";
import { usePrototype } from "@/lib/prototype-context";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export default function CHomePage() {
  const { pet } = usePrototype();
  const [date, setDate] = useState<Date>();

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">你好, 铲屎官</h1>
          <p className="text-muted-foreground">寻找您附近的专业宠托师</p>
        </div>
        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
          PO
        </div>
      </header>

      {/* Date Search Banner */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-none shadow-sm">
        <CardContent className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="service-date">选择服务日期</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="service-date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>请选择日期</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <Link href="/c/search" className="block">
            <Button className="w-full" size="lg">
              <Search className="mr-2 h-4 w-4" />
              搜索宠托师
            </Button>
          </Link>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <h2 className="font-semibold text-lg">推荐宠托师</h2>
        <Link href="/c/sitter/1">
          <Card className="mb-3 hover:bg-accent/50 transition-colors">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-zinc-200 flex items-center justify-center overflow-hidden">
                <img src="https://github.com/shadcn.png" alt="Avatar" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">王阿姨</h4>
                <p className="text-xs text-muted-foreground">5.0 ⭐ (120 条评价) • 1.2km</p>
                <div className="flex gap-2 mt-1">
                  <span className="text-[10px] bg-secondary px-1 rounded text-secondary-foreground">上门遛狗</span>
                  <span className="text-[10px] bg-secondary px-1 rounded text-secondary-foreground">上门喂养</span>
                </div>
              </div>
              <Button size="sm" variant="outline">查看</Button>
            </CardContent>
          </Card>
        </Link>
        
        <Link href="/c/sitter/2">
          <Card className="hover:bg-accent/50 transition-colors">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-zinc-200 flex items-center justify-center overflow-hidden">
                <img src="https://github.com/shadcn.png" alt="Avatar" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">李同学</h4>
                <p className="text-xs text-muted-foreground">4.9 ⭐ (85 条评价) • 2.5km</p>
                 <div className="flex gap-2 mt-1">
                  <span className="text-[10px] bg-secondary px-1 rounded text-secondary-foreground">上门遛狗</span>
                </div>
              </div>
              <Button size="sm" variant="outline">查看</Button>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
