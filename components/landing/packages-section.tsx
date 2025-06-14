"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  Plane,
  Shield,
  Heart,
} from "lucide-react";

const packages = [
  {
    id: 1,
    type: "Umroh",
    name: "Umroh Reguler 9 Hari",
    price: "Rp 23.500.000",
    originalPrice: "Rp 25.000.000",
    duration: "9 Hari 7 Malam",
    hotel: "Hotel Bintang 4",
    rating: 4.8,
    reviews: 127,
    features: [
      "Visa Umroh",
      "Tiket Pesawat PP",
      "Hotel Makkah & Madinah",
      "Makan 3x Sehari",
      "Ziarah Lengkap",
      "Perlengkapan Umroh",
    ],
    badge: "Paling Populer",
    badgeColor: "bg-green-500",
  },
  {
    id: 2,
    type: "Umroh",
    name: "Umroh Plus Turki 14 Hari",
    price: "Rp 35.000.000",
    originalPrice: "Rp 38.000.000",
    duration: "14 Hari 12 Malam",
    hotel: "Hotel Bintang 5",
    rating: 4.9,
    reviews: 89,
    features: [
      "Visa Umroh + Turki",
      "Tiket Pesawat PP",
      "Hotel Makkah, Madinah & Istanbul",
      "Makan 3x Sehari",
      "Ziarah Lengkap + Turki Tour",
      "Guide Berpengalaman",
    ],
    badge: "Premium",
    badgeColor: "bg-blue-500",
  },
  {
    id: 3,
    type: "Haji",
    name: "Haji Plus 2024",
    price: "Rp 85.000.000",
    originalPrice: "",
    duration: "40 Hari",
    hotel: "Hotel Bintang 5",
    rating: 4.9,
    reviews: 45,
    features: [
      "Visa Haji",
      "Tiket Pesawat PP",
      "Hotel Makkah & Madinah",
      "Makan 3x Sehari",
      "Pembimbing Haji Bersertifikat",
      "Asuransi Kesehatan",
    ],
    badge: "Terbatas",
    badgeColor: "bg-orange-500",
  },
];

export function PackagesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 mb-4"
          >
            <Plane className="w-4 h-4 mr-2" />
            Paket Pilihan
          </Badge>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Paket Haji & Umroh Terbaik
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Semua
            paket sudah termasuk akomodasi, konsumsi, dan bimbingan spiritual.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                pkg.badge === "Paling Populer"
                  ? "ring-2 ring-green-500 scale-105"
                  : ""
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  className={`absolute top-4 right-4 ${pkg.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium z-10`}
                >
                  {pkg.badge}
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    {pkg.type}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({pkg.reviews})
                    </span>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </CardTitle>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-green-600">
                    {pkg.price}
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {pkg.originalPrice}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{pkg.hotel}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Termasuk:
                  </h4>
                  <ul className="space-y-1">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mt-6 ${
                    pkg.badge === "Paling Populer"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Terdaftar Resmi
            </h3>
            <p className="text-gray-600">
              Berizin resmi dari Kementerian Agama RI dengan nomor izin
              D.123/2010
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Pembimbing Berpengalaman
            </h3>
            <p className="text-gray-600">
              Tim pembimbing yang sudah berpengalaman puluhan tahun di bidang
              haji & umroh
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Pelayanan Terbaik
            </h3>
            <p className="text-gray-600">
              Layanan 24/7 selama perjalanan dengan standar pelayanan
              internasional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
