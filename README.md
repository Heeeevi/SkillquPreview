# Skilqu - Mobile-First Landing Page

> Platform belajar karier praktis 15 menit sehari untuk mahasiswa tingkat akhir dan fresh graduate.

Landing page resmi untuk proyek praktikum **Pemasaran Digital (Digital Marketing)**, Program Studi Inovasi Digital, Departemen Sistem Informasi, Fakultas Teknologi Elektro dan Informatika Cerdas (FTEIC), Institut Teknologi Sepuluh Nopember (ITS).

---

## 🚀 Fitur Utama Halaman

- **Skillshare-Inspired Aesthetic**: Desain kontras tinggi (*dark & light sections*), *horizontal category ribbon*, *course catalog grid* (8 modul), *mentor cards*, dan *accordion FAQ*.
- **5-Section Mobile Framework**:
  1. **Hero Section (Above the Fold)**: Lulus Uji 5 Detik, headline terarah, *squiggle vector*, *floating conversion card*.
  2. **Problem & Agitation**: 4 kotak metrik statistik, 3 kartu masalah nyata, dan kutipan verbatim persona Nadya Putri.
  3. **Solution & Inside Preview**: Filter pill interaktif, 8 kartu materi, dan tabel perbandingan (*YouTube vs Bootcamp vs Skilqu*).
  4. **Trust Elements & Mentors**: 4 profil praktisi industri, ulasan mahasiswa, banner Skilqu Pass Rp49rb/bln, dan FAQ interaktif.
  5. **Final CTA & Lead Capture Form**: Formulir pendaftaran ringkas rendah hambatan.
- **Mobile-First UX**: Responsive fluid typography, target sentuh jempol $\ge 48\text{px}$, serta *floating sticky bottom bar* di layar HP.
- **Tautan CTA Terintegrasi**: Mengarah ke formulir evaluasi usability di `https://s.id/LEICk`.

---

## 🌐 Deploy di Netlify

Repository ini sudah siap untuk di-deploy di Netlify:

1. Buka [Netlify](https://app.netlify.com/).
2. Klik **Add new site** $\rightarrow$ **Import an existing project**.
3. Pilih **GitHub** dan pilih repository **`Heeeevi/SkillquPreview`**.
4. Pengaturan Build:
   - **Branch to deploy**: `main`
   - **Publish directory**: `.` (root)
5. Klik **Deploy site**.

Halaman akan langsung aktif dan memiliki sertifikat HTTPS otomatis.

---

## 💻 Menjalankan Secara Lokal

```bash
# Menggunakan Python built-in server:
python -m http.server 8000

# Buka di browser:
# http://localhost:8000
```
