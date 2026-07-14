import Link from 'next/link';

export default function HalamanBeranda() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Selamat Datang</h1>
      <p>Ini Merupakan Halaman Utama (Home) yang berjalan di localhost.</p>
      <hr />
      <h3>Menu Navigasi</h3>
      <ul>
        <li>
          <Link href="/profile">Ke halaman profile</Link>
        </li>
        <li>
          <Link href="/portofolio">Ke halaman portofolio</Link>
        </li>
      </ul>
    </div>
  );
}