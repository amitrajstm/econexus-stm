import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/auth/login", { email, password });
      login(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100 dark:bg-slate-950">
      <img
        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/75 via-slate-950/75 to-black/80 dark:from-slate-950/90 dark:via-slate-950/85 dark:to-black/90" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <form
          onSubmit={submit}
          className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white/95 p-10 text-gray-900 shadow-2xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90 dark:text-gray-100"
        >
          <h1 className="mb-2 text-center text-3xl font-bold">Welcome Back</h1>
          <p className="mb-6 text-center text-sm text-slate-600 dark:text-slate-300">
            Sign in to review and manage sustainability ideas.
          </p>

          {error && (
            <p className="mb-4 rounded-2xl bg-rose-500/85 p-3 text-center text-sm font-medium">
              {error}
            </p>
          )}

          <div className="mb-5">
            <label className="text-sm text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="relative mb-5">
            <label className="text-sm text-gray-700 dark:text-gray-200">Password</label>
            <input
              type={show ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 pr-20 text-gray-900 outline-none placeholder:text-gray-400 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500"
              placeholder="Enter your password"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-11 text-sm font-medium text-slate-500 transition hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>

          <div className="mb-6 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
              Remember me
            </label>

            <button type="button" className="text-emerald-200 hover:underline">
              Forgot Password?
            </button>
          </div>

          <button
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 p-3 font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400 disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          <p className="mt-6 text-center text-sm text-slate-200">
            Don&apos;t have an account?
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="ml-2 font-medium text-emerald-200 transition hover:underline"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
