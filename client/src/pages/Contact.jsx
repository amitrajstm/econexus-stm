import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

export default function Contact() {
  return (
    <main className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <PageHero
        title="Contact us"
        subtitle="Let's build the next generation of climate impact together."
        image="https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg"
      />

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-[2rem] bg-white p-10 shadow-2xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700/60">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Send us a message
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
                Our team is ready to help with product questions, partnership
                inquiries, or demo requests.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 space-y-6"
              >
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                  <textarea
                    rows="5"
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-3xl bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-500"
                >
                  Send message
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-4 rounded-[2rem] bg-slate-900 p-10 text-white shadow-2xl">
              <h2 className="text-2xl font-bold">Contact information</h2>
              <p className="text-slate-300 leading-7">
                For questions about the product, support requests, or
                partnerships, our team is ready to help.
              </p>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-950">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">
                  Email
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                  rajamitstm@gmail.com
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">
                  Phone
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                  +91 70911 32000
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">
                  Office
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                  
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
