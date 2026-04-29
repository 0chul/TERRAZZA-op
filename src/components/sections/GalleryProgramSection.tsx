import { Button } from "../ui/Button";

// Initial mock data, will be replaced by Supabase data later
const MOCK_PROGRAMS = [
  {
    title: "1st Soft Opening Party",
    date: "Coming Soon",
    type: "Networking",
    imageUrl: "https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?q=80&w=2669&auto=format&fit=crop",
  },
  {
    title: "지중해풍 디저트 원데이 클래스",
    date: "TBD",
    type: "Class",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Local Artist Exhibition: Spring",
    date: "전시 준비중",
    type: "Exhibition",
    imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2666&auto=format&fit=crop",
  }
];

export function GalleryProgramSection() {
  return (
    <section id="gallery" className="py-24 bg-ivory border-b border-charcoal/10">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40 mb-6 block">Culture & Events</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Gallery & Program</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed text-lg">
              Terrazza Lounge에서 기획하고 진행하는 특별한 프로그램과 
              로컬 아티스트들의 작은 전시회를 만나보세요.
            </p>
          </div>
          <div className="shrink-0 hidden md:block">
            <Button variant="outline" className="border-charcoal/20">
              전체 프로그램 보기
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_PROGRAMS.map((program, idx) => (
             <div key={idx} className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-6 relative border border-charcoal/10">
                <img 
                  src={program.imageUrl} 
                  alt={program.title} 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-ivory/90 text-charcoal text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-full backdrop-blur-sm shadow-sm">
                    {program.type}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                {program.title}
              </h3>
              <p className="text-olive font-medium text-sm tracking-widest uppercase">
                {program.date}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="border-charcoal/20 w-full">
            전체 프로그램 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
