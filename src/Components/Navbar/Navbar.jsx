import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import logo from "../../assets/Images/logo.png";

const links = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/blog", label: "المدونة" },
  { to: "/about", label: "من نحن" },
];

const desktopLink = ({ isActive }) =>
  `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
    isActive
      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
      : "text-neutral-400 hover:text-white hover:bg-linear-to-r hover:from-orange-500 hover:to-orange-600"
  }`;

const mobileLink = ({ isActive }) =>
  `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
    isActive
      ? "bg-orange-500/10 text-orange-500 border-orange-500/30"
      : "text-neutral-400 border-transparent hover:bg-[#1a1a1a] hover:text-white"
  }`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link className="flex items-center gap-3 group" to="/" onClick={() => setOpen(false)}>
            <div className="relative w-12 h-12 rounded-full overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img alt="Photography Logo" className="w-full h-full object-cover" src={logo} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                عدسة
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              {links.map(({ to, label, end }) => (
                <NavLink key={to} to={to} end={end} className={desktopLink}>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              aria-label="Search"
              className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
              <Search />
            </button>
            <Link
              className="px-9 py-4 rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white hover:-translate-y-1 hover:shadow-lg"
              to="/blog">
              ابدأ القراءة
            </Link>
          </div>

          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 pb-4" : "max-h-0"
          }`}>
          <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
            <div className="flex flex-col space-y-1">
              {links.map(({ to, label, end }) => (
                <NavLink key={to} to={to} end={end} className={mobileLink} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              ))}
              <Link
                className="px-5 py-2.5 rounded-full text-sm font-medium text-center mt-2 bg-linear-to-r from-orange-500 to-orange-600 text-white"
                to="/blog"
                onClick={() => setOpen(false)}>
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};