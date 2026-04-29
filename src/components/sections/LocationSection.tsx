import { siteConfig } from "@/config/site";
import { MapPin, Phone, Clock, Info } from "lucide-react";

export function LocationSection() {
  return (
    <section id="location" className="py-24 bg-ivory border-b border-charcoal/10">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40 mb-6 block">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8">Location</h2>
            
            <div className="space-y-8 font-light text-charcoal/80">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-1" />
                <div>
                  <p className="font-serif text-xl text-charcoal mb-1">주소</p>
                  <p>{siteConfig.address}</p>
                  <p className="text-sm mt-2 text-charcoal/60">내방역 7번 출구 도보 5분 거리</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-terracotta shrink-0 mt-1" />
                <div>
                  <p className="font-serif text-xl text-charcoal mb-1">운영 시간</p>
                  <p>Cafe: {siteConfig.operatingHours.cafe}</p>
                  <p>Wine Lounge: {siteConfig.operatingHours.lounge}</p>
                  <p className="text-terracotta text-sm font-medium tracking-wide mt-2">{siteConfig.operatingHours.closed}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-terracotta shrink-0 mt-1" />
                <div>
                  <p className="font-serif text-xl text-charcoal mb-1">연락처</p>
                  <p>{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Info className="w-5 h-5 text-terracotta shrink-0 mt-1" />
                <div>
                  <p className="font-serif text-xl text-charcoal mb-1">주차 안내</p>
                  <p>건물 옆 지정 주차장 이용 가능 (최대 2대)</p>
                  <p className="text-sm mt-1 text-charcoal/60">만차 시 인근 공영주차장(방배제1동 공영주차장)을 이용해 주세요.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
               <a href={siteConfig.links.naver} target="_blank" rel="noopener noreferrer" className="border border-charcoal/20 px-8 py-3 rounded-xl text-sm font-medium hover:bg-charcoal hover:text-ivory transition-colors">
                 네이버지도 길찾기
               </a>
               <a href={siteConfig.links.kakao} target="_blank" rel="noopener noreferrer" className="border border-charcoal/20 px-8 py-3 rounded-xl text-sm font-medium hover:bg-charcoal hover:text-ivory transition-colors">
                 카카오맵 길찾기
               </a>
            </div>
          </div>

          <div className="w-full aspect-[4/5] bg-ivory-dark rounded-[32px] overflow-hidden relative border border-charcoal/10">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://www.openstreetmap.org/export/embed.html?bbox=126.98971748352052%2C37.4913809072611%2C126.99615478515626%2C37.495467362031174&amp;layer=mapnik&amp;marker=37.49342415174418%2C126.99293613433838" 
              className="grayscale hover:grayscale-0 transition-all duration-1000 opacity-80"
              title="Map Location"
            ></iframe>
            <div className="absolute top-6 right-6 bg-white border border-charcoal/10 text-[10px] font-bold tracking-widest px-4 py-2 text-charcoal rounded-full pointer-events-none shadow-sm">
              방배동 807-17
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
