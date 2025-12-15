"use client"

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Dog, Clock, User } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function COrdersPage() {
  const activeOrders = [
    {
      id: "1",
      sitter: "王阿姨",
      type: "上门遛狗",
      pet: "旺财",
      date: "今天, 14:00",
      status: "已接单",
      statusColor: "bg-blue-100 text-blue-800",
      price: "¥30",
    },
  ];

  const pastOrders = [
    {
      id: "2",
      sitter: "李同学",
      type: "上门喂养",
      pet: "咪咪",
      date: "2024-03-10, 09:00",
      status: "已完成",
      statusColor: "bg-green-100 text-green-800",
      price: "¥40",
    },
    {
      id: "3",
      sitter: "张叔叔",
      type: "上门遛狗",
      pet: "旺财",
      date: "2024-03-05, 16:00",
      status: "已完成",
      statusColor: "bg-green-100 text-green-800",
      price: "¥35",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-lg min-h-screen bg-zinc-50">
      <header className="flex items-center gap-4 mb-6">
        <Link href="/c/profile">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">我的订单</h1>
      </header>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">进行中</TabsTrigger>
          <TabsTrigger value="past">历史订单</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4 mt-4">
          {activeOrders.map((order) => (
            <Card key={order.id} className="border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">{order.type}</Badge>
                    <span className="font-bold text-lg">{order.sitter}</span>
                  </div>
                  <Badge className={order.statusColor} variant="secondary">{order.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2 text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <Dog className="h-4 w-4" />
                  <span>{order.pet}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{order.date}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-2 flex justify-between items-center">
                <span className="font-bold text-lg">{order.price}</span>
                <Button size="sm" variant="outline">联系宠托师</Button>
              </CardFooter>
            </Card>
          ))}
          {activeOrders.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              暂无进行中的订单
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="past" className="space-y-4 mt-4">
           {pastOrders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">{order.type}</Badge>
                    <span className="font-bold">{order.sitter}</span>
                  </div>
                  <Badge className={order.statusColor} variant="secondary">{order.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2 text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <Dog className="h-4 w-4" />
                  <span>{order.pet}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{order.date}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-2 flex justify-between items-center">
                <span className="font-bold">{order.price}</span>
                <Button size="sm" variant="ghost">查看详情</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
