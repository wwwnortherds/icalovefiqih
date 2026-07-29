import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#E6D5B8]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C7D9C1]/30 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-7xl mx-auto mt-8 bg-[#fcfbf8]/90 backdrop-blur rounded-3xl shadow-2xl p-10">

        {/* Navbar */}
        <nav className="flex justify-between items-center border-b border-[#d8d2c9] pb-5">

          <h1 className="text-2xl font-bold tracking-[5px] text-[#5a5148]">
            PROFILE
          </h1>

          <div className="flex gap-10 text-[#6b6258] font-medium">

            <Link href="/" className="hover:text-[#A67C52]">
              Home
            </Link>

            <Link href="/profile" className="text-[#A67C52] font-bold">
              Profile
            </Link>

            <Link href="/portofolio" className="hover:text-[#A67C52]">
              Portofolio
            </Link>

          </div>

        </nav>

        {/* Judul */}
        <section className="text-center mt-12">

          <p className="uppercase tracking-[6px] text-[#b9935a] font-semibold">
            Meet Our Team
          </p>

          <h1 className="text-6xl font-black text-[#403A34] mt-3">
            OUR PROFILE
          </h1>

          <div className="w-28 h-1 bg-[#C6A87D] rounded-full mx-auto mt-6"></div>

          <p className="text-[#6f675d] text-lg mt-6 max-w-3xl mx-auto leading-8">
            Kenali lebih dekat setiap anggota tim kami. Setiap individu
            memiliki kemampuan, pengalaman, dan minat yang berbeda sehingga
            dapat saling melengkapi dalam menghasilkan karya terbaik.
          </p>

        </section>

        {/* Card Profile */}
        <section className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition duration-300">

            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#D8B48A] shadow-lg">
              <Image
                src="/nur.jpg"
                alt="Nur Faizah"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#403A34]">
              Nur Faizah
            </h2>

            <p className="text-[#A67C52] font-medium mt-2">
              Front-End Developer
            </p>

            <p className="text-[#6f675d] mt-5 leading-7">
              Menyukai pengembangan antarmuka website yang modern,
              responsif, dan memberikan pengalaman pengguna yang nyaman.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition duration-300">

            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#D8B48A] shadow-lg">
             <Image
              src="/nasya.jpg"
              alt="Nasya Aulia"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#403A34]">
              Nasya Aulia
            </h2>

            <p className="text-[#A67C52] font-medium mt-2">
              UI / UX Designer
            </p>

            <p className="text-[#6f675d] mt-5 leading-7">
              Berfokus pada desain antarmuka yang sederhana,
              menarik, dan mudah digunakan oleh pengguna.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition duration-300">

            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#C9A66B] shadow-lg">
              <Image
              src="/raini.jpg"
              alt="Raini Davina"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#403A34]">
              Raini Davina
            </h2>

            <p className="text-[#A67C52] font-medium mt-2">
              Back-End Developer
            </p>

            <p className="text-[#6f675d] mt-5 leading-7">
              Memiliki minat dalam pengembangan sistem,
              pengelolaan database, serta membangun aplikasi yang efisien.
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}