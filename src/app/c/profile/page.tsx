"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, FileText, Dog, MessageSquare, AtSign } from "lucide-react";
import Link from "next/link";

export default function CProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-lg space-y-6">
      <div className="flex flex-col items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>PO</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-bold">宠物主</h2>
          <p className="text-sm text-muted-foreground">+86 138****8888</p>
        </div>
      </div>

      <div className="grid gap-2">
        <Card>
          <CardContent className="p-0">
            <div className="flex flex-col">
              <Link href="/c/orders">
                <Button variant="ghost" className="justify-start w-full h-14 px-6 rounded-none border-b">
                  <FileText className="mr-2 h-4 w-4" />
                  查看订单
                </Button>
              </Link>
              <Link href="/c/pets">
                <Button variant="ghost" className="justify-start w-full h-14 px-6 rounded-none border-b">
                  <Dog className="mr-2 h-4 w-4" />
                  我的宠物
                </Button>
              </Link>
              <Button variant="ghost" className="justify-start h-14 px-6 rounded-none border-b">
                <MessageSquare className="mr-2 h-4 w-4" />
                建议反馈
              </Button>
              <Button variant="ghost" className="justify-start h-14 px-6 rounded-none">
                <AtSign className="mr-2 h-4 w-4" />
                关注公众号
              </Button>
            </div>
          </CardContent>
        </Card>

        <Link href="/">
          <Button variant="destructive" className="w-full mt-4">
            <LogOut className="mr-2 h-4 w-4" />
            退出登录
          </Button>
        </Link>
      </div>
    </div>
  );
}
