"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Star, TrendingUp } from "lucide-react";

export default function BHomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-lg space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">工作台</h1>
          <p className="text-muted-foreground">欢迎回来，宠托师</p>
        </div>
        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
          PS
        </div>
      </header>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            <div className="text-center">
              <span className="text-xs text-muted-foreground">收入</span>
              <p className="font-bold">¥1,240</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <div className="text-center">
              <span className="text-xs text-muted-foreground">评分</span>
              <p className="font-bold">4.9</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            <div className="text-center">
              <span className="text-xs text-muted-foreground">订单</span>
              <p className="font-bold">24</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">最近动态</h2>
          <Badge variant="outline">查看全部</Badge>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div>
                <p className="font-medium">上门遛狗 - 旺财</p>
                <p className="text-xs text-muted-foreground">今天, 2:00 PM</p>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">已完成</Badge>
            </div>
            <div className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div>
                <p className="font-medium">上门喂养 - Luna</p>
                <p className="text-xs text-muted-foreground">昨天, 9:00 AM</p>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">已完成</Badge>
            </div>
            <div className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div>
                <p className="font-medium">上门遛狗 - Max</p>
                <p className="text-xs text-muted-foreground">10月24日, 4:00 PM</p>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">已完成</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
