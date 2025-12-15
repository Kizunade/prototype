"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { Camera } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "真实姓名至少需要2个字符。",
  }),
  idNumber: z.string().min(15, {
    message: "身份证号格式不正确。",
  }),
})

export default function SitterVerifyPage() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      idNumber: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("认证申请已提交", {
      description: "我们将在24小时内审核您的资料。",
    })
    router.push("/b/orders")
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <Card>
        <CardHeader>
          <CardTitle>实名认证</CardTitle>
          <CardDescription>为了保障服务安全，请先完成实名认证</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>真实姓名</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入您的真实姓名" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="idNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>身份证号</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入您的身份证号" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormItem>
                  <FormLabel>身份证正面</FormLabel>
                  <div className="border-2 border-dashed rounded-md h-32 flex flex-col items-center justify-center text-muted-foreground bg-muted/50">
                    <Camera className="h-8 w-8 mb-2" />
                    <span className="text-xs">上传人像面</span>
                  </div>
                  <Input type="file" className="hidden" />
                </FormItem>
                <FormItem>
                  <FormLabel>人脸照片</FormLabel>
                  <div className="border-2 border-dashed rounded-md h-32 flex flex-col items-center justify-center text-muted-foreground bg-muted/50">
                    <Camera className="h-8 w-8 mb-2" />
                    <span className="text-xs">上传自拍</span>
                  </div>
                  <Input type="file" className="hidden" />
                </FormItem>
              </div>

              <Button type="submit" className="w-full">提交认证</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
