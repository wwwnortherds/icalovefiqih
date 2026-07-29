"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PortofolioPage() {
 const [liked, setLiked] = useState([false, false, false]);
const [disliked, setDisliked] = useState([false, false, false]);

const [likes, setLikes] = useState([15, 10, 8]);
const [dislikes, setDislikes] = useState([2, 1, 0]);

const [comments, setComments] = useState([4, 2, 5]);

const [newComment, setNewComment] = useState(["", "", ""]);

  return (
    <main className="min-h-screen bg-[#f7f4ef] relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#E6D5B8]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C7D9C1]/30 rounded-full blur-3xl"></div>

      {/* Sparkle */}
      <div className="absolute top-20 left-1/4 text-3xl text-[#d4b483] animate-pulse">
        ✦
      </div>

      <div className="absolute bottom-40 right-1/3 text-2xl text-[#d4b483] animate-pulse">
        ✧
      </div>

      <div className="relative w-fu ll max-w-7xl mx-auto mt-8 bg-[#fcfbf8]/90 backdrop-blur rounded-3xl shadow-2xl p-10">

        {/* Navbar */}
        <nav className="flex justify-between items-center border-b border-[#d8d2c9] pb-5">

          <h1 className="text-2xl font-bold tracking-[5px] text-[#5a5148]">
            PORTFOLIO
          </h1>

          <div className="flex gap-10 text-[#6b6258] font-medium">

            <Link href="/" className="hover:text-[#A67C52] transition">
              Home
            </Link>

            <Link href="/profile" className="hover:text-[#A67C52] transition">
              Profile
            </Link>

            <Link
              href="/portofolio"
              className="text-[#A67C52] font-semibold"
            >
              Portofolio
            </Link>

          </div>

        </nav>

        {/* Heading */}
        <section className="text-center mt-14">

          <p className="uppercase tracking-[6px] text-[#b9935a] font-semibold">
            Explore Our Journey
          </p>

          <h1 className="text-6xl font-black mt-3 text-[#403A34]">
            OUR PORTFOLIO
          </h1>

          <div className="w-28 h-1 bg-[#C6A87D] rounded-full mx-auto mt-7"></div>

          <p className="text-[#6f675d] text-lg leading-8 mt-8 max-w-3xl mx-auto">
            Portofolio ini berisi beberapa bidang yang kami pelajari serta
            pengalaman dalam mengembangkan website, mendesain antarmuka,
            dan bekerja sama menyelesaikan berbagai proyek selama proses
            pembelajaran.
          </p>

        </section>

        {/* Portfolio Cards */}
        <section className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Card 1 */}
<Link
            href="/portofolio/project-1"
            >
               <Image
    src="/ddonatz.jpg"
    alt="D'DONATZ"
    width={500}
    height={250}
    className="w-full h-48 object-cover rounded-t-3xl"
  />
              
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition">

            <p className="text-sm uppercase tracking-[4px] text-[#A67C52]">
              Project 01
            </p>

            <h2 className="text-3xl font-bold text-[#403A34] mt-4">
              De’ Donutz
            </h2>

            <div className="w-16 h-1 bg-[#C9A66B] rounded-full mt-5 mb-6"></div>

            <p className="text-[#6f675d] leading-8">
            De’ Donutz merupakan mobile pemesanan donat berbasis 
            pre-order yang dirancang untuk membantu UMKM dalam mengelola 
            pesanan secara lebih terorganisir.
            </p>

<div className="mt-6 flex items-center gap-3">
  <button
    onClick={(e) => {
      e.preventDefault();
      const data = [...liked];
      data[0] = !data[0];
      setLiked(data);
    }}
    className={`px-4 py-2 rounded-full font-medium transition ${
      liked[0]
        ? "bg-red-500 text-white"
        : "bg-gray-200 hover:bg-gray-300"
    }`}
  >
    {liked[0] ? "❤️" : "🤍"}
  </button>

  <span className="text-[#6f675d] font-medium">
    {liked[0] ? "Disukai" : "Sukai"}
  </span>
</div>
</div>            
          </Link>

          {/* Card 2 */}
          <Link
  href="/portofolio/project-2"
  className="block bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition"
>

 <Image
    src="/renova.jpg"
    alt="D'DONATZ"
    width={500}
    height={250}
    className="w-full h-48 object-cover rounded-t-3xl"
  />
  <p className="text-sm uppercase tracking-[4px] text-[#403A34]">
    Project 02
  </p>

  <h2 className="text-3xl font-bold text-[#403A34] mt-4">
    Renova
  </h2>

  <div className="w-16 h-1 bg-[#D8B48A] rounded-full mt-5 mb-6"></div>

  <p className="text-[#6f675d] leading-8">
    Sebuah aplikasi yang membantu pemilik bangunan merencanakan, 
              menjadwalkan, memantau, dan mendokumentasikan pemeliharaan bangunan berkala 
              secara efisien dalam satu perangkat.
  </p>
    <div className="mt-6 flex items-center gap-3">
  <button
    onClick={(e) => {
      e.preventDefault();
      const data = [...liked];
      data[1] = !data[1];
      setLiked(data);
    }}
    className={`px-4 py-2 rounded-full font-medium transition ${
      liked[1]
        ? "bg-red-500 text-white"
        : "bg-gray-200 hover:bg-gray-300"
    }`}
  >
    {liked[1] ? "❤️" : "🤍"}
  </button>

  <span className="text-[#6f675d] font-medium">
    {liked[1] ? "Disukai" : "Sukai"}
  </span>
</div>

</Link>
          {/* Card 3 */}
          <Link 
           href="/portofolio/project-3"
            >
               <Image
    src="/gosigap.jpg"
    alt="D'DONATZ"
    width={500}
    height={250}
    className="w-full h-48 object-cover rounded-t-3xl"
  />
              
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition">

            <p className="text-sm uppercase tracking-[4px] text-[#A67C52]">
              Project 03
            </p>

            <h2 className="text-3xl font-bold text-[#403A34] mt-4">
              GO.SIGAP
            </h2>

            <div className="w-16 h-1 bg-[#C9A66B] rounded-full mt-5 mb-6"></div>

            <p className="text-[#6f675d] leading-8">
             Sistem informasi menajemen logistik berbasis
              web untuk mendigitalisasi pencatatan
             stok obat dan vaksin di Puskesmas. 
            </p>

<div className="mt-6 flex items-center gap-3">
  <button
    onClick={(e) => {
      e.preventDefault();
      const data = [...liked];
      data[2] = !data[2];
      setLiked(data);
    }}
    className={`px-4 py-2 rounded-full font-medium transition ${
      liked[2]
        ? "bg-red-500 text-white"
        : "bg-gray-200 hover:bg-gray-300"
    }`}
  >
    {liked[2] ? "❤️" : "🤍"}
  </button>

  <span className="text-[#6f675d] font-medium">
    {liked[2] ? "Disukai" : "Sukai"}
  </span>
</div>            

          </div>
          </Link>

        </section>

        {/* Closing */}
        <section className="mt-20 bg-[#F4EBDD] rounded-3xl p-10 text-center shadow-lg">

          <p className="uppercase tracking-[4px] text-[#A67C52] font-semibold">
            Our Vision
          </p>

          <h2 className="text-4xl font-bold text-[#403A34] mt-4">
            Keep Learning, Keep Growing.
          </h2>

          <p className="text-[#6f675d] leading-8 mt-6 max-w-3xl mx-auto">
            Kami percaya bahwa setiap pengalaman merupakan langkah untuk
            berkembang. Melalui setiap proyek yang dikerjakan, kami terus
            belajar, meningkatkan kemampuan, dan menciptakan karya yang
            lebih baik di masa mendatang.
          </p>

        </section>

      </div>

    </main>
  );
}