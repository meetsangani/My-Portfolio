"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  url: string
}

export default function BlogCard({ title, excerpt, image, date, readTime, url }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-primary line-clamp-2">{title}</h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <Link 
          href={url}
          className="text-primary hover:underline font-medium"
        >
          Read More →
        </Link>
      </CardContent>
    </Card>
  )
}
