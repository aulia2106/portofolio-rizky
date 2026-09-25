# Portofolio Pribadi - Rizky Aulia Putri

Website portofolio pribadi, dibangun dengan **HTML, CSS murni (tanpa Tailwind/Bootstrap), dan JavaScript (DOM)**. Responsif untuk mobile, tablet, dan desktop.

> Live demo: tempel link Netlify/Vercel/GitHub Pages kamu di sini setelah deploy

## Screenshot

> Tambahkan screenshot desktop & mobile di sini setelah dijalankan/deploy.
>
> ```md
> ![Tampilan Desktop](assets/screenshot-desktop.png)
> ![Tampilan Mobile](assets/screenshot-mobile.png)
> ```
>
> Simpan file gambarnya di folder `assets/`, lalu commit bersama kode.

## Tentang Proyek

Website ini menampilkan profil, cerita singkat, riwayat pendidikan, serta organisasi dan minat milik Rizky Aulia Putri - mahasiswa Program Studi Teknologi Informasi, Fakultas Ilmu Komputer (Fasilkom), Universitas Jember, Semester 3. Konsep visualnya bergaya "kartu pos" (postcard) dengan palet warna pink, merepresentasikan sisi petualang dan suka eksplorasi alam.

## Fitur

| Fitur | Deskripsi |
|---|---|
| Responsive layout | Grid & flexbox murni, breakpoint di 900px / 760px / 480px, navigasi berubah jadi hamburger menu di mobile |
| Dark / Light mode | Toggle tema tersimpan di localStorage, otomatis mengikuti preferensi sistem saat pertama buka |
| Tab Organisasi & Hobi | Beralih antara info organisasi dan hobi tanpa reload halaman |
| Umur otomatis | Dihitung otomatis dari tanggal lahir memakai Date() JavaScript |
| Scroll progress bar & active nav | Progress bar di atas halaman + menu navigasi otomatis menyorot section aktif via IntersectionObserver |
| Salin email | Tombol copy-to-clipboard dengan navigator.clipboard + fallback |
| Validasi form kontak | Validasi nama, email, dan pesan langsung di client, tanpa reload |
| Back to top | Tombol kembali ke atas halaman |

## Struktur Folder

```
portfolio-rizky/
├── index.html      # struktur halaman
├── style.css       # semua styling (plain CSS, custom properties, media query)
├── script.js       # seluruh interaksi DOM
├── assets/         # taruh screenshot & aset gambar di sini
└── README.md
```

## Cara Menjalankan Lokal

1. Download / clone folder ini.
2. Buka index.html langsung di browser, atau pakai live server (disarankan):
   ```bash
   npx serve .
   ```

## Cara Push ke GitHub

```bash
cd portfolio-rizky
git init
git add .
git commit -m "Portofolio pribadi - HTML CSS JS"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

## Cara Deploy (pilih salah satu)

**Netlify (drag & drop, paling cepat)**
1. Buka app.netlify.com/drop
2. Drag folder portfolio-rizky ke halaman tersebut
3. Link live otomatis muncul

**GitHub Pages**
1. Push dulu ke GitHub
2. Masuk ke repo -> Settings -> Pages
3. Pilih branch main, folder /root -> Save
4. Link aktif di https://USERNAME.github.io/NAMA-REPO/

**Vercel**
1. Buka vercel.com/new
2. Import repo GitHub kamu
3. Framework preset: Other -> Deploy

## Teknologi

- HTML5 (semantic tags)
- CSS3 murni (custom properties, flexbox, grid, prefers-color-scheme, prefers-reduced-motion)
- JavaScript vanilla (DOM manipulation, localStorage, IntersectionObserver, form validation)
- Font: DM Serif Display & Plus Jakarta Sans via Google Fonts

## Kontak

- Email: 252410102106@mail.unej.ac.id
- Asal: Pasuruan, Jawa Timur
