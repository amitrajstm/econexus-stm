import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

const team = [
  {
    name: "Amit Kumar Raj",
    role: "Founder / CEO",
    desc: "Leading our mission to connect sustainability innovators with partners and capital.",
    image:
      "https://scontent.fixc4-5.fna.fbcdn.net/v/t39.30808-6/638346791_1225228093143322_3283679713834431266_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=LQgPllzinnQQ7kNvwEdkf8k&_nc_oc=Adp_Uy7j9dNnYuvQ1lnCKSva5LwH0jEk-02TfSk0B5ffXPPjW5wtdIIKVAnkQPemNU5uN-F4xiwLl5KCFpPBsX3M&_nc_zt=23&_nc_ht=scontent.fixc4-5.fna&_nc_gid=vtA4rqQdwlFZGioqJ505dw&oh=00_Af0f98e-cxBTcjQM8ZTaMy8_s4IvFF3MTWFE3FzgFC_H0Q&oe=69F0D6C2",
  },
  {
    name: "shubhendra chaturvedi",
    role: "Chief Technology Officer",
    desc: "Building AI-driven insights and seamless workflows for every innovation journey.",
    image:
      "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  },
  {
    name: "Anshu Kumar",
    role: "Sustainability Expert",
    desc: "Guiding impact-focused projects through every validation and funding milestone.",
    image:
      "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  },
];

export default function About() {
  return (
    <main className="relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <PageHero
        title="About Us"
        subtitle="Building a premium platform for climate innovation and funding."
        image="https://static.vecteezy.com/system/resources/thumbnails/007/950/584/small/concept-save-the-world-save-environment-the-world-is-in-the-grass-of-the-green-bokeh-background-photo.jpg"
      />

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">
              Mission & Vision
            </p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
              We accelerate the work that matters most.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-8">
              Our mission is to reduce friction for climate innovators by
              delivering intelligent evaluation, trusted partnerships, and
              actionable feedback at every stage.
            </p>
            <div className="space-y-6 rounded-[2rem] bg-slate-900/5 p-8 ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-slate-700/70">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Mission
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  Empower innovators to scale sustainable projects with speed,
                  transparency, and credible impact signals.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Vision
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  A connected climate-tech ecosystem where the best ideas reach
                  the right supporters faster.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Our story
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  Founded by climate and product experts, we built this platform
                  to remove gatekeepers and make meaningful innovation easier to
                  launch.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl dark:bg-slate-900"
          >
            <img
              src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=1000&q=80"
              alt="Team collaborating"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/80" />
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 dark:bg-slate-900 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">
            Meet our team
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            The people powering the platform.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400 leading-7">
            Our leadership blends climate expertise, product design, and
            engineering to create a premium experience for innovators.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="overflow-hidden rounded-[2rem] bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-950"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
                  {member.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-7">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
