
export default function ProductsPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Supplying high-quality red onions for wholesale and export markets.
          </p>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Red Onion – Export & Wholesale Supply
            </h2>
            <p className="mb-4 text-gray-700">
              Our red onions are sourced from trusted farmers in Bihar and are
              known for their natural color, strong shelf life, and suitability
              for long-distance transport.
            </p>
            <p className="mb-4 text-gray-700">
              Each batch undergoes careful curing and grading to ensure uniform
              size, reduced moisture, and minimal wastage during transit.
            </p>
            <p className="text-gray-700">
              We cater to domestic wholesalers as well as exporters seeking
              consistent quality and volume.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Product Specifications</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Sizes: Small, Medium, Large</li>
              <li>• Color: Natural red</li>
              <li>• Moisture controlled</li>
              <li>• Free from rot & damage</li>
              <li>• Export-grade quality</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PACKAGING */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Packaging & Supply Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="font-bold mb-2">Mesh Bag Packing</h4>
              <p className="text-gray-700 text-sm">
                5kg, 10kg, 25kg, and 50kg mesh bags suitable for export and ventilation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="font-bold mb-2">Jute Bag Packing</h4>
              <p className="text-gray-700 text-sm">
                Strong jute bags ideal for domestic bulk transportation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="font-bold mb-2">Bulk Supply</h4>
              <p className="text-gray-700 text-sm">
                Large volume supply available based on buyer requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
