"use client"

import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { usePrototype } from "@/lib/prototype-context"
import { toast } from "sonner"

export default function CheckoutPage() {
  const router = useRouter()
  const { pet, order } = usePrototype()

  const handlePayment = () => {
    // Simulate Wechat Pay
    toast.success("支付成功!", {
      description: "您的订单已成功提交。",
    })
    
    // In a real app, this would update backend state. 
    // For prototype, we can redirect to home or an 'order success' page.
    setTimeout(() => {
      router.push("/")
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <Card>
        <CardHeader>
          <CardTitle>订单详情</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">宠物</span>
            <span className="font-medium">{pet.name || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">服务项目</span>
            <span className="font-medium capitalize">{order.serviceType === 'walk' ? '上门遛狗' : '上门喂养'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">日期</span>
            <span className="font-medium">
              {order.date ? format(order.date, "PPP") : "N/A"}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">地址</span>
            <span className="font-medium text-sm text-right">{order.address || "N/A"}</span>
          </div>
          
          <Separator className="my-4" />
          
          <div className="flex justify-between text-lg font-bold">
            <span>总计</span>
            <span>¥50.00</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-[#07C160] hover:bg-[#06ad56] text-white" onClick={handlePayment}>
            微信支付
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
