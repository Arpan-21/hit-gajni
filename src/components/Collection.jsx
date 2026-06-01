import React, { useRef, useState } from "react";

const productDatabase = [
  {
    id: 1,
    category: "Sanjay",
    title: "Memory Fragment",
    tag: "Wanted",
    price: "₹1,899",
    colors: "Black, Crimson",
    material: "Premium Cotton",
    desc: "Inspired by Sanjay Singhania's revenge mission.",
    img: "gajni/gaj-1.jpg"
  },

  {
    id: 2,
    category: "Kalpana",
    title: "Kalpana Forever",
    tag: "Limited",
    price: "₹2,299",
    colors: "White, Red",
    material: "Soft Knit",
    desc: "Inspired by Kalpana and the emotional side of Ghajini.",
    img: "gajni/gaj-3.jpg"
  },

  {
    id: 3,
    category: "Memory Loss",
    title: "15 Minute Mode",
    tag: "Best Seller",
    price: "₹1,499",
    colors: "Grey, Black",
    material: "Stretch Fabric",
    desc: "Built around the iconic memory-loss storyline.",
    img: "gajni/gaj-4.png"
  },

  {
    id: 4,
    category: "Revenge",
    title: "Tattoo Mission",
    tag: "Collector",
    price: "₹2,799",
    colors: "Red, Black",
    material: "Heavyweight Cotton",
    desc: "Inspired by the tattoo clues and revenge journey.",
    img: "gajni/gaj-2.jpg"
  }
];

const categories = [
  "All",
  ...new Set(productDatabase.map((p) => p.category))
];

export default function Collection({
  activeModalProduct,
  setActiveModalProduct,
  onInquireClick
}) {
  const trackRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? productDatabase
      : productDatabase.filter((p) => p.category === activeCategory);

  const slidePrev = () => {
    if (trackRef.current) {
      const cardWidth =
        trackRef.current.firstElementChild?.clientWidth + 24 || 300;

      trackRef.current.scrollBy({
        left: -cardWidth * 2,
        behavior: "smooth"
      });
    }
  };

  const slideNext = () => {
    if (trackRef.current) {
      const cardWidth =
        trackRef.current.firstElementChild?.clientWidth + 24 || 300;

      trackRef.current.scrollBy({
        left: cardWidth * 2,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="collection"
      className="py-24 overflow-hidden relative bg-gradient-to-b from-black via-red-950 to-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,0,0,0.25) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <span className="text-xs font-bold tracking-[0.35em] text-red-500 uppercase">
              Ghajini Collection
            </span>

            <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-wider text-white uppercase">
              Ghajini Archives
            </h2>
          </div>

          <div className="flex gap-3 hidden md:flex">
            <button
              onClick={slidePrev}
              className="p-3 bg-black border border-red-900 rounded-xl text-red-400 hover:text-white hover:border-red-500 transition-all"
            >
              ←
            </button>

            <button
              onClick={slideNext}
              className="p-3 bg-black border border-red-900 rounded-xl text-red-400 hover:text-white hover:border-red-500 transition-all"
            >
              →
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-3 pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);

                if (trackRef.current) {
                  trackRef.current.scrollLeft = 0;
                }
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
                  : "bg-black/50 text-gray-400 border border-red-950 hover:border-red-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8"
        >
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="
                w-[80vw]
                sm:w-[45vw]
                lg:w-[calc(25%-18px)]
                flex-none
                bg-black/80
                border
                border-red-900/40
                hover:border-red-500
                hover:shadow-2xl
                hover:shadow-red-900/30
                backdrop-blur-sm
                rounded-2xl
                p-4
                transition-all
                duration-500
                group
              "
            >
              <div
                onClick={() => setActiveModalProduct(p)}
                className="relative overflow-hidden rounded-xl h-[320px] cursor-pointer"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <button
                    className="
                      px-5 py-3
                      bg-red-600
                      hover:bg-red-500
                      text-white
                      font-bold
                      rounded-xl
                      shadow-lg
                      shadow-red-900/40
                    "
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 bg-red-950/50 border border-red-900/50 px-2 py-1 rounded">
                    {p.tag}
                  </span>

                  <span className="text-xs text-gray-500 uppercase">
                    {p.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white uppercase">
                  {p.title}
                </h3>

                <p className="mt-2 text-red-400 font-bold">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalProduct && (
        <div
          onClick={() => setActiveModalProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black border border-red-900 max-w-lg w-full rounded-3xl p-8"
          >
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-6 right-6 text-gray-400"
            >
              ✕
            </button>

            <div className="flex gap-2">
              <span className="text-red-400 bg-red-950 px-3 py-1 rounded text-xs uppercase">
                {activeModalProduct.tag}
              </span>

              <span className="text-gray-400 bg-gray-900 px-3 py-1 rounded text-xs uppercase">
                {activeModalProduct.category}
              </span>
            </div>

            <h3 className="text-3xl font-black text-white mt-4 uppercase">
              {activeModalProduct.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {activeModalProduct.desc}
            </p>

            <div className="mt-6 space-y-3 border-t border-red-950 pt-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Price</span>
                <span className="text-white">
                  {activeModalProduct.price}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Colors</span>
                <span className="text-white">
                  {activeModalProduct.colors}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Material</span>
                <span className="text-white">
                  {activeModalProduct.material}
                </span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                className="flex-1 py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold uppercase"
              >
                WhatsApp
              </button>

              <button
                onClick={() => {
                  setActiveModalProduct(null);

                  onInquireClick(
                    activeModalProduct.title,
                    activeModalProduct.colors
                  );
                }}
                className="flex-1 py-4 border border-red-900 text-gray-300 hover:bg-red-950 rounded-xl font-bold uppercase"
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}