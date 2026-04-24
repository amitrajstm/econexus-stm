import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const newUser = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      await api.post("/auth/register", newUser);

      navigate("/login");
    } catch (err) {
      setError("Registration failed");
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

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/75 via-slate-950/75 to-black/80 dark:from-slate-950/90 dark:via-slate-950/85 dark:to-black/90" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <form
          onSubmit={submit}
          className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white/95 p-10 text-gray-900 shadow-2xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90 dark:text-gray-100"
        >
          <h1 className="mb-2 text-center text-3xl font-bold">
            Create Account
          </h1>
          <p className="mb-6 text-center text-sm text-slate-600 dark:text-slate-300">
            Join the platform and start submitting climate-focused ideas.
          </p>

          {error && (
            <p className="mb-4 rounded-2xl bg-rose-500/85 p-3 text-center text-sm font-medium">
              {error}
            </p>
          )}

          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <div className="relative">
            <Input
              label="Password"
              type={show ? "text" : "password"}
              placeholder="Create password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-11 text-sm font-medium text-slate-500 transition hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          />

          <button
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 p-3 font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400 disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                Creating Account...
              </>
            ) : (
              "Register"
            )}
          </button>

          <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
            Already have an account?
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="ml-2 font-medium text-emerald-200 transition hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className="mb-5">
      <label className="text-sm text-gray-700 dark:text-gray-200">{label}</label>
      <input
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500"
      />
    </div>
  );
}
