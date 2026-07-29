import Image from "next/image";
import Link from "next/link";

export default function Project1Page() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] p-8 relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#E6D5B8]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C7D9C1]/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto bg-white rounded-[35px] shadow-2xl overflow-hidden">

        {/* Navbar */}
        <nav className="flex justify-between items-center border-b border-[#d8d2c9] px-10 py-6">

          <h1 className="text-2xl font-bold tracking-[5px] text-[#5a5148]">
            PROJECT DETAILS
          </h1>

          <div className="flex gap-10 text-[#6b6258] font-medium">

            <Link href="/" className="hover:text-[#A67C52]">
              Home
            </Link>

            <Link href="/profile" className="hover:text-[#A67C52]">
              Profile
            </Link>

            <Link href="/portofolio" className="hover:text-[#A67C52]">
              Portofolio
            </Link>

          </div>

        </nav>

        {/* Header */}
        <div className="bg-[#D8B48A] py-10 text-center">

          <p className="uppercase tracking-[5px] text-white font-semibold">
            PROJECT 01
          </p>

          <h1 className="text-5xl font-black text-[#403A34] mt-3">
            D'DONATZ
          </h1>

        </div>

        {/* Content */}
        <section className="grid lg:grid-cols-3 gap-8 p-10">

          {/* Left */}
          <div>

            <h2 className="text-3xl font-bold text-[#403A34]">
              About Project
            </h2>

            <div className="w-20 h-1 bg-[#D8B48A] rounded-full mt-5 mb-8"></div>

            <p className="text-[#6f675d] leading-8">
              D'DONATZ merupakan aplikasi mobile berbasis pre-order
              yang dirancang untuk memudahkan pelanggan melakukan
              pemesanan donat secara online sekaligus membantu UMKM
              dalam mengelola pesanan dengan lebih efektif.
            </p>

            <div className="mt-10">

              <h3 className="text-xl font-bold text-[#403A34]">
                Fitur Utama
              </h3>

              <ul className="mt-5 space-y-3 text-[#6f675d]">
                <li>✔ Login & Register</li>
                <li>✔ Daftar Produk</li>
                <li>✔ Pemesanan Pre-Order</li>
                <li>✔ Detail Produk</li>
                <li>✔ Riwayat Pesanan</li>
              </ul>

            </div>

          </div>

          {/* Tengah */}
          <div className="flex justify-center">

            <div className="w-full h-[420px] rounded-3xl border-2 border-dashed border-[#d8d2c9] bg-[#faf8f5] flex items-center justify-center">

              <div className="text-center"> </div>
          <Image
  src="/ddonatz.jpg"
  alt="D'DONATZ"
  width={6200}
  height={9300}
/>
</div>
</div>

          {/* Right */}
          <div>

            <h2 className="text-3xl font-bold text-[#403A34]">
             MANFAAT
            </h2>

            <div className="w-20 h-1 bg-[#6F8A7E] rounded-full mt-5 mb-8"></div>

            <div className="space-y-4">

              <div className="bg-[#654321] rounded-xl p-4 shadow">
                Sistem Pemesanan terpusat 
              </div>

              <div className="bg-[#654321] rounded-xl p-4 shadow">
                Informasi produk lengkap
              </div>

              <div className="bg-[#654321] rounded-xl p-4 shadow">
               Pengelolahan jadwal terproduksi 
              </div>

              <div className="bg-[#654321] rounded-xl p-4 shadow">
                dapat diskon
              </div>

            </div>

            <div className="mt-10">

              <Link
                href="/portofolio"
                className="block text-center bg-[#A67C52] hover:bg-[#8c6544] text-white py-4 rounded-full transition"
              >
                ← Kembali ke Portofolio
              </Link>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}