import Header from "../components/Header";
import Footer from "../components/Footer";
import CardGrid from "../components/CardGrid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Global Navigation Layout */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center px-6 py-16 md:py-24">
        
        {/* Hero Section Container (Bounded to exactly 815px width) */}
        <section className="w-full max-w-[815px] text-center flex flex-col items-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#070046] tracking-tight leading-tight mb-6">
            Master Your Tech Career with Hands-On Code Lessons
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Learn design, frontend, and backend development through practical projects built for absolute beginners and pros.
          </p>
          
          <button className="bg-[#070046] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl cursor-pointer">
            Browse Catalogue
          </button>
        </section>

         {/* Card Grid Section (Spans wider to easily fit your 4-column desktop layout) */}
        <section className="w-full max-w-7xl mx-auto px-4 mt-4 mb-12">
          <CardGrid />
        </section>


      </main>

      {/* Global Footer Layout */}
      <Footer />
    </div>
  );
}