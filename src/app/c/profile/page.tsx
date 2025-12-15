"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, CreditCard, Shield } from "lucide-react";
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
              <Button variant="ghost" className="justify-start h-14 px-6 rounded-none border-b">
                <CreditCard className="mr-2 h-4 w-4" />
                支付方式
              </Button>
              <Button variant="ghost" className="justify-start h-14 px-6 rounded-none border-b">
                <Shield className="mr-2 h-4 w-4" />
                安全中心
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
