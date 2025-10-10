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
        className="rounded-2xl p-8 lg:p-10 backdrop-blur-md"
        style={{
          background: 'linear-gradient(135deg, rgba(69, 104, 130, 0.15) 0%, rgba(13, 18, 22, 0.9) 100%)',
          border: '1px solid rgba(69, 104, 130, 0.3)',
          boxShadow: '0 0 40px rgba(69, 104, 130, 0.15)'
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Row */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-300 text-sm font-medium">
                First name <span style={{ color: '#456882' }}>*</span>
              </Label>
              <Input
                id="firstName"
                type="text"
                required
                placeholder="John"
                className="bg-[#0a0f14]/80 border-[#456882]/30 text-white placeholder:text-gray-500 rounded-lg h-12 text-base focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-300 text-sm font-medium">
                Last name <span style={{ color: '#456882' }}>*</span>
              </Label>
              <Input
                id="lastName"
                type="text"
                required
                placeholder="Doe"
                className="bg-[#0a0f14]/80 border-[#456882]/30 text-white placeholder:text-gray-500 rounded-lg h-12 text-base focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all"
              />
            </div>
          </div>

          {/* Email & Phone Row */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
                Email <span style={{ color: '#456882' }}>*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="john@example.com"
                className="bg-[#0a0f14]/80 border-[#456882]/30 text-white placeholder:text-gray-500 rounded-lg h-12 text-base focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-300 text-sm font-medium">
                Phone <span style={{ color: '#456882' }}>*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="305-555-1234"
                maxLength={12}
                className="bg-[#0a0f14]/80 border-[#456882]/30 text-white placeholder:text-gray-500 rounded-lg h-12 text-base focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all"
              />
            </div>
          </div>

          {/* How can we help? */}
          <div className="space-y-2">
            <Label htmlFor="helpType" className="text-gray-300 text-sm font-medium">
              How can we help? <span style={{ color: '#456882' }}>*</span>
            </Label>
            <Select required>
              <SelectTrigger
                id="helpType"
                className="bg-[#0a0f14]/80 border-[#456882]/30 text-white rounded-lg h-12 text-base focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all"
              >
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent className="bg-[#0d1219] border-[#456882]/30 text-white">
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
              Your message <span style={{ color: '#456882' }}>*</span>
            </Label>
            <Textarea
              id="message"
              required
              rows={5}
              placeholder="Tell us more about your inquiry..."
              className="bg-[#0a0f14]/80 border-[#456882]/30 text-white placeholder:text-gray-500 rounded-lg text-base focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 font-semibold rounded-lg text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{
              background: '#456882',
              color: 'white'
            }}
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}

