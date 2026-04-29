export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-ivory border-b border-charcoal/10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-stretch gap-16">
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-ivory-dark border border-charcoal/10 rounded-2xl">
            <div className="relative aspect-[4/5] w-full max-w-sm rounded-[200px] overflow-hidden border border-charcoal/10">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop" 
                alt="Terrazza Lounge Interior" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40 mb-6">About Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              A Moment of Pause <br />
              <span className="text-terracotta italic">in the City</span>
            </h2>
            
            <div className="space-y-6 text-charcoal/80 leading-relaxed font-light text-lg">
              <p>
                방배동 골목에 자리 잡은 Terrazza Lounge는 2년 동안 한시적으로 문을 여는 특별한 공간입니다. 
                따뜻한 아이보리와 자연의 올리브 그린, 테라코타 컬러가 어우러진 지중해풍 인테리어 속에서 
                도심 속 온전한 쉼을 경험할 수 있습니다.
              </p>
              <p>
                낮에는 스페셜티 커피와 수제 디저트가 있는 조용한 <strong className="font-medium text-charcoal">카페</strong>로,
                밤에는 선별된 와인과 스몰 플레이팅을 즐기는 아늑한 <strong className="font-medium text-charcoal">와인 라운지</strong>로 변모합니다.
              </p>
              <p>
                단순한 F&B 라운지를 넘어, 갤러리 전시, 프라이빗 네트워킹, 원데이 클래스 등 다채로운 활동이 
                이루어지는 <strong className="font-medium text-charcoal">복합 문화 공간</strong>으로 여러분을 초대합니다. 
                잠시 머물다 가는 곳이지만, 이곳에서의 기억은 오랫동안 머물 것입니다.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 border-y border-charcoal/10">
              <div className="p-8 border-r border-charcoal/10 hover:bg-ivory-dark transition-colors">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta mb-2">Day</p>
                <p className="font-serif text-2xl text-charcoal">Cafe & Baking</p>
              </div>
              <div className="p-8 hover:bg-ivory-dark transition-colors">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-olive mb-2">Night</p>
                <p className="font-serif text-2xl text-charcoal">Wine & Lounge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
