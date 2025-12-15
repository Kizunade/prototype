"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Star } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState("all");

  const sitters = [
    {
      id: "1",
      name: "王阿姨",
      avatar: "https://github.com/shadcn.png",
      rating: 5.0,
      reviews: 120,
      distance: "1.2km",
      services: ["walk", "feed"],
      price: "30",
    },
    {
      id: "2",
      name: "李同学",
      avatar: "https://github.com/shadcn.png",
      rating: 4.8,
      reviews: 85,
      distance: "2.5km",
      services: ["walk"],
      price: "25",
    },
    {
      id: "3",
      name: "张叔叔",
      avatar: "https://github.com/shadcn.png",
      rating: 4.9,
      reviews: 200,
      distance: "0.8km",
      services: ["feed"],
      price: "35",
    },
  ];

  const filteredSitters = activeTab === "all" 
    ? sitters 
    : sitters.filter(s => s.services.includes(activeTab));

  return (
    <div className="container mx-auto px-4 py-4 max-w-lg min-h-screen flex flex-col gap-4">
      {/* Search Header */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="搜索宠托师姓名或地址" className="pl-9" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Service Filter Tabs */}
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">全部</TabsTrigger>
          <TabsTrigger value="walk">上门遛狗</TabsTrigger>
          <TabsTrigger value="feed">上门喂养</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Sitter List */}
      <div className="space-y-4 pb-20">
        {filteredSitters.map((sitter) => (
          <Link href={`/c/sitter/${sitter.id}`} key={sitter.id}>
            <Card className="hover:bg-accent/50 transition-colors mb-4">
              <CardContent className="p-4 flex gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={sitter.avatar} />
                  <AvatarFallback>{sitter.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{sitter.name}</h3>
                    <span className="text-primary font-bold">¥{sitter.price}<span className="text-xs text-muted-foreground font-normal">/起</span></span>
                  </div>
                  
                  <div className="flex items-center text-xs text-muted-foreground gap-3">
                    <span className="flex items-center text-yellow-500 font-medium">
                      <Star className="w-3 h-3 fill-current mr-1" />{sitter.rating}
                    </span>
                    <span>({sitter.reviews}条评价)</span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />{sitter.distance}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-2">
                    {sitter.services.includes("walk") && <Badge variant="secondary" className="text-xs font-normal">遛狗</Badge>}
                    {sitter.services.includes("feed") && <Badge variant="secondary" className="text-xs font-normal">喂养</Badge>}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
        {filteredSitters.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            没有找到符合条件的宠托师
          </div>
        )}
      </div>
    </div>
  );
}
