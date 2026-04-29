export function SpaceGallerySection() {
  const images = [
    { 
      src: "https://images.unsplash.com/photo-1501339817309-1d418461cdb6?q=80&w=2670&auto=format&fit=crop", 
      alt: "Cafe interior", 
      className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" 
    },
    { 
      src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2575&auto=format&fit=crop", 
      alt: "Coffee", 
      className: "aspect-square" 
    },
    { 
      src: "https://images.unsplash.com/photo-1577247734288-4e86a76e737c?q=80&w=2670&auto=format&fit=crop", 
      alt: "Wine", 
      className: "aspect-square" 
    },
    { 
      src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2672&auto=format&fit=crop", 
      alt: "Lounge table", 
      className: "md:col-span-2 aspect-[2/1]" 
    },
  ];

  return (
    <section className="py-24 bg-ivory border-b border-charcoal/10">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40 mb-6 block">Space Preview</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Space & Mood</h2>
            <p className="text-charcoal/70 font-light leading-relaxed text-lg">
              낮에는 자연 채광이 가득한 테라스 카페로, 밤에는 은은한 조명의 프라이빗 라운지로 변모합니다.
              다양한 목적의 모임과 전시를 위해 설계된 특별한 공간을 둘러보세요.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-[32px] border border-charcoal/10 bg-ivory-dark group ${img.className}`}>
              <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors z-10 duration-700" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
