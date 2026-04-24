import { motion } from "framer-motion";

export default function PageHero({ image, title, subtitle }) {
  return (
    <section
      className="relative h-[60vh] overflow-hidden bg-slate-950"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-90" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">
            {title}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {subtitle}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
