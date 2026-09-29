import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaHouse,
  FaChevronLeft,
  FaCamera,
  FaListUl,
  FaRegCalendar,
  FaRegClock,
  FaTags,
  FaShareNodes,
  FaLink,
  FaCheck,
  FaWhatsapp,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import { data } from "./Data/Data.jsx";

const parseContent = (content = "") => {
  const [intro, ...rest] = content.split("\n\n## ");
  const sections = rest.map((block) => {
    const [title, ...body] = block.split("\n\n");
    return { title: title.replace("## ", "").trim(), text: body.join("\n\n") };
  });
  return { intro, sections };
};

const formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("ar-EG", { day: "numeric", month: "long" });
};

const BlogDetails = () => {
  const [copied, setCopied] = useState(false);
  const { slug } = useParams();

  const targetBlog = data.posts.find((blog) => blog.slug === slug);

  if (!targetBlog) {
    return <h1 className="text-white text-center py-20">المقال غير موجود</h1>;
  }

  const { intro, sections } = parseContent(targetBlog.content);
  const publishDate = formatDate(targetBlog.date);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(targetBlog.title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const shareLinks = [
    { icon: FaXTwitter, label: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
    { icon: FaLinkedinIn, label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { icon: FaWhatsapp, label: "WhatsApp", href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}` },
  ];

  const relatedPosts = data.posts
    .filter((p) => p.category === targetBlog.category && p.id !== targetBlog.id)
    .slice(0, 3);

  return (
    <article className="bg-[#0a0a0a] min-h-screen">
      <div className="relative h-[60vh] min-h-125 overflow-hidden">
        <img
          alt={targetBlog.title}
          className="absolute inset-0 w-full h-full object-cover"
          src={targetBlog.image}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent" />

        <div className="absolute top-8 right-8 left-8">
          <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
            <Link className="text-white/70 hover:text-white transition-colors" to="/" aria-label="الرئيسية">
              <FaHouse />
            </Link>
            <FaChevronLeft className="text-white/30 text-xs" />
            <Link className="text-white/70 hover:text-white transition-colors" to="/blog">
              المدونة
            </Link>
            <FaChevronLeft className="text-white/30 text-xs" />
            <span className="text-orange-400 font-medium truncate max-w-25">
              {targetBlog.category}
            </span>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full">
                {targetBlog.category}
              </span>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <FaRegCalendar />
                  {publishDate}
                </span>
                <span className="flex items-center gap-2">
                  <FaRegClock />
                  {targetBlog.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
              {targetBlog.title}
            </h1>

            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
              <img
                alt={targetBlog.author.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                src={targetBlog.author.avatar}
              />
              <div>
                <p className="font-bold text-white">{targetBlog.author.name}</p>
                <p className="text-sm text-white/60">{targetBlog.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <div className="order-2 lg:order-1">
            <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
              <p className="text-lg text-neutral-200 leading-relaxed italic">
                "{targetBlog.excerpt}"
              </p>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-6 text-lg">{intro}</p>

            <div>
              {sections.map((section, i) => (
                <div key={i}>
                  <h2
                    id={`section-${i}`}
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <FaCamera className="text-orange-500" />
                    </span>
                    {section.title}
                  </h2>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                  <FaTags className="text-orange-500" />
                </span>
                <h3 className="font-bold text-white">الوسوم</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {targetBlog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                  <FaShareNodes className="text-orange-500" />
                </span>
                <h3 className="font-bold text-white">شارك المقال</h3>
              </div>
              <div className="flex items-center gap-2">
                {shareLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 flex items-center justify-center bg-[#1a1a1a] text-neutral-400 rounded-xl border border-[#262626] hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <Icon />
                  </a>
                ))}
                <button
                  type="button"
                  onClick={copyLink}
                  aria-label="نسخ الرابط"
                  className="w-11 h-11 flex items-center justify-center bg-[#1a1a1a] text-neutral-400 rounded-xl border border-[#262626] hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                >
                  {copied ? <FaCheck /> : <FaLink />}
                </button>
              </div>
            </div>

            <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  alt={targetBlog.author.name}
                  className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                  src={targetBlog.author.avatar}
                />
                <div className="text-center sm:text-right flex-1">
                  <span className="text-xs text-orange-500 font-semibold">كاتب المقال</span>
                  <h3 className="text-xl font-bold text-white mt-1">{targetBlog.author.name}</h3>
                  <p className="text-neutral-500 text-sm mb-3">{targetBlog.author.role}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {targetBlog.author.bio ?? "مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-6">
              {sections.length > 0 && (
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <FaListUl className="text-orange-500" />
                    </span>
                    <h3 className="font-bold text-white">محتويات المقال</h3>
                  </div>
                  <nav className="space-y-2">
                    {sections.map((section, i) => (
                      <a
                        key={i}
                        href={`#section-${i}`}
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300"
                      >
                        <span className="w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="text-sm">{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                    <FaRegClock className="text-orange-500 text-xl mb-2 mx-auto" />
                    <p className="text-white font-bold">{targetBlog.readTime}</p>
                    <p className="text-neutral-500 text-xs">وقت القراءة</p>
                  </div>
                  <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                    <FaRegCalendar className="text-orange-500 text-xl mb-2 mx-auto" />
                    <p className="text-white font-bold text-sm">{publishDate}</p>
                    <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                  </div>
                </div>
              </div>

              <div className="p-6 text-center bg-linear-to-br from-orange-500/15 to-yellow-500/5 rounded-2xl border border-orange-500/30">
                <span className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-orange-500/20 rounded-2xl">
                  <FaEnvelope className="text-orange-500 text-2xl" />
                </span>
                <h3 className="font-bold text-white text-lg mb-2">لا تفوّت جديدنا</h3>
                <p className="text-neutral-400 text-sm mb-5">اشترك للحصول على أحدث المقالات</p>
                <Link
                  to="/blog"
                  className="block w-full py-3.5 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
                >
                  تصفح المزيد
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#262626]">
            <h2 className="text-2xl font-bold text-white mb-10">مقالات قد تعجبك</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  className="group bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={p.image}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      {p.title}
                    </h3>
                    <span className="text-sm text-neutral-500">{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogDetails;