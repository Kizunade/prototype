"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Dog } from "lucide-react"

export default function OrdersPage() {
  const orders = [
    {
      id: "1",
      type: "上门遛狗",
      pet: "旺财",
      address: "朝阳区建国路88号",
      date: "今天, 2:00 PM",
      status: "pending",
      price: "¥30",
    },
    {
      id: "2",
      type: "上门喂养",
      pet: "Luna",
      address: "海淀区中关村大街1号",
      date: "明天, 9:00 AM",
      status: "pending",
      price: "¥40",
    },
  ]

  const myOrders = [
    {
      id: "3",
      type: "上门遛狗",
      pet: "Max",
      address: "西城区西单北大街",
      date: "服务中",
      status: "active",
      price: "¥35",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">订单列表</h1>
        <Link href="/b/verify">
          <Badge variant="outline">未认证</Badge>
        </Link>
      </div>

      <Tabs defaultValue="available" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">新订单</TabsTrigger>
          <TabsTrigger value="my-orders">我的任务</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="space-y-4 mt-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{order.type}</CardTitle>
                  <Badge variant="secondary">{order.price}</Badge>
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
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{order.address}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/b/service/${order.id}`} className="w-full">
                  <Button className="w-full">接单</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="my-orders" className="space-y-4 mt-4">
           {myOrders.map((order) => (
            <Card key={order.id} className="border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{order.type}</CardTitle>
                  <Badge>{order.status}</Badge>
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
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{order.address}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/b/service/${order.id}`} className="w-full">
                  <Button variant="outline" className="w-full">更新状态</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
