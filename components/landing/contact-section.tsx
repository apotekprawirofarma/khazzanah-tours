"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 mb-4"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Hubungi Kami
          </Badge>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Konsultasi Gratis Sekarang
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tim customer service kami siap membantu Anda 24/7. Konsultasi gratis
            untuk memilih paket yang sesuai dengan kebutuhan Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <CardContent className="p-0 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Dapatkan Konsultasi Gratis
                </h3>
                <p className="text-gray-600">
                  Isi form di bawah ini dan tim kami akan menghubungi Anda dalam
                  24 jam
                </p>
              </div>{" "}
              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="nama@email.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      No. WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="08123456789"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>{" "}
                {/* Package Interest */}
                <div>
                  <label
                    htmlFor="package-select"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Paket yang Diminati
                  </label>
                  <select
                    id="package-select"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Pilih paket yang diminati</option>
                    <option value="umroh-reguler">Umroh Reguler 9 Hari</option>
                    <option value="umroh-plus">Umroh Plus Turki 14 Hari</option>
                    <option value="haji-plus">Haji Plus 2024</option>
                    <option value="umroh-keluarga">Umroh Keluarga</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                {/* Departure Time */}
                <div>
                  <label
                    htmlFor="departure-select"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Waktu Keberangkatan
                  </label>
                  <select
                    id="departure-select"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Pilih waktu keberangkatan</option>
                    <option value="juli-2024">Juli 2024</option>
                    <option value="agustus-2024">Agustus 2024</option>
                    <option value="september-2024">September 2024</option>
                    <option value="oktober-2024">Oktober 2024</option>
                    <option value="november-2024">November 2024</option>
                    <option value="desember-2024">Desember 2024</option>
                    <option value="2025">Tahun 2025</option>
                    <option value="belum-pasti">Belum Pasti</option>
                  </select>
                </div>
                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan (Opsional)
                  </label>
                  <textarea
                    placeholder="Sampaikan pertanyaan atau request khusus Anda"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Info */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h3>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Telepon / WhatsApp
                      </h4>
                      <p className="text-gray-600">+62 821-1234-5678</p>
                      <p className="text-gray-600">+62 812-9876-5432</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600">info@khazannahtours.com</p>
                      <p className="text-gray-600">cs@khazannahtours.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Alamat Kantor
                      </h4>
                      <p className="text-gray-600">
                        Jl. KH. Ahmad Dahlan No. 123
                        <br />
                        Menteng, Jakarta Pusat 10310
                        <br />
                        DKI Jakarta, Indonesia
                      </p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Jam Operasional
                      </h4>
                      <p className="text-gray-600">
                        Senin - Jumat: 08:00 - 17:00 WIB
                        <br />
                        Sabtu: 08:00 - 15:00 WIB
                        <br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="bg-green-500 hover:bg-green-600 text-white h-16"
                asChild
              >
                <a
                  href="https://wa.me/6282112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>

              <Button
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50 h-16"
                asChild
              >
                <a href="tel:+6282112345678">
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon
                </a>
              </Button>
            </div>

            {/* Map placeholder */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Google Maps akan ditampilkan di sini</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
