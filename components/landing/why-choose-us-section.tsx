"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, MapPin, Plane, Shield } from "lucide-react";

const whyChooseUs = [
  {
    icon: Shield,
    title: "Terdaftar Resmi",
    description:
      "Memiliki izin resmi dari Kementerian Agama RI No. D.123/2010 dan tergabung dalam ASITA (Association of Indonesian Tours and Travel Agencies)",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Users,
    title: "Pembimbing Berpengalaman",
    description:
      "Tim pembimbing haji dan umroh bersertifikat yang telah berpengalaman lebih dari 15 tahun dalam membimbing jamaah",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: MapPin,
    title: "Lokasi Hotel Strategis",
    description:
      "Hotel bintang 4-5 dengan jarak dekat ke Masjidil Haram (100-300 meter) dan Masjid Nabawi untuk kemudahan ibadah",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Plane,
    title: "Maskapai Terpercaya",
    description:
      "Menggunakan maskapai ternama seperti Saudi Airlines, Emirates, dan Qatar Airways dengan service excellent",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: CheckCircle,
    title: "Fasilitas Lengkap",
    description:
      "Termasuk visa, tiket pesawat, hotel, konsumsi, ziarah, perlengkapan ibadah, dan asuransi perjalanan",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    icon: Clock,
    title: "Layanan 24/7",
    description:
      "Customer service siap membantu Anda 24 jam selama perjalanan dengan response time yang cepat",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Konsultasi & Pendaftaran",
    description:
      "Konsultasi gratis untuk memilih paket yang sesuai, kemudian lakukan pendaftaran dengan DP minimal",
  },
  {
    step: "02",
    title: "Persiapan Dokumen",
    description:
      "Tim kami akan membantu proses visa, passport, dan dokumen lainnya hingga selesai",
  },
  {
    step: "03",
    title: "Manasik & Pembekalan",
    description:
      "Mengikuti manasik haji/umroh dan pembekalan untuk persiapan spiritual dan teknis",
  },
  {
    step: "04",
    title: "Keberangkatan",
    description:
      "Berangkat bersama rombongan dengan panduan lengkap dari pembimbing berpengalaman",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 mb-4"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Mengapa Memilih Kami
          </Badge>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Keunggulan Khazannah Tours
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dengan pengalaman lebih dari 13 tahun, kami berkomitmen memberikan
            pelayanan terbaik untuk perjalanan spiritual Anda.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {whyChooseUs.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Proses Mudah, Perjalanan Berkah
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Hanya 4 langkah sederhana untuk mewujudkan ibadah haji atau umroh
              impian Anda
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-transparent transform translate-x-4"></div>
                )}

                {/* Step Number */}
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>

                {/* Step Content */}
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">13+</div>
            <div className="text-gray-700">Tahun Pengalaman</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">100%</div>
            <div className="text-gray-700">Keberangkatan Terjamin</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-gray-700">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
