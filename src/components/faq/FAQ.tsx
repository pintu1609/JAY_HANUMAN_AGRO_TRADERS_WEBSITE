const faqs = [
  {
    q: "Do you supply onions in bulk?",
    a: "Yes, we specialize in bulk supply for wholesalers and exporters.",
  },
  {
    q: "What onion sizes do you provide?",
    a: "We provide small, medium, and large size red onions based on buyer requirements.",
  },
  {
    q: "Do you offer export-quality onions?",
    a: "Yes, our onions are properly cured, graded, and packed for export.",
  },
  {
    q: "What packaging options are available?",
    a: "Mesh bags (5kg, 10kg, 25kg) and jute bags are available.",
  },
  {
    q: "Where are you located?",
    a: "We are based in Patna, Bihar and serve buyers from this region.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white p-6 rounded-lg shadow cursor-pointer"
            >
              <summary className="font-semibold text-lg">
                {faq.q}
              </summary>
              <p className="mt-3 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
