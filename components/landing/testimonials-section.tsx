"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    location: "Jakarta",
    rating: 5,
    text: "Alhamdulillah, perjalanan umroh bersama Khazannah Tours sangat memuaskan. Pelayanan excellent, hotel dekat Haram, dan guide yang sangat membantu. Terima kasih untuk pengalaman spiritual yang luar biasa!",
    package: "Umroh Reguler 9 Hari",
    date: "Maret 2024",
    avatar: "BS",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    location: "Surabaya",
    rating: 5,
    text: "Paket umroh plus Turki sangat recommended! Perjalanan yang tak terlupakan, mulai dari ibadah di tanah suci hingga wisata religi di Turki. Semuanya terorganisir dengan baik dan sesuai jadwal.",
    package: "Umroh Plus Turki 14 Hari",
    date: "Februari 2024",
    avatar: "SN",
  },
  {
    id: 3,
    name: "Ahmad Rahman",
    location: "Bandung",
    rating: 5,
    text: "Sudah 3x umroh dengan Khazannah Tours, selalu puas dengan pelayanannya. Staff yang ramah, akomodasi yang nyaman, dan tentunya harga yang kompetitif. Highly recommended!",
    package: "Umroh Reguler 9 Hari",
    date: "Januari 2024",
    avatar: "AR",
  },
  {
    id: 4,
    name: "Fatimah Zahra",
    location: "Medan",
    rating: 5,
    text: "Pengalaman haji yang sangat berkesan. Pembimbing yang sabar dan berpengalaman, fasilitas yang lengkap, dan yang terpenting adalah kelancaran ibadah dari awal hingga akhir. Jazakallahu khairan!",
    package: "Haji Plus 2023",
    date: "Agustus 2023",
    avatar: "FZ",
  },
  {
    id: 5,
    name: "Muhammad Yusuf",
    location: "Makassar",
    rating: 5,
    text: "Pertama kali umroh dan memilih Khazannah Tours adalah keputusan yang tepat. Dari persiapan dokumen sampai pulang ke Indonesia, semuanya dihandle dengan profesional. Terima kasih!",
    package: "Umroh Reguler 9 Hari",
    date: "April 2024",
    avatar: "MY",
  },
  {
    id: 6,
    name: "Aminah Sari",
    location: "Yogyakarta",
    rating: 5,
    text: "Umroh bersama keluarga jadi lebih mudah dan nyaman dengan Khazannah Tours. Anak-anak juga senang karena ada program khusus untuk keluarga. Recommended banget untuk yang mau umroh bareng keluarga!",
    package: "Umroh Keluarga 12 Hari",
    date: "Maret 2024",
    avatar: "AS",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
            <Star className="w-4 h-4 mr-2" />
            Testimoni Jamaah
          </Badge>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kata Mereka Tentang Kami
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kepuasan jamaah adalah prioritas utama kami. Simak pengalaman
            spiritual mereka bersama Khazannah Tours.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-green-600" />
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>{" "}
                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                {/* Package Info */}
                <div className="border-t pt-4">
                  <Badge
                    variant="outline"
                    className="text-xs text-green-600 border-green-600 mb-3"
                  >
                    {testimonial.package}
                  </Badge>

                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.location} • {testimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-green-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                15,000+
              </div>
              <div className="text-gray-700">Jamaah Terlayani</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700">Tingkat Kepuasan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                4.9/5
              </div>
              <div className="text-gray-700">Rating Rata-rata</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                1,200+
              </div>
              <div className="text-gray-700">Ulasan Positif</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
