"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function FaqSection() {
  const faqs = [
    {
      question: "How do I find games near me?",
      answer: "Simply open the app, and we'll show you all available games in your area. You can filter by sport type, skill level, date, and distance to find the perfect match for you.",
    },
    {
      question: "What sports are available on PlayCircle?",
      answer: "We currently support a wide variety of sports including soccer, basketball, tennis, padel, volleyball, and more. We're constantly adding new sports based on community demand.",
    },
    {
      question: "Can I bring friends to a game?",
      answer: "Absolutely! You can invite friends directly through the app when booking a game. They'll receive a notification and can join with just a tap.",
    },
    {
      question: "What if I need to cancel my booking?",
      answer: "You can cancel your booking through the app up to 24 hours before the game starts for a full refund. Last-minute cancellations may be subject to our cancellation policy.",
    },
    {
      question: "How do I become a partner venue?",
      answer: "We'd love to work with you! Visit our Partners page or contact us directly. We'll help you get set up and start filling your courts and fields with enthusiastic players.",
    },
    {
      question: "Is PlayCircle free to use?",
      answer: "Downloading and browsing games is completely free. You only pay when you book a spot in a game. Pricing varies by venue and game type.",
    },
  ]

  return (
    <section className="py-20 px-4" style={{ background: '#050a0f' }}>
      <div className="container mx-auto max-w-3xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about PlayCircle</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                rotate: index % 2 === 0 ? -5 : 5
              }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring"
              }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border rounded-lg px-6"
                style={{
                  borderColor: 'rgba(69, 104, 130, 0.2)',
                  background: 'rgba(13, 18, 22, 0.4)'
                }}
              >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
