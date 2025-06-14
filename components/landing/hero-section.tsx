"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 hover:bg-green-200"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Berpengalaman Sejak 2010
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Khazannah Tours
                <span className="block text-green-600">Haji & Umroh</span>
                <span className="block text-2xl lg:text-3xl font-medium text-gray-600 mt-2">
                  Terpercaya
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl">
                Wujudkan ibadah haji dan umroh impian Anda bersama Khazannah
                Tours. Dengan pengalaman lebih dari 13 tahun, kami siap
                memberikan pelayanan terbaik untuk perjalanan spiritual Anda.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">15,000+</div>
                <div className="text-sm text-gray-600">Jamaah Terlayani</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">13+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Kepuasan Jamaah</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Daftar Sekarang
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                <Users className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 dari 1,200+ ulasan</span>
            </div>
          </div>

          {/* Right Content - Image and Cards */}
          <div className="relative">
            <div className="relative z-10">
              <Card className="overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                        <MapPin className="w-16 h-16" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Masjidil Haram
                      </h3>
                      <p className="text-green-100">Makkah Al-Mukarramah</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Cards */}
              <Card className="absolute -top-4 -left-4 bg-white shadow-lg border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Grup Kecil
                      </div>
                      <div className="text-sm text-gray-600">Max 45 Jamaah</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-4 -right-4 bg-white shadow-lg border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Hotel Bintang 5
                      </div>
                      <div className="text-sm text-gray-600">Dekat Haram</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
