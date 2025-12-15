"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Plus, MoreHorizontal } from "lucide-react";
import { usePrototype } from "@/lib/prototype-context";

export default function CPetsPage() {
  const { pet } = usePrototype();

  // Mock multiple pets
  const pets = [
    {
      id: "1",
      name: pet.name || "旺财",
      breed: pet.breed || "金毛",
      age: pet.age || "3",
      gender: "公",
      avatar: "🐶",
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: "2",
      name: "咪咪",
      breed: "英国短毛猫",
      age: "2",
      gender: "母",
      avatar: "🐱",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-lg min-h-screen bg-zinc-50">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/c/profile">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">我的宠物</h1>
        </div>
        <Link href="/c/pet/create">
          <Button size="icon" variant="ghost">
            <Plus className="h-5 w-5" />
          </Button>
        </Link>
      </header>

      <div className="space-y-4">
        {pets.map((pet) => (
          <Card key={pet.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center p-4 gap-4">
                <div className={`h-16 w-16 rounded-full flex items-center justify-center text-3xl ${pet.color}`}>
                  {pet.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        {pet.name}
                        <span className={`text-xs px-1.5 py-0.5 rounded ${pet.gender === '公' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}`}>
                          {pet.gender}
                        </span>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {pet.breed} · {pet.age}岁
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 px-4 py-3 flex gap-2 border-t">
                <Button variant="outline" size="sm" className="flex-1">健康记录</Button>
                <Button variant="outline" size="sm" className="flex-1">编辑资料</Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Link href="/c/pet/create" className="block mt-6">
          <Button variant="outline" className="w-full border-dashed h-12">
            <Plus className="mr-2 h-4 w-4" />
            添加新宠物
          </Button>
        </Link>
      </div>
    </div>
  );
}
