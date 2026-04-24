import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../services/api";
import { useAuth } from "../auth/AuthContext";
import { isAdmin } from "../auth/roles";

const statusStyles = {
  approved: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
  pending:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
  rejected: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
};

const statCards = [
  { key: "total", title: "Total ideas", icon: "Ideas" },
  { key: "approved", title: "Approved", icon: "Approved" },
  { key: "pending", title: "Pending", icon: "Pending" },
  { key: "rejected", title: "Rejected", icon: "Rejected" },
];

export default function Dashboard() {
  const [ideas, setIdeas] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const userIsAdmin = isAdmin(user);

  const fetchIdeas = async () => {
    try {
      const res = await api.get("/ideas");
      setIdeas(res.data);
      setFiltered(res.data);
    } catch (error) {
      console.error("Failed to load ideas", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  useEffect(() => {
    let temp = [...ideas];

    if (search) {
      temp = temp.filter((idea) =>
        idea.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (statusFilter !== "all") {
      temp = temp.filter((idea) => idea.status === statusFilter);
    }

    setFiltered(temp);
  }, [ideas, search, statusFilter]);

  const approveIdea = async (id) => {
    await api.patch(`/ideas/${id}/approve`);
    fetchIdeas();
  };

  const rejectIdea = async (id) => {
    await api.patch(`/ideas/${id}/reject`);
    fetchIdeas();
  };

  const voteIdea = async (id) => {
    await api.patch(`/ideas/${id}/vote`);
    fetchIdeas();
  };

  const stats = {
    total: ideas.length,
    approved: ideas.filter((idea) => idea.status === "approved").length,
    pending: ideas.filter((idea) => idea.status === "pending").length,
    rejected: ideas.filter((idea) => idea.status === "rejected").length,
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <section className="mb-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">
                {userIsAdmin ? "Admin dashboard" : "Dashboard"}
              </p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {userIsAdmin
                  ? "Innovation control center"
                  : "Innovation overview"}
              </h1>
              <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
                Welcome back{user?.name ? `, ${user.name}` : ""}.{" "}
                {userIsAdmin
                  ? "Review ideas, manage approvals, and keep the innovation pipeline moving."
                  : "Browse every idea in view-only mode and follow platform activity from one clean dashboard."}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {!userIsAdmin && (
                <button
                  type="button"
                  onClick={() => navigate("/submit")}
                  className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500"
                >
                  Submit Innovation
                </button>
              )}
              {/* <button
                type="button"
                onClick={logout}
                className="rounded-2xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-600"
              >
                Logout
              </button> */}
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card, index) => (
            <StatCard
              key={card.key}
              title={card.title}
              value={stats[card.key]}
              icon={card.icon}
              delay={index * 0.08}
            />
          ))}
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="grid gap-4 lg:grid-cols-[1fr_260px] lg:items-end lg:gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Search ideas
              </label>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search innovations..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-emerald-500/30"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Status filter
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-emerald-500/30"
              >
                <option value="all">All</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          {loading ? (
            <LoadingSkeleton />
          ) : filtered.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <p className="text-lg font-semibold">No ideas found</p>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((idea) => (
                <article
                  key={idea._id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:scale-[1.02] hover:shadow-xl dark:border-slate-700 dark:bg-gray-800"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                        {idea.category || "General"}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {idea.title}
                      </h3>
                    </div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                        statusStyles[idea.status] || statusStyles.pending
                      }`}
                    >
                      {idea.status}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <p>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        Author:
                      </span>{" "}
                      {user?.name || "N/A"}
                    </p>
                    <p className="line-clamp-4 text-slate-600 dark:text-slate-300">
                      {idea.description || "No description available."}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        Date:
                      </span>{" "}
                      {idea.createdAt
                        ? new Date(idea.createdAt).toLocaleDateString()
                        : "N/A"}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        AiScore:
                      </span>{" "}
                      {idea.aiScore !== undefined ? idea.aiScore : "N/A"}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {userIsAdmin && (
                      <>
                        <button
                          type="button"
                          onClick={() => approveIdea(idea._id)}
                          className="rounded-2xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-500"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          onClick={() => rejectIdea(idea._id)}
                          className="rounded-2xl bg-rose-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-rose-600"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {/* 
                    <span className="rounded-2xl bg-slate-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500">
                      AiScore :{" "}
                      {idea.aiScore !== undefined ? idea.aiScore : "N/A"}
                    </span> */}
                    <button
                      type="button"
                      onClick={() => voteIdea(idea._id)}
                      className="rounded-2xl bg-slate-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500"
                    >
                      Vote
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, value, icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="inline-flex rounded-3xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
        {icon}
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
        {title}
      </p>
      <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100">
        {value}
      </p>
    </motion.div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="mt-8 space-y-4">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="h-16 animate-pulse rounded-2xl bg-slate-100 dark:bg-slate-900"
        />
      ))}
    </div>
  );
}
