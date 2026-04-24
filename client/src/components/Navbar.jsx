import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { isAdmin, isUser } from "../auth/roles";

export default function Navbar({ toggleTheme }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const userIsAdmin = isAdmin(user);
  const userIsStandard = isUser(user);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Help", path: "/help" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-emerald-700 transition hover:text-emerald-600 dark:text-emerald-300"
          >
            🌱 EcoNexus
          </button>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="text-sm font-medium text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-300"
            >
              {item.label}
            </button>
          ))}

          {user && (
            <>
              <button
                onClick={() => navigate(userIsAdmin ? "/admin" : "/dashboard")}
                className="text-sm font-medium text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-300"
              >
                {userIsAdmin ? "Admin Dashboard" : "Dashboard"}
              </button>
              {userIsStandard && (
                <button
                  onClick={() => navigate("/submit")}
                  className="text-sm font-medium text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-300"
                >
                  Submit Idea
                </button>
              )}
            </>
          )}

          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-sm font-semibold text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-300"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="rounded-2xl bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-500"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={logout}
              className="rounded-2xl bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-red-600"
            >
              Logout
            </button>
          )}

          <button
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 transition hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
            title="Toggle theme"
          >
            <FaMoon className="dark:hidden" />
            <FaSun className="hidden dark:block" />
          </button>
        </div>

        <button
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200/70 bg-white/95 px-6 py-5 shadow-xl backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className="text-left text-sm font-medium text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-300"
              >
                {item.label}
              </button>
            ))}

            {user && (
              <>
                <button
                  onClick={() => {
                    navigate(userIsAdmin ? "/admin" : "/dashboard");
                    setOpen(false);
                  }}
                  className="text-left text-sm font-medium text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-300"
                >
                  {userIsAdmin ? "Admin Dashboard" : "Dashboard"}
                </button>
                {userIsStandard && (
                  <button
                    onClick={() => {
                      navigate("/submit");
                      setOpen(false);
                    }}
                    className="text-left text-sm font-medium text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-300"
                  >
                    Submit Idea
                  </button>
                )}
              </>
            )}

            {!user ? (
              <>
                <button
                  onClick={() => {
                    navigate("/login");
                    setOpen(false);
                  }}
                  className="text-left text-sm font-semibold text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-300"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate("/register");
                    setOpen(false);
                  }}
                  className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-500"
                >
                  Register
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="rounded-2xl bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-red-600"
              >
                Logout
              </button>
            )}

            <button
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <FaMoon className="dark:hidden" />
              <FaSun className="hidden dark:block" />
              <span className="dark:hidden">Dark mode</span>
              <span className="hidden dark:block">Light mode</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
