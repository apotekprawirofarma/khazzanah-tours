# SEO Setup for Khazanah Tours Jakarta

## File-file SEO yang telah dibuat:

### 1. Metadata Dasar (app/layout.tsx)

- Title dan description yang SEO-friendly
- Open Graph tags untuk social media
- Twitter Card metadata
- Robots directives
- Canonical URL

### 2. Sitemap (app/sitemap.ts)

- Sitemap otomatis untuk Google Search Console
- Update frequency dan priority untuk setiap halaman
- Accessible di: https://khazzanahtoursjakarta.com/sitemap.xml

### 3. Robots.txt (app/robots.ts)

- Mengizinkan semua bot untuk crawl
- Mengarahkan ke sitemap
- Accessible di: https://khazzanahtoursjakarta.com/robots.txt

### 4. Structured Data (lib/structured-data.ts)

- JSON-LD schema untuk TravelAgency
- Informasi bisnis yang terstruktur
- Rating dan review aggregate
- Breadcrumb navigation

### 5. Google Analytics (components/analytics.tsx)

- Component untuk tracking Google Analytics
- Siap digunakan dengan GA_MEASUREMENT_ID

## Yang perlu diupdate:

1. **Ganti informasi kontak di structured-data.ts:**

   - Nomor telepon
   - Email
   - Alamat lengkap
   - Koordinat GPS

2. **Buat gambar untuk SEO:**

   - Logo (logo.png)
   - Open Graph image (og-image.jpg) ukuran 1200x630px

3. **Setup Google Analytics:**

   - Buat akun GA4
   - Dapatkan GA_MEASUREMENT_ID
   - Tambahkan component Analytics ke layout

4. **Setup Google Search Console:**
   - Verify domain ownership
   - Submit sitemap
   - Monitor indexing

## Quick Checklist:

- [x] Meta tags dasar
- [x] Open Graph tags
- [x] Sitemap XML
- [x] Robots.txt
- [x] Structured data JSON-LD
- [ ] Google Analytics setup
- [ ] Google Search Console verification
- [ ] Images untuk social sharing
- [ ] Update contact information

## Tips tambahan:

1. Gunakan Google PageSpeed Insights untuk test performa
2. Test structured data di Google Rich Results Test
3. Monitor ranking di Google Search Console
4. Update content secara berkala untuk SEO yang lebih baik
