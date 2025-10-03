"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [phoneNumber, setPhoneNumber] = useState("")

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, "")
    
    // Format as 305-555-1234
    if (numbers.length <= 3) {
      return numbers
    } else if (numbers.length <= 6) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhoneNumber(formatted)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <div className="w-full">
      {/* Glass Card */}
      <div 
        className="rounded-[20px] p-8 lg:p-10 backdrop-blur-md"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 18, 22, 0.6) 0%, rgba(69, 104, 130, 0.3) 100%)',
          border: '1.5px solid rgba(70, 104, 130, 0.4)',
          boxShadow: '0 0 40px rgba(70, 104, 130, 0.2), inset 0 0 20px rgba(70, 104, 130, 0.08)',
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-300 text-sm font-medium">
              First name <span className="text-[#4668A2]">*</span>
            </Label>
            <Input
              id="firstName"
              type="text"
              required
              className="bg-[#0a0e14] border-[#1a2430] text-white placeholder:text-gray-600 rounded-lg h-12 focus:border-[#4668A2] focus:ring-1 focus:ring-[#4668A2] shadow-inner"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
              }}
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-300 text-sm font-medium">
              Last name <span className="text-[#4668A2]">*</span>
            </Label>
            <Input
              id="lastName"
              type="text"
              required
              className="bg-[#0a0e14] border-[#1a2430] text-white placeholder:text-gray-600 rounded-lg h-12 focus:border-[#4668A2] focus:ring-1 focus:ring-[#4668A2] shadow-inner"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
              }}
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
              Email Address <span className="text-[#4668A2]">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="bg-[#0a0e14] border-[#1a2430] text-white placeholder:text-gray-600 rounded-lg h-12 focus:border-[#4668A2] focus:ring-1 focus:ring-[#4668A2] shadow-inner"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
              }}
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-300 text-sm font-medium">
              Phone number <span className="text-[#4668A2]">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="305-555-1234"
              maxLength={12}
              className="bg-[#0a0e14] border-[#1a2430] text-white placeholder:text-gray-600 rounded-lg h-12 focus:border-[#4668A2] focus:ring-1 focus:ring-[#4668A2] shadow-inner"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
              }}
            />
          </div>

          {/* How can we help? */}
          <div className="space-y-2">
            <Label htmlFor="helpType" className="text-gray-300 text-sm font-medium">
              How can we help? <span className="text-[#4668A2]">*</span>
            </Label>
            <Select required>
              <SelectTrigger 
                id="helpType"
                className="bg-[#0a0e14] border-[#1a2430] text-white rounded-lg h-12 focus:border-[#4668A2] focus:ring-1 focus:ring-[#4668A2] shadow-inner"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
                }}
              >
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent className="bg-[#0d1219] border-[#1a2430] text-white">
                <SelectItem value="support">Support</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Your message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300 text-sm font-medium">
              Your message <span className="text-[#4668A2]">*</span>
            </Label>
            <Textarea
              id="message"
              required
              rows={5}
              placeholder="Tell us more about your inquiry..."
              className="bg-[#0a0e14] border-[#1a2430] text-white placeholder:text-gray-600 rounded-lg focus:border-[#4668A2] focus:ring-1 focus:ring-[#4668A2] shadow-inner resize-none"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
              }}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-[#4668A2] hover:bg-[#3B5A8C] text-white font-semibold rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-[#4668A2]/20"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}

