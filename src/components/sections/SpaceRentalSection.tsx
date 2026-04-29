import { SPACE_RENTAL_TYPES } from "@/data/mockData";
import { Button } from "../ui/Button";

export function SpaceRentalSection() {
  return (
    <section id="rental" className="py-24 bg-ivory-dark border-b border-charcoal/10">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40 mb-6 block">Private Booking</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Space Rental</h2>
            <p className="text-charcoal/70 font-light leading-relaxed text-lg">
              약 60평 규모의 지중해풍 단독 스튜디오. 카페 공간을 축소 및 슬라이딩 도어로 분리하여 
              프라이빗한 전체 대관부터 부분 대관까지 목적에 맞게 공간을 재구성할 수 있습니다.
            </p>
          </div>
          <a href="#reservation" className="shrink-0">
            <Button variant="outline">대관 문의하기</Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SPACE_RENTAL_TYPES.map((type, idx) => (
            <div 
              key={idx} 
              className="group bg-ivory flex items-center justify-between p-6 md:p-8 rounded-2xl border border-charcoal/10 hover:bg-white transition-colors cursor-pointer"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-bold mb-2">
                  {type.recommendation}
                </p>
                <h3 className="font-serif text-2xl text-charcoal mb-2 group-hover:text-olive transition-colors">
                  {type.title}
                </h3>
                <p className="text-sm text-charcoal/60 font-light leading-relaxed max-w-sm">
                  {type.description}
                </p>
              </div>
              <div className="text-xl font-bold text-charcoal/30 group-hover:text-charcoal transition-colors ml-4">
                →
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-olive text-ivory/90 border border-charcoal/10 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ivory/50 mb-4">Rental Guide</p>
          <h3 className="font-serif text-3xl text-ivory mb-4">대관 관련 안내</h3>
          <p className="font-light max-w-3xl mx-auto mb-8 text-lg">
            정확한 인원과 목적, 대관 시간에 따라 맞춤 견적을 드립니다. 전면 유리창, 벽면 와이어(갤러리용), 빔프로젝터, 마이크, 음향 시설이 완비되어 있습니다. 
          </p>
          <a href="#reservation"><Button className="bg-terracotta text-white hover:bg-terracotta-dark border-none">견적 요청하기</Button></a>
        </div>
      </div>
    </section>
  );
}
