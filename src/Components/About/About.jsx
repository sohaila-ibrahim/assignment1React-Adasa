/** @format */
import { FaUsers, FaNewspaper, FaPenNib, FaBookOpen, FaBullseye, FaBolt, FaHandshake, FaArrowsRotate } from "react-icons/fa6";
import Team from "./Team.jsx";
import Contact from "./Contact.jsx";
import Footer from "../Footer/Footer.jsx";

const stats = [
  { icon: FaUsers, value: "+2مليون", label: "قارئ شهرياً" },
  { icon: FaNewspaper, value: "+500", label: "مقالة منشورة" },
  { icon: FaPenNib, value: "+50", label: "كاتب خبير" },
  { icon: FaBookOpen, value: "+15", label: "تصنيف" },
];

const values = [
  {
    icon: FaBullseye,
    title: "الجودة أولاً",
    text: "محتوى مدروس ومكتوب بخبرة",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: FaBolt,
    title: "تركيز عملي",
    text: "أمثلة واقعية يمكنك تطبيقها اليوم",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    icon: FaHandshake,
    title: "المجتمع",
    text: "تعلم مع آلاف المصورين",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: FaArrowsRotate,
    title: "دائماً محدث",
    text: "أحدث الاتجاهات وأفضل الممارسات",
    gradient: "from-orange-600 to-orange-400",
  },
];

export default function About() {
  return (
    <div>
      <section className='relative py-24 overflow-hidden'>
        <div className='absolute inset-0 bg-[#0a0a0a]' />
        <div className='absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]' />
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]' />
          <div className='absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]' />
        </div>

        <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#302218] border border-[#8d3b01]'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75' />
              <span className='relative inline-flex rounded-full h-2 w-2 bg-orange-500' />
            </span>
            <span className='text-sm font-medium text-neutral-300'>من نحن</span>
          </div>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
            مهمتنا هي{" "}
            <span className='bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent'>
              الإعلام والإلهام
            </span>
          </h1>

          <p className='text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12'>
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون
            بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto'>
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className='flex flex-col items-center gap-2 p-6 rounded-3xl border border-neutral-800 bg-[#141414]/80 hover:scale-105 hover:border-[#2a2a2a] transition-transform duration-300'>
                <Icon className='text-2xl text-orange-500' />
                <p className='text-2xl md:text-3xl font-bold bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                  {value}
                </p>
                <p className='text-neutral-500 text-sm'>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 bg-[#111111] border-y border-[#262626]'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3'>
              <span className='w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full' />
              قيمنا
              <span className='w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full' />
            </h2>
            <p className='text-lg text-neutral-400 max-w-2xl mx-auto'>المبادئ التي توجه كل ما نقوم بإنشائه</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map(({ icon: Icon, title, text, gradient }) => (
              <div
                key={title}
                className='group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden'>
                <div
                  className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className='relative flex flex-col items-center'>
                  <Icon className='text-4xl text-orange-500 mb-4' />
                  <h3 className='text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors'>{title}</h3>
                  <p className='text-neutral-400 text-sm'>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team/>

<Contact/>
<Footer/>
    </div>
  );
}