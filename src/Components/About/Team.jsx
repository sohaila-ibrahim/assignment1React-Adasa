/** @format */
import { FaXTwitter, FaGithub, FaLinkedinIn, FaCheck } from "react-icons/fa6";

const members = [
  { name: "سالم أحمد", role: "مصور محترف", img: "photo-1507003211169-0a1dd7228f2d" },
  { name: "محمد علي", role: "مصور بورتريه", img: "photo-1500648767791-00dcc994a43e" },
  { name: "إبراهيم حسن", role: "مصور طبيعة", img: "photo-1472099645785-5658abf4ff4e" },
  { name: "داود خالد", role: "مدرب تصوير", img: "photo-1560250097-0b93528c311a" },
  { name: "ليث محمود", role: "فنان بصري", img: "photo-1506794778202-cad84cf45f1d" },
  { name: "جمال عبدالله", role: "مصور ومراجع تقني", img: "photo-1463453091185-61582044d556" },
  { name: "خالد الفيصل", role: "مصور فلكي", img: "photo-1519085360753-af0119f7cbe7" },
  { name: "نادر سعيد", role: "مصور شوارع", img: "photo-1566492031773-4f4e44671857" },
  { name: "هاني الشمري", role: "مصور طعام", img: "photo-1552058544-f2b08422138a" },
  { name: "عمر الراشد", role: "مصور حياة برية", img: "photo-1507591064344-4c6ce005b128" },
  { name: "فارس العلي", role: "فنان فوتوغرافي", img: "photo-1570295999919-56ceb5ecca61" },
  { name: "سامي الحربي", role: "خبير تعديل صور", img: "photo-1568602471122-7832951cc4c5" },
  { name: "رامي الخطيب", role: "مصور ماكرو", img: "photo-1548372290-8d01b6c8e78c" },
  { name: "باسم المصري", role: "مصور فني", img: "photo-1583195764036-6dc248ac07d9" },
  { name: "منصور الزهراني", role: "مصور زفاف", img: "photo-1564564321837-a57b7070ac4f" },
  { name: "فيصل الدوسري", role: "مصور جوي", img: "photo-1618077360395-f3068be8e001" },
  { name: "لؤي الصالح", role: "مصور تجاري", img: "photo-1633332755192-727a05c4013d" },
  { name: "طارق النعيمي", role: "مصور معماري", img: "photo-1607990281513-2c110a25bd8c" },
  { name: "أحمد الشهري", role: "مصور رياضي", img: "photo-1580518324671-c2f0833a3af3" },
  { name: "ماجد القحطاني", role: "مصور استوديو", img: "photo-1543610892-0b1f7e6d8ac1" },
  { name: "ياسر العتيبي", role: "مصور رحالة", img: "photo-1590086782957-93c06ef21604" },
  { name: "دحام الحسيني", role: "فنان بصري", img: "photo-1504257432389-52343af06ae3" },
  { name: "نايف المطيري", role: "مصور مواليد", img: "photo-1492562080023-ab3db95bfbce" },
  { name: "عبدالله الغامدي", role: "مصور عقارات", img: "photo-1539571696357-5a69c17a67c6" },
  { name: "كريم الفهد", role: "خبير تقني", img: "photo-1534030347209-467a5b0ad3e6" },
  { name: "سلطان الراجحي", role: "فنان تصوير", img: "photo-1557862921-37829c790f19" },
  { name: "فهد السبيعي", role: "مراجع معدات", img: "photo-1531891437562-4301cf35b7e4" },
  { name: "راشد الجاسر", role: "فنان بصري", img: "photo-1545167622-3a6ac756afa4" },
];

const socials = [
  { icon: FaXTwitter, label: "X", hover: "hover:bg-orange-500" },
  { icon: FaGithub, label: "GitHub", hover: "hover:bg-neutral-700" },
  { icon: FaLinkedinIn, label: "LinkedIn", hover: "hover:bg-blue-600" },
];

export default function Team() {
  return (
    <section className='py-20 bg-[#0a0a0a]'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#302218] border border-[#8d3b01]'>
            <span className='w-1.5 h-1.5 rounded-full bg-orange-500' />
            <span className='text-sm font-medium text-neutral-300'>فريقنا</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>تعرف على كتابنا</h2>
          <p className='text-lg text-neutral-400 max-w-2xl mx-auto'>
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {members.map(({ name, role, img }) => (
            <div
              key={name}
              className='group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300'>
              <div className='relative inline-block mb-4'>
                <img
                  src={`https://images.unsplash.com/${img}?w=100&h=100&fit=crop&crop=face`}
                  alt={name}
                  loading='lazy'
                  className='w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all'
                />
                <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center'>
                  <FaCheck className='w-3 h-3 text-white' />
                </div>
              </div>

              <h3 className='font-bold text-white text-lg'>{name}</h3>
              <p className='text-orange-500 text-sm font-medium mb-4'>{role}</p>

              <div className='flex justify-center gap-3'>
                {socials.map(({ icon: Icon, label, hover }) => (
                  <a
                    key={label}
                    href='#'
                    aria-label={label}
                    className={`w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:text-white transition-colors ${hover}`}>
                    <Icon className='w-4 h-4' />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}