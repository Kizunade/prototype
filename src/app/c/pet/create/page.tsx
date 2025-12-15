"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePrototype } from "@/lib/prototype-context"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "宠物名称至少需要2个字符。",
  }),
  breed: z.string().min(2, {
    message: "品种至少需要2个字符。",
  }),
  age: z.string().min(1, {
    message: "年龄为必填项。",
  }),
  gender: z.string('请选择性别'),
  remarks: z.string().optional(),
})

export default function PetCreatePage() {
  const router = useRouter()
  const { setPet } = usePrototype()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      breed: "",
      age: "",
      remarks: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setPet({
      ...values,
      photo: null, // Mock photo upload
      remarks: values.remarks || "",
    })
    router.back() // Go back to previous page
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <Card>
        <CardHeader>
          <CardTitle>创建宠物档案</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>宠物昵称</FormLabel>
                    <FormControl>
                      <Input placeholder="例如：旺财" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="breed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>品种</FormLabel>
                    <FormControl>
                      <Input placeholder="例如：金毛" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>年龄</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="例如：3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>性别</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="请选择" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">公</SelectItem>
                          <SelectItem value="female">母</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormItem>
                <FormLabel>照片</FormLabel>
                <FormControl>
                  <Input type="file" accept="image/*" />
                </FormControl>
                <FormDescription>上传一张宠物的近照。</FormDescription>
              </FormItem>

              <FormField
                control={form.control}
                name="remarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>特殊备注 (选填)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="是否有过敏史、行为习惯等..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">保存档案</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
