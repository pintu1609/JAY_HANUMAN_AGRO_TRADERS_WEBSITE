
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jay Hanuman Agro Traders
          </h1>
          <p className="text-xl mb-4">
            Trusted Onion Traders & Exporters from Patna, Bihar
          </p>
          <p className="max-w-2xl text-gray-300 mb-8">
            We supply premium quality red onions sourced directly from reliable
            farmers in Bihar, serving wholesale and export markets with trust
            and consistency.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-green-600 px-6 py-3 rounded font-semibold"
            >
              Contact for Bulk Orders
            </a>
            <span className="border border-gray-400 px-6 py-3 rounded">
              📍 Patna, Bihar
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              Jay Hanuman Aagao Traders is a Patna-based onion trading firm
              involved in wholesale supply and export of red onions.
            </p>
            <p className="text-gray-700 mb-6">
              With strong sourcing from local farmers, we focus on quality
              grading, proper packaging, and timely delivery.
            </p>
            <a href="/about" className="text-green-700 font-semibold">
              Read More →
            </a>
          </div>
<div className="relative bg-gray-100 rounded-xl h-64 md:h-80 overflow-hidden shadow">
  <Image
    src="/img/onion2.jpg"
    alt="Premium quality red onions supplied by Jay Hanuman Aagao Traders, Patna"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
  />

  {/* Optional overlay label */}
  <div className="absolute bottom-3 left-3 bg-black/60 text-white text-sm px-3 py-1 rounded">
    Export Quality Red Onion
  </div>
</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Products</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-xl mb-2">Red Onion</h3>
              <ul className="text-gray-700 text-sm mb-4 space-y-1">
                <li>• Small / Medium / Large size</li>
                <li>• Export quality grading</li>
                <li>• Mesh & Jute packing</li>
                <li>• Patna (Bihar) origin</li>
              </ul>
              <a href="/products" className="text-green-700 font-semibold">
                View Details →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              "Direct farmer sourcing",
              "Strict quality checks",
              "Hygienic packaging",
              "Competitive bulk pricing",
              "Reliable logistics",
              "Trusted local trader",
            ].map((item) => (
              <div
                key={item}
                className="border p-6 rounded bg-white shadow-sm"
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-2 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Looking for a reliable onion supplier?
        </h2>
        <a
          href="/contact"
          className="bg-green-600 px-4 py-4 md:px-8 rounded font-semibold"
        >
          Contact Jay Hanuman Aagao Traders
        </a>
      </section>
    </main>
  );
}
