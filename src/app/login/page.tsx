import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PawPrint, UserCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">欢迎回来</CardTitle>
          <CardDescription>请选择您的身份继续</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Link href="/c/home">
            <Button className="w-full h-24 text-lg" variant="outline">
              <div className="flex flex-col items-center gap-2">
                <PawPrint className="h-8 w-8" />
                <span>我是宠物主</span>
              </div>
            </Button>
          </Link>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                或者
              </span>
            </div>
          </div>

          <Link href="/b/orders">
            <Button className="w-full h-24 text-lg" variant="outline">
              <div className="flex flex-col items-center gap-2">
                <UserCheck className="h-8 w-8" />
                <span>我是宠托师</span>
              </div>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
