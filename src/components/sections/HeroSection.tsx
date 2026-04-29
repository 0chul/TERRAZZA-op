import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section id="home" className="relative border-b border-charcoal/10 bg-ivory flex flex-col md:flex-row">
      {/* Left: Typography & Actions */}
      <div className="w-full md:w-3/5 border-r border-charcoal/10 flex flex-col justify-center p-8 md:p-16 lg:p-24 space-y-8 z-10 bg-ivory">
        <div className="space-y-6">
          <span className="inline-block px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase border border-charcoal/10 rounded-full text-charcoal/50">
            Grand Opening Soon
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[0.9] font-serif tracking-tighter text-charcoal">
            Coffee, Wine <br className="hidden md:block" />
            <span className="italic text-olive">& Space</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-charcoal/80">
            방배동의 낮과 밤을 담은 카페 라운지. <br className="md:hidden" />
            지중해 감성의 프라이빗 공간에서 특별한 무드를 즐겨보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a href="#rental" className="w-full sm:w-auto">
              <Button size="lg" className="w-full px-8 py-4">
                공간대여 알아보기
              </Button>
            </a>
            <a href="#reservation" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full px-8 py-4">
                예약 문의하기
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Right: Background Image */}
      <div className="w-full md:w-2/5 min-h-[400px] md:min-h-[600px] bg-ivory-dark relative overflow-hidden flex items-center justify-center p-8 md:p-12">
        <div 
          className="absolute inset-4 md:inset-8 lg:inset-12 bg-cover bg-center bg-no-repeat rounded-2xl"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop')" }}
        >
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-olive)_0%,_transparent_100%)] rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
