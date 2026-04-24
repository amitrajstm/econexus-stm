import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { AnimatePresence, motion } from "framer-motion";

const heroImages = [
  "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1400&q=80",
];

const features = [
  {
    title: "AI-driven evaluation",
    desc: "Instant scoring that surfaces the most promising sustainability ideas.",
    icon: "🤖",
  },
  {
    title: "Verified institutions",
    desc: "Trusted partners that accelerate funding and collaboration.",
    icon: "🏢",
  },
  {
    title: "Fast approvals",
    desc: "Streamlined workflows help innovators move from concept to launch.",
    icon: "⚡",
  },
  {
    title: "Transparent scoring",
    desc: "Clear, actionable feedback for every submission.",
    icon: "📊",
  },
];

const impactMetrics = [
  {
    label: "CO₂ reduced",
    value: 1200,
    suffix: "t",
    progress: 78,
    icon: "🌿",
  },
  {
    label: "Projects funded",
    value: 320,
    suffix: "+",
    progress: 85,
    icon: "🚀",
  },
  {
    label: "Active innovators",
    value: 860,
    suffix: "+",
    progress: 92,
    icon: "🌎",
  },
];

const timelineSteps = [
  {
    title: "Submit your idea",
    desc: "Share your sustainability concept in seconds with our guided form.",
    icon: "1",
  },
  {
    title: "AI evaluation",
    desc: "Our models analyze impact, feasibility, and growth potential.",
    icon: "2",
  },
  {
    title: "Institution match",
    desc: "We connect your proposal to verified partners and funders.",
    icon: "3",
  },
  {
    title: "Launch with confidence",
    desc: "Track approvals, revise feedback, and begin implementation.",
    icon: "4",
  },
];

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Solar Startup Founder",
    text: "The AI scoring and institutional match made our pilot program happen in just eight weeks.",
    avatar: "AS",
  },
  {
    name: "Emily Chen",
    role: "Climate Researcher",
    text: "The transparent dashboard gave our team confidence and speed through every review.",
    avatar: "EC",
  },
  {
    name: "Rahul Verma",
    role: "GreenTech Entrepreneur",
    text: "This platform turned an early idea into a funded project with measurable impact.",
    avatar: "RV",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [heroIndex, setHeroIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 overflow-x-hidden">
      <HeroSection user={user} navigate={navigate} heroIndex={heroIndex} />
      <WhyChooseUs />
      <OurImpact />
      <AboutSection />
      <HowItWorks />
      <Testimonials
        testimonialIndex={testimonialIndex}
        setTestimonialIndex={setTestimonialIndex}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />
      <CTASection user={user} navigate={navigate} />
    </div>
  );
}

function HeroSection({ user, navigate, heroIndex }) {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroIndex}
            src={heroImages[heroIndex]}
            alt="Sustainability concept background"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0.2, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/50 to-emerald-900/30" />
        <div className="pointer-events-none absolute -left-24 top-16 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-1/2 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-12 lg:px-10">
        <motion.div
          className="max-w-3xl space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-200/15 px-4 py-2 text-sm font-semibold text-emerald-100 ring-1 ring-emerald-100/20">
            <span className="text-emerald-300">✨</span> Built for climate
            leaders
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Powering sustainable innovation with AI, funding, and verified
            partner workflows.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Submit your green idea, get fast AI evaluations, and collaborate
            with institutions that help turn impact into reality.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition duration-300 hover:bg-emerald-300"
              onClick={() => navigate(user ? "/submit" : "/register")}
            >
              {user ? "Submit your idea" : "Get started"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-3 text-base font-semibold text-white transition duration-300 hover:border-white hover:bg-white/15"
              onClick={() => navigate(user ? "/dashboard" : "/login")}
            >
              Explore dashboard
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap gap-4 text-sm text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="rounded-3xl bg-white/10 px-4 py-3 backdrop-blur-xl ring-1 ring-white/10">
            10k+ ideas reviewed
          </div>
          <div className="rounded-3xl bg-white/10 px-4 py-3 backdrop-blur-xl ring-1 ring-white/10">
            850+ innovators onboarded
          </div>
          <div className="rounded-3xl bg-white/10 px-4 py-3 backdrop-blur-xl ring-1 ring-white/10">
            92% approval guidance satisfaction
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-8 flex justify-center"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/50 px-4 py-2 text-sm text-slate-200 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          Scroll to discover impact
        </div>
      </motion.div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="space-y-10 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
          Why choose us
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          Built for innovators, investors, and climate leaders.
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          We combine AI insight, trusted partnerships, and fast approvals so
          your sustainability work can scale.
        </p>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700/70 dark:bg-slate-800"
            whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 0.25 : -0.25 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 text-2xl dark:bg-emerald-900/30 dark:text-emerald-200">
              {feature.icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-slate-100">
              {feature.title}
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function OurImpact() {
  return (
    <section className="bg-white dark:bg-slate-900 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
          Our impact
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          Real outcomes for climate-tech innovation.
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          From measurable CO₂ reduction to funded projects, our platform helps
          ideas gain traction quickly.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {impactMetrics.map((metric) => (
          <ImpactStat key={metric.label} metric={metric} />
        ))}
      </div>
    </section>
  );
}

function ImpactStat({ metric }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(metric.value / 60);
    const interval = setInterval(() => {
      current += increment;
      if (current >= metric.value) {
        setCount(metric.value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [metric.value]);

  return (
    <motion.div
      className="rounded-[2rem] border border-slate-200/80 bg-emerald-50/70 p-8 shadow-sm dark:border-slate-700/70 dark:bg-slate-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white text-2xl shadow-sm dark:bg-slate-950 dark:text-slate-100">
        {metric.icon}
      </div>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">
          {count}
        </span>
        <span className="text-xl text-slate-700 dark:text-slate-300">
          {metric.suffix}
        </span>
      </div>
      <p className="mt-3 text-slate-700 dark:text-slate-300">{metric.label}</p>
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{ width: `${metric.progress}%` }}
        />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        {metric.progress}% of our annual progress target
      </p>
    </motion.div>
  );
}

function AboutSection() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
            About us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            We help climate innovators move from idea to impact.
          </h2>
          <p className="text-slate-600 leading-8 dark:text-slate-300">
            Our mission is to simplify sustainability innovation by combining AI
            evaluation, trusted institution connections, and transparent
            guidance.
          </p>

          <div className="space-y-4 rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Mission</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Empower innovators to create measurable climate impact with the
                right tools, feedback, and funding pathways.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Vision</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                A connected ecosystem where the best sustainability ideas gain
                momentum and scale faster than ever.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Our story</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Founded by climate and product experts, we designed this
                platform to reduce friction from discovery to deployment.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-emerald-50 shadow-2xl dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
              alt="Team collaborating on sustainability platform"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-950/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-emerald-50 dark:bg-slate-950 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
          How it works
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          A clear step-by-step journey for every innovator.
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          From submission to launch, our timeline keeps every project
          transparent and on track.
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl">
        <div className="hidden md:absolute md:left-5 md:top-10 md:h-[calc(100%-4rem)] md:w-px md:bg-emerald-200" />
        <div className="space-y-8">
          {timelineSteps.map((step, index) => (
            <TimelineStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineStep({ step, index }) {
  return (
    <motion.div
      className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl md:pl-16 dark:border-slate-700/70 dark:bg-slate-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className="absolute left-0 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-base font-bold text-white shadow-xl md:-left-7">
        {step.icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
      <p className="mt-3 text-slate-600">{step.desc}</p>
    </motion.div>
  );
}

function Testimonials({
  testimonialIndex,
  setTestimonialIndex,
  isPaused,
  setIsPaused,
}) {
  const activeTestimonial = testimonials[testimonialIndex];

  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Innovators who accelerated progress with our platform.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() =>
                setTestimonialIndex(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-emerald-500/20"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() =>
                setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-emerald-500/20"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute -right-20 top-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 h-24 w-24 rounded-full bg-cyan-300/10 blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-400 text-lg font-bold text-slate-950 shadow-lg shadow-emerald-400/20">
                  {activeTestimonial.avatar}
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    {activeTestimonial.name}
                  </p>
                  <p className="text-sm text-slate-300">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-slate-900/95 p-8 shadow-inner shadow-slate-950/20">
                <div className="mb-4 text-4xl leading-none text-emerald-400">
                  “
                </div>
                <p className="text-lg leading-8 text-slate-100">
                  {activeTestimonial.text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CTASection({ user, navigate }) {
  return (
    <section className="relative px-6 py-24 lg:px-10">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-emerald-600 via-cyan-500 to-slate-900 px-8 py-16 text-white shadow-[0_30px_100px_rgba(16,185,129,0.18)]">
        <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute right-8 top-10 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
            Ready to launch?
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Take your climate innovation from concept to funded reality.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-100/90">
            Join a community of founders, researchers, and institutions focused
            on building meaningful environmental impact.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="mt-10 inline-flex items-center justify-center rounded-3xl bg-white px-10 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-slate-950/20 transition duration-300 hover:bg-slate-100"
            onClick={() => navigate(user ? "/submit" : "/register")}
          >
            {user ? "Submit your idea" : "Start your journey"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
