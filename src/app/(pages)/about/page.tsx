
export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Jay Hanuman Aagao Traders
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A trusted onion trading and export firm from Patna, Bihar, built on
            quality sourcing, honest trade, and long-term partnerships.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl font-bold mb-5">Who We Are</h2>
            <p className="mb-4 text-gray-700">
              Jay Hanuman Aagao Traders is a Patna-based agricultural trading firm
              specializing in wholesale and export supply of premium-quality
              red onions. We work directly with experienced farmers across Bihar
              to ensure consistent quality and dependable supply.
            </p>
            <p className="mb-4 text-gray-700">
              Our business focuses on understanding market demand, maintaining
              strict quality standards, and delivering produce that meets buyer
              expectations across domestic and export markets.
            </p>
            <p className="text-gray-700">
              We believe in transparent dealings, fair pricing, and building
              long-term relationships with traders, wholesalers, and exporters.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Why Buyers Trust Us</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Direct sourcing from verified farmers</li>
              <li>✔ Proper curing, sorting & grading</li>
              <li>✔ Export-ready packaging standards</li>
              <li>✔ Transparent pricing & communication</li>
              <li>✔ Consistent supply capability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Working Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Farmer Sourcing",
              "Quality Grading",
              "Safe Packaging",
              "Timely Dispatch",
            ].map((step, index) => (
              <div key={step} className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {index + 1}
                </div>
                <h4 className="font-semibold">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">📍 Based in Patna, Bihar</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Our operations are centered in Patna, Bihar. We primarily serve buyers
          looking for reliable onion suppliers from this region for wholesale
          and export requirements.
        </p>
      </section>

    </main>
  );
}
