import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Ini Halaman Profile</h1>
      <p>Halo, ini adalah halaman profil saya.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Kembali ke Beranda
      </Link>
    </div>
  );
}