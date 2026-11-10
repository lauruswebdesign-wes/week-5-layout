export default function Footer() {
  return (
    <footer className="bg-[#070046] text-white py-8 px-6 md:px-12 mt-auto text-center border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
        <div>
          &copy; {new Date().getFullYear()} Laurus Code School. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}