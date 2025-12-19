const images = [
//   "/images/onion1.jpg",
  "/img/onion2.jpg",
  "/img/onion3.jpg",
  "/img/onion4.webp",
//   "/images/onion5.jpg",
//   "/images/onion6.jpg",
];

export default function OnionGallery() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Onion Product Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow hover:scale-105 transition"
            >
              <img
                src={src}
                alt="Red Onion"
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
