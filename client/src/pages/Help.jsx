import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";

const faqs = [
  {
    question: "How do I submit an innovation?",
    answer:
      "Navigate to the Submit Idea page, fill in the details of your sustainability concept, and submit it for AI evaluation and partner review.",
  },
  {
    question: "What happens after evaluation?",
    answer:
      "Your idea receives a transparent score, then our network shares it with institutions that match your goals and impact profile.",
  },
  {
    question: "Can I update my submission later?",
    answer:
      "Yes. You can update your proposal at any time and resubmit it for a refreshed evaluation.",
  },
  {
    question: "How do I track project status?",
    answer:
      "Visit your dashboard to review approvals, pending actions, and message feedback from partners.",
  },
];

export default function Help() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <PageHero
        title="Help Center"
        subtitle="Find answers to your questions about submissions, accounts, and dashboard workflow."
        image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {item.question}
                  </span>
                  <span className="text-2xl text-emerald-600">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="border-t border-slate-200/80 px-6 py-5 text-slate-600 dark:border-slate-700 dark:text-slate-300"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <p className="leading-7">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
