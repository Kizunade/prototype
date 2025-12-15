import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          可靠的宠物托管，<span className="text-primary">随时随地</span>
        </h1>
        <p className="max-w-[600px] text-zinc-500 md:text-xl">
          连接您身边值得信赖的宠托师。简单、安全、放心。
        </p>
        <div className="flex gap-4">
          <Link href="/login">
            <Button size="lg">开始使用</Button>
          </Link>
          <Button variant="outline" size="lg">
            了解更多
          </Button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>上门遛狗</CardTitle>
          </CardHeader>
          <CardContent>
            专业的遛狗服务，让您的爱犬保持活力与快乐。
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>上门喂养</CardTitle>
          </CardHeader>
          <CardContent>
            上门喂食、陪玩，细心照料您的爱宠。
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>实名认证</CardTitle>
          </CardHeader>
          <CardContent>
            所有宠托师均通过身份认证与背景调查。
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
