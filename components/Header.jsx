export default function Header() {
  return (
    <header className="bg-[#070046] text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-md">
      {/* Left Column: Brand */}
      <div className="text-xl font-bold tracking-tight">
        Laurus Code School
      </div>

      {/* Right Column: Actions */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-sm font-medium hover:text-gray-300 transition-colors cursor-pointer">
          Login
        </button>
        <button className="bg-white text-[#070046] px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
          Register
        </button>
      </div>
    </header>
  );
}