"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal mb-4 text-balance">
            Ready to bring your creative vision online?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-2">
            Let&apos;s discuss your project and see if we&apos;re a good fit.
          </p>
          <p className="text-sm text-muted-foreground/80">
            Most inquiries answered within 24 hours • Free 30-minute consultation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })}
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })}
                className="w-full"
                required
              />
            </div>
          </div>
          <div className="col-span-full">
            <label htmlFor="projectType" className="block text-sm mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
              required
            >
              <option value="">Select a project type</option>
              <option value="portfolio">Portfolio Website</option>
              <option value="ecommerce">Ecommerce Store</option>
              <option value="brand">Brand Identity & Web Design</option>
              <option value="optimization">Website Optimization</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-2">
              Message
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })}
              className="w-full min-h-[150px]"
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
