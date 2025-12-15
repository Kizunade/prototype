"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { CheckCircle2, Camera, MapPin, Phone } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const STEPS = [
  { id: 1, label: "已接单" },
  { id: 2, label: "已到达" },
  { id: 3, label: "已完成" },
]

export default function ServiceExecutionPage() {
  const params = useParams()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(2) // Simulate 'Arrived' step for demo
  const [photos, setPhotos] = useState<File[]>([])

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      toast.success(`状态已更新为: ${STEPS[currentStep].label}`)
    } else {
      if (photos.length < 2) {
        toast.error("请至少上传2张照片（宠物状态 + 门窗关闭）")
        return
      }
      toast.success("服务已完成!")
      setTimeout(() => router.push("/b/orders"), 1500)
    }
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhotos([...photos, e.target.files[0]])
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>订单 #{params.id}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            朝阳区建国路88号
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">宠物: 旺财 (金毛)</span>
            <Button size="icon" variant="outline">
              <Phone className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative flex justify-between mt-8">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center z-10 relative">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step.id
                      ? "bg-primary border-primary text-primary-foreground"
                      : "bg-background border-muted-foreground text-muted-foreground"
                  }`}
                >
                  {currentStep >= step.id ? <CheckCircle2 className="h-5 w-5" /> : step.id}
                </div>
                <span className="text-xs mt-2 font-medium">{step.label}</span>
              </div>
            ))}
            <div className="absolute top-4 left-0 w-full h-[2px] bg-muted -z-0" />
            <div 
              className="absolute top-4 left-0 h-[2px] bg-primary -z-0 transition-all duration-300" 
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {currentStep === 3 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>服务凭证</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>宠物状态</Label>
                <div className="border-2 border-dashed rounded-md h-32 flex flex-col items-center justify-center bg-muted/50 relative overflow-hidden">
                  {photos[0] ? (
                    <div className="absolute inset-0 bg-green-100 flex items-center justify-center text-green-700 font-bold">已上传</div>
                  ) : (
                    <>
                      <Camera className="h-8 w-8 mb-2 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">上传照片</span>
                    </>
                  )}
                  <Input 
                    type="file" 
                    accept="image/*" 
                    className="absolute inset-0 opacity-0 cursor-pointer" 
                    onChange={handlePhotoUpload}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>门窗关闭</Label>
                <div className="border-2 border-dashed rounded-md h-32 flex flex-col items-center justify-center bg-muted/50 relative overflow-hidden">
                  {photos[1] ? (
                     <div className="absolute inset-0 bg-green-100 flex items-center justify-center text-green-700 font-bold">已上传</div>
                  ) : (
                    <>
                      <Camera className="h-8 w-8 mb-2 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">上传照片</span>
                    </>
                  )}
                  <Input 
                    type="file" 
                    accept="image/*" 
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handlePhotoUpload}
                  />
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              * 照片将自动添加时间和地点水印。
            </p>
          </CardContent>
        </Card>
      )}

      <Button size="lg" className="w-full" onClick={handleNextStep}>
        {currentStep === 3 ? "完成服务" : `标记为 ${STEPS[currentStep].label}`}
      </Button>
    </div>
  )
}
