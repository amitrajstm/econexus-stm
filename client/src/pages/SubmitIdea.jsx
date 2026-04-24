import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../auth/AuthContext";
import { isUser } from "../auth/roles";

export default function SubmitIdea() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const canSubmit = isUser(user);

  const [idea, setIdea] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/ideas", idea);

      navigate("/dashboard");
    } catch (err) {
      setError("Failed to submit idea");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100 dark:bg-slate-950">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2070"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-slate-950/75 to-black/85 dark:from-slate-950/90 dark:via-slate-950/85 dark:to-black/95" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <form
          onSubmit={submit}
          className="w-full max-w-2xl rounded-[2rem] border border-slate-200 bg-white/95 p-10 text-gray-900 shadow-2xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90 dark:text-gray-100"
        >
          <h1 className="mb-2 text-3xl font-bold">Submit Your Innovation</h1>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Share your sustainable idea and help build a greener future.
          </p>

          {error && (
            <p className="mb-4 rounded-2xl bg-rose-500/85 p-3 text-center text-sm font-medium">
              {error}
            </p>
          )}

          <Input
            label="Innovation Title"
            placeholder="Ex: AI Smart Irrigation System"
            onChange={(e) => setIdea({ ...idea, title: e.target.value })}
          />

          <div className="mb-5">
            <label className="text-sm text-gray-700 dark:text-gray-200">Detailed Description</label>

            <textarea
              required
              rows="4"
              onChange={(e) =>
                setIdea({ ...idea, description: e.target.value })
              }
              placeholder="Explain your innovation, its impact, and feasibility..."
              className="mt-2 w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500"
            />
          </div>

          <div className="mb-5">
            <label className="text-sm text-gray-700 dark:text-gray-200">Category</label>

            <select
              required
              value={idea.category}
              onChange={(e) => setIdea({ ...idea, category: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="" className="bg-slate-100 text-slate-900">
                Select Category
              </option>
              <option className="bg-slate-100 text-slate-900">
                Renewable Energy
              </option>
              <option className="bg-slate-100 text-slate-900">
                Waste Management
              </option>
              <option className="bg-slate-100 text-slate-900">
                Smart Agriculture
              </option>
              <option className="bg-slate-100 text-slate-900">
                Green Transportation
              </option>
              <option className="bg-slate-100 text-slate-900">
                Climate Tech
              </option>
            </select>
          </div>

          <button
            disabled={loading}
            className="mt-6 w-full rounded-2xl bg-emerald-500 p-3 font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400 disabled:opacity-60"
          >
            {loading ? "Submitting..." : canSubmit ? "Submit Innovation" : "User access required"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Input({ label, placeholder, onChange }) {
  return (
    <div className="mb-5">
      <label className="text-sm text-gray-700 dark:text-gray-200">{label}</label>
      <input
        required
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500"
      />
    </div>
  );
}
