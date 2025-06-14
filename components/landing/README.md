# Khazannah Tours - Landing Page

Halaman landing page untuk Khazannah Tours Travel Haji & Umroh yang dibangun dengan Next.js App Router dan shadcn/ui.

## Fitur Utama

### 1. **Navigation** (`components/landing/navigation.tsx`)

- Responsive navigation bar dengan mobile menu
- Logo dan branding Khazannah Tours
- Quick access buttons untuk telepon dan WhatsApp
- Sticky navigation untuk user experience yang lebih baik

### 2. **Hero Section** (`components/landing/hero-section.tsx`)

- Hero section yang menarik dengan call-to-action yang jelas
- Statistik perusahaan (jamaah terlayani, pengalaman, kepuasan)
- Rating dan review dari jamaah
- Floating cards untuk menampilkan keunggulan

### 3. **Packages Section** (`components/landing/packages-section.tsx`)

- Display paket umroh dan haji dengan detail lengkap
- Pricing yang jelas dengan badge untuk paket populer
- Features yang included dalam setiap paket
- Trust indicators (sertifikat, pengalaman pembimbing, dll)

### 4. **Why Choose Us Section** (`components/landing/why-choose-us-section.tsx`)

- Keunggulan dan diferensiasi Khazannah Tours
- Proses mudah dalam 4 langkah
- Sertifikat dan legalitas yang dimiliki
- Trust indicators dan social proof

### 5. **Testimonials Section** (`components/landing/testimonials-section.tsx`)

- Testimonial dari jamaah yang puas
- Rating dan review yang authentic
- Statistik kepuasan jamaah
- Social proof yang kuat

### 6. **Contact Section** (`components/landing/contact-section.tsx`)

- Form kontak yang lengkap untuk lead generation
- Informasi kontak yang mudah diakses
- Quick action buttons untuk WhatsApp dan telepon
- Jam operasional dan alamat kantor

### 7. **Footer** (`components/landing/footer.tsx`)

- Company information dan contact details
- Quick links untuk navigasi
- Social media links
- Newsletter subscription
- Sertifikat dan legalitas

## Komponen yang Digunakan

### shadcn/ui Components:

- `Button` - untuk call-to-action dan interactive elements
- `Card`, `CardContent`, `CardHeader`, `CardTitle` - untuk layout konten
- `Badge` - untuk labels dan tags
- `Skeleton` - untuk loading states

### Lucide Icons:

- Menggunakan icon set yang konsisten dan modern
- Icons yang relevan dengan travel dan religious theme

## Struktur File

```
components/
└── landing/
    ├── navigation.tsx          # Navigation bar
    ├── hero-section.tsx        # Hero/banner section
    ├── packages-section.tsx    # Paket haji & umroh
    ├── why-choose-us-section.tsx # Keunggulan perusahaan
    ├── testimonials-section.tsx # Testimonial jamaah
    ├── contact-section.tsx     # Kontak dan form
    └── footer.tsx             # Footer
```

## Teknologi

- **Next.js 14+** dengan App Router
- **TypeScript** untuk type safety
- **Tailwind CSS** untuk styling
- **shadcn/ui** untuk UI components
- **Lucide React** untuk icons

## Design Philosophy

### Color Scheme:

- **Primary**: Green (#16a34a) - representing Islam and peace
- **Secondary**: Blue (#2563eb) - trust and reliability
- **Accent**: Orange (#ea580c) - urgency and warmth
- **Neutral**: Gray shades untuk balance

### Typography:

- Clean, readable fonts
- Proper hierarchy dengan heading sizes
- Consistent spacing dan layout

### Responsive Design:

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid system yang flexible

## Features untuk Development Selanjutnya

1. **Form Integration**

   - Connect form ke backend/API
   - Email notifications
   - CRM integration

2. **SEO Optimization**

   - Meta tags yang proper
   - Structured data untuk rich snippets
   - Open Graph tags

3. **Performance**

   - Image optimization dengan Next.js Image
   - Lazy loading untuk components
   - Bundle optimization

4. **Analytics**

   - Google Analytics integration
   - Conversion tracking
   - Heat mapping

5. **Content Management**
   - Dynamic content dari CMS
   - Multi-language support
   - A/B testing capability

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

Project ini siap untuk di-deploy ke:

- **Vercel** (recommended untuk Next.js)
- **Netlify**
- **AWS Amplify**
- **Custom server dengan Docker**

## License

© 2024 Khazannah Tours. All rights reserved.
