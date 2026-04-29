import { MENU_DATA } from "@/data/mockData";

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-ivory-dark border-b border-charcoal/10">
      <div className="container mx-auto px-4 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/40 mb-6 block">Our Selections</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Cafe & Wine</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto font-light text-lg">
            엄선된 스페셜티 커피 원두와 매일 직접 구워내는 디저트, 
            그리고 긴 밤의 여운을 더해줄 셀렉티드 와인 리스트.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {MENU_DATA.map((group, idx) => (
            <div key={idx} className="border-t border-charcoal/10 pt-8">
              <h3 className="font-serif text-2xl text-terracotta mb-8">
                {group.category}
              </h3>
              <ul className="space-y-8">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="group flex flex-col">
                    <div className="flex justify-between items-end mb-1">
                      <h4 className="font-medium text-charcoal text-lg group-hover:text-olive transition-colors leading-none">
                        {item.name}
                      </h4>
                      <span className="text-charcoal font-medium text-sm">
                        {(item.price).toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full border-b border-dotted border-charcoal/30 my-2"></div>
                    <p className="text-sm text-charcoal/60 font-light mt-1">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
