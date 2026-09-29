/** @format */

import { useState } from "react";
import Footer from "../Footer/Footer.jsx";
import Post from "./Component/Post.jsx";
import { data } from "./Data/Data.jsx";

export const Blog = () => {
  const [selectCategories, setSelectCategories] = useState(null);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");

  const filterPost = data.posts.filter((blog) => {
    const matchCategory = selectCategories ? blog.category === selectCategories : true;
    const matchSearch = search.trim() ? blog.title?.toLowerCase().includes(search.trim().toLowerCase()) : true;
    return matchCategory && matchSearch;
  });

  const pillBase = "rounded-full px-4 py-3 text-sm font-medium border transition-all duration-200 cursor-pointer whitespace-nowrap";
  const pillActive = "text-white border-transparent bg-linear-to-r from-orange-600 to-orange-500 shadow-lg shadow-orange-500/20";
  const pillIdle = "text-neutral-300 bg-[#171717] border-neutral-800 hover:border-orange-500/50 hover:text-white";

  return (
    <div className='bg-[#0a0a0a] min-h-screen'>
      <div className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-[#0a0a0a]' />
        <div className='absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]' />
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl' />
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl' />
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#302218] border border-[#8d3b01] text-orange-500 text-sm'>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
              />
            </svg>
            <span>مدونتنا</span>
            <span className='w-1.5 h-1.5 rounded-full bg-orange-500' />
          </div>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
            استكشف{" "}
            <span className='bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent'>مقالاتنا</span>
          </h1>
          <p className='text-xl text-neutral-400 max-w-2xl mx-auto'>
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>

      <div className='border-y border-neutral-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:items-start gap-6'>
          <div className='relative w-full md:w-60 lg:w-64 xl:w-80 shrink-0'>
            <svg
              className='absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-neutral-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='ابحث في المقالات...'
              className='w-full bg-[#141414] border border-neutral-800 rounded-2xl py-4 pr-12 pl-4 text-white placeholder:text-neutral-500 outline-none focus:border-orange-500/60 transition-colors'
            />
          </div>

          <div className='flex flex-wrap lg:flex-nowrap items-center gap-3 flex-1 min-w-0'>
            <button
              onClick={() => setSelectCategories(null)}
              className={`${pillBase} ${selectCategories === null ? pillActive : pillIdle}`}>
              جميع المقالات
            </button>
            {data.categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectCategories(cat.name)}
                className={`${pillBase} ${selectCategories === cat.name ? pillActive : pillIdle}`}>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between my-8'>
          <p className='text-neutral-400'>
            عرض <span className='text-white font-bold'>{filterPost.length}</span> مقالات
          </p>

          <div className='flex items-center gap-1 p-1 rounded-xl bg-[#141414] border border-neutral-800'>
            <button
              onClick={() => setView("grid")}
              aria-label='Grid view'
              className={`p-2.5 rounded-lg cursor-pointer transition-colors ${view === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 5h6v6H4V5zm10 0h6v6h-6V5zM4 15h6v6H4v-6zm10 0h6v6h-6v-6z' />
              </svg>
            </button>
            <button
              onClick={() => setView("list")}
              aria-label='List view'
              className={`p-2.5 rounded-lg cursor-pointer transition-colors ${view === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>

        <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "grid grid-cols-1 gap-6"}>
          {filterPost.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>

        {filterPost.length === 0 && (
          <p className='text-center text-neutral-500 py-20'>مفيش مقالات مطابقة للبحث</p>
        )}
      </div>

      <Footer />
    </div>
  );
};