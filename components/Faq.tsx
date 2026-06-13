import { FAQ_ITEMS } from "../constants/faq";

export default function Faq() {
  return (
    <section
      className="container mx-auto max-w-4xl my-20 px-4 md:px-0"
      aria-labelledby="faq-heading"
    >
      <div className="text-center mb-12">
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
        >
          Frequently asked questions
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Quick answers about self-hosting your authentication and authorization.
        </p>
      </div>

      <dl className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white shadow-sm">
        {FAQ_ITEMS.map((item) => (
          <div key={item.question} className="p-6">
            <dt className="text-lg font-semibold text-gray-900">
              {item.question}
            </dt>
            <dd className="mt-2 text-gray-600 leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
