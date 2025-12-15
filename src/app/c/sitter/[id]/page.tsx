"use client"

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Calendar, ShieldCheck, Clock, Award, Check } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePrototype } from "@/lib/prototype-context";

export default function SitterDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { pet, setOrder } = usePrototype();
  const [selectedPets, setSelectedPets] = useState<string[]>([pet.name || "旺财"]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // Mock pets list
  const myPets = [
    { id: "1", name: pet.name || "旺财", avatar: "🐶" },
    { id: "2", name: "咪咪", avatar: "🐱" },
  ];

  const togglePet = (petName: string) => {
    if (selectedPets.includes(petName)) {
      setSelectedPets(selectedPets.filter(p => p !== petName));
    } else {
      setSelectedPets([...selectedPets, petName]);
    }
  };

  const toggleService = (serviceName: string) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter(s => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleBooking = () => {
    if (selectedServices.length === 0 || selectedPets.length === 0) return;
    
    setOrder({
      serviceType: selectedServices.includes("上门遛狗") ? "walk" : "feed", // Simplify for MVP, just pick one
      date: new Date(), // Should be selected from calendar in real app
      address: "默认地址",
    });
    router.push("/c/checkout");
  };

  // Mock data - in real app fetch by ID
  const sitter = {
    id: params.id,
    name: "王阿姨",
    avatar: "https://github.com/shadcn.png",
    distance: "1.2km",
    serviceCount: 128,
    verifiedDate: "2023-05",
    rating: 5.0,
    bio: "拥有5年养宠经验，家里有两只金毛。性格开朗，非常有耐心，能够很好地照顾您的爱宠。接受大型犬。",
    services: [
      { name: "上门遛狗", price: "30元/次" },
      { name: "上门喂养", price: "40元/次" },
      { name: "洗澡陪护", price: "80元/次" },
    ],
    reviews: [
      { user: "张先生", rating: 5, comment: "王阿姨非常准时，对狗狗很有耐心，推荐！", date: "2024-03-10" },
      { user: "李女士", rating: 5, comment: "服务很细致，每次都会发很多照片和视频。", date: "2024-02-28" },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg pb-24">
      {/* Header Info */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
          <AvatarImage src={sitter.avatar} />
          <AvatarFallback>Sitter</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl font-bold">{sitter.name}</h1>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              <ShieldCheck className="w-3 h-3 mr-1" /> 已认证
            </Badge>
          </div>
          <div className="flex items-center justify-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {sitter.distance}</span>
            <span className="flex items-center"><Award className="w-3 h-3 mr-1" /> 服务 {sitter.serviceCount} 次</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {sitter.verifiedDate} 加入</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Bio */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">关于我</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">{sitter.bio}</p>
          </CardContent>
        </Card>

        {/* Services */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">服务项目</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {sitter.services.map((service) => (
              <div key={service.name} className="flex justify-between items-center border-b last:border-0 pb-2 last:pb-0">
                <span className="font-medium">{service.name}</span>
                <span className="text-primary font-bold">{service.price}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Reviews */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">用户评价</CardTitle>
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1 font-bold">{sitter.rating}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {sitter.reviews.map((review, index) => (
              <div key={`review-${index + 1}`} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{review.user}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-zinc-600">{review.comment}</p>
                {index < sitter.reviews.length - 1 && <Separator className="mt-2" />}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t z-50 flex justify-center">
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full max-w-lg h-12 text-lg shadow-lg">
              预约宠托师
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-lg">
              <DrawerHeader>
                <DrawerTitle>预约服务</DrawerTitle>
                <DrawerDescription>请选择您的宠物和服务项目</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">选择宠物 (多选)</h3>
                  <div className="flex gap-4">
                    {myPets.map((p) => (
                      <Button
                        key={p.id}
                        variant="ghost"
                        className={`flex flex-col items-center gap-2 h-auto p-2 ${selectedPets.includes(p.name) ? 'opacity-100' : 'opacity-50 grayscale'}`}
                        onClick={() => togglePet(p.name)}
                      >
                        <div className="relative h-14 w-14 rounded-full bg-zinc-100 flex items-center justify-center text-2xl border-2 border-transparent data-[selected=true]:border-primary" data-selected={selectedPets.includes(p.name)}>
                          {p.avatar}
                          {selectedPets.includes(p.name) && (
                            <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-0.5">
                              <Check className="w-3 h-3" />
                            </div>
                          )}
                        </div>
                        <span className="text-xs font-medium">{p.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium">选择服务 (多选)</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {sitter.services.map((service, index) => (
                      <Button
                        key={service.name}
                        variant="outline"
                        className={`h-auto flex flex-col items-start p-3 transition-all ${selectedServices.includes(service.name) ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:border-primary/50'}`}
                        onClick={() => toggleService(service.name)}
                      >
                        <div className="font-medium text-sm flex items-center justify-between w-full">
                          {service.name}
                          {selectedServices.includes(service.name) && <Check className="w-3 h-3 text-primary" />}
                        </div>
                        <div className="text-primary font-bold mt-1">{service.price}</div>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button onClick={handleBooking} disabled={selectedServices.length === 0 || selectedPets.length === 0}>
                  立即预约
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">取消</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
