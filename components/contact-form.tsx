"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success toast
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      // Show error toast
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="bg-muted/50"
      />

      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-muted/50"
      />

      <Input
        type="text"
        name="subject"
        placeholder="Subject (optional)"
        value={formData.subject}
        onChange={handleChange}
        className="bg-muted/50"
      />

      <Textarea
        name="message"
        placeholder="Type your message here..."
        value={formData.message}
        onChange={handleChange}
        required
        className="min-h-[150px] bg-muted/50"
      />

      <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Contact Me"}
      </Button>
    </form>
  )
}
