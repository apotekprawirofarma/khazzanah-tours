"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navigationItems = [
  { name: "Beranda", href: "#" },
  { name: "Paket Umroh", href: "#paket" },
  { name: "Paket Haji", href: "#haji" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "Tentang Kami", href: "#tentang" },
  { name: "Kontak", href: "#kontak" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Khazannah Tours
              </h1>
              <Badge
                variant="secondary"
                className="text-xs bg-green-100 text-green-800"
              >
                Haji & Umroh
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-green-600 text-green-600 hover:bg-green-50"
              asChild
            >
              <a href="tel:+6282112345678">
                <Phone className="w-4 h-4 mr-2" />
                Telepon
              </a>
            </Button>

            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700"
              asChild
            >
              <a
                href="https://wa.me/6282112345678"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  asChild
                >
                  <a href="tel:+6282112345678">
                    <Phone className="w-4 h-4 mr-2" />
                    Telepon Sekarang
                  </a>
                </Button>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <a
                    href="https://wa.me/6282112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
