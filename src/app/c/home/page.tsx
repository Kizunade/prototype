"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, History } from "lucide-react";
import { usePrototype } from "@/lib/prototype-context";

export default function CHomePage() {
  const { pet } = usePrototype();

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">你好, 铲屎官</h1>
          <p className="text-muted-foreground">今天想为您的爱宠做点什么？</p>
        </div>
        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
          PO
        </div>
      </header>

      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-none">
        <CardHeader>
          <CardTitle>我的宠物</CardTitle>
        </CardHeader>
        <CardContent>
          {pet.name ? (
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-zinc-200 rounded-full flex items-center justify-center">
                🐶
              </div>
              <div>
                <h3 className="font-bold text-lg">{pet.name}</h3>
                <p className="text-sm text-muted-foreground">{pet.breed}, {pet.age} 岁</p>
              </div>
            </div>
          ) : (
             <div className="text-center py-4">
                <p className="text-muted-foreground mb-4">暂无宠物档案</p>
                <Link href="/c/pet/create">
                  <Button variant="secondary" size="sm">创建档案</Button>
                </Link>
             </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Link href="/c/service">
          <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
            <CardContent className="flex flex-col items-center justify-center py-6 gap-2">
              <PlusCircle className="h-8 w-8 text-primary" />
              <span className="font-medium">预约服务</span>
            </CardContent>
          </Card>
        </Link>
        <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
          <CardContent className="flex flex-col items-center justify-center py-6 gap-2">
            <History className="h-8 w-8 text-primary" />
            <span className="font-medium">历史订单</span>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold text-lg">推荐宠托师</h2>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-zinc-200" />
            <div className="flex-1">
              <h4 className="font-bold">王阿姨</h4>
              <p className="text-xs text-muted-foreground">5.0 ⭐ (120 条评价)</p>
            </div>
            <Button size="sm" variant="outline">查看</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-zinc-200" />
            <div className="flex-1">
              <h4 className="font-bold">李同学</h4>
              <p className="text-xs text-muted-foreground">4.9 ⭐ (85 条评价)</p>
            </div>
            <Button size="sm" variant="outline">查看</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
