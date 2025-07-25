"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react"; // Import the check icon

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // New state for tracking success
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false); // Reset success state

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "31198b05-5792-4add-bddb-2ef51aa917f3",
          ...formData
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Show success toast with success variant
        toast({
          title: "Thank you!",
          description: "The form has been submitted successfully. We will reply to you soon!",
          variant: "success",
          duration: 5000,
        });
        
        // Set success state
        setIsSuccess(true);
        
        // Reset form
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: ""
        });
      } else {
        // Show error toast
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      {isSuccess ? (
        <div className="success-message rounded-lg border border-cyan-200 bg-cyan-50 dark:bg-cyan-900/20 dark:border-cyan-900 p-6 text-center mb-4 animate-fade-in">
          <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-cyan-500 dark:text-cyan-400" />
          <h3 className="text-xl font-medium text-cyan-800 dark:text-cyan-300 mb-2">Form submitted successfully!</h3>
          <p className="text-cyan-700 dark:text-cyan-400">
            Thank you! The form has been submitted successfully. We will reply to you soon!
          </p>
          <Button 
            className="mt-4 rounded-full px-6 shadow-lg hover:shadow-primary/50 transition-all"
            onClick={() => setIsSuccess(false)}
          >
            Send another message
          </Button>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit}
          id="contact-form" 
          autoComplete="off"
          className="space-y-4"
        >
          <input type="hidden" name="access_key" value="31198b05-5792-4add-bddb-2ef51aa917f3" />
          
          <Input 
            type="text" 
            name="from_name" 
            placeholder="Your Name" 
            required 
            className="rounded-md w-full"
            value={formData.from_name}
            onChange={handleChange}
          />
          
          <Input 
            type="email" 
            name="from_email" 
            placeholder="Your Email" 
            required 
            className="rounded-md w-full"
            value={formData.from_email}
            onChange={handleChange}
          />
          
          <Input 
            type="text" 
            name="subject" 
            placeholder="Subject (optional)" 
            className="rounded-md w-full"
            value={formData.subject}
            onChange={handleChange}
          />
          
          <Textarea 
            name="message" 
            rows={5} 
            placeholder="Type your message here..." 
            required 
            className="rounded-md w-full resize-none"
            value={formData.message}
            onChange={handleChange}
          />
          
          <Button 
            type="submit" 
            className="w-full rounded-full px-6 shadow-lg hover:shadow-primary/50 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Contact Me"}
          </Button>
        </form>
      )}
    </div>
  );
}
