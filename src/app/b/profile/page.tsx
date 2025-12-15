"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, Award, UserCheck } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function BProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-lg space-y-6">
      <div className="flex flex-col items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>PS</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <div className="flex items-center gap-2 justify-center">
            <h2 className="text-xl font-bold">李师傅</h2>
            <Badge variant="default" className="text-[10px] px-1 h-5">已认证</Badge>
          </div>
          <p className="text-sm text-muted-foreground">ID: 9527001</p>
        </div>
      </div>

      <div className="grid gap-2">
        <Card>
          <CardContent className="p-0">
            <div className="flex flex-col">
              <Link href="/b/verify">
                <Button variant="ghost" className="justify-start w-full h-14 px-6 rounded-none border-b">
                  <UserCheck className="mr-2 h-4 w-4" />
                  认证状态
                </Button>
              </Link>
              <Button variant="ghost" className="justify-start h-14 px-6 rounded-none border-b">
                <Award className="mr-2 h-4 w-4" />
                资质证书
              </Button>
              <Button variant="ghost" className="justify-start h-14 px-6 rounded-none">
                <Settings className="mr-2 h-4 w-4" />
                设置
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
