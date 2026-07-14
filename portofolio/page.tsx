import Link from 'next/link';

export default function PortofolioPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Ini Halaman Portofolio</h1>
      <p>Berikut adalah daftar proyek yang sudah saya kerjakan.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Kembali ke Beranda
      </Link>
    </div>
  );
}