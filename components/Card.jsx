export default function Card({ title, category, difficulty }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col justify-between text-center transition-shadow min-h-[250px] w-full max-w-[275px] mx-auto border border-gray-100">
      {/* Centered Bold Title */}
      <h3 className="text-md font-bold text-gray-900 leading-snug mb-4">
        {title}
      </h3>

      {/* Side-by-Side Metadata Container */}
      <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-100">
        {/* Category Block */}
        <div className="text-left">
          <span className="block text-xs font-light text-gray-400 uppercase tracking-wider">
            Category:
          </span>
          <span className="block text-sm font-bold text-[#070046] capitalize mt-0.5">
            {category}
          </span>
        </div>

        {/* Difficulty Block */}
        <div className="text-right">
          <span className="block text-xs font-light text-gray-400 uppercase tracking-wider">
            Difficulty:
          </span>
          <span className="block text-sm font-bold text-emerald-600 capitalize mt-0.5">
            {difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}