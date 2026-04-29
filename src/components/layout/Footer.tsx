import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 border-t border-charcoal/10 text-[11px] bg-ivory text-charcoal">
      <div className="p-6 border-b md:border-b-0 md:border-r border-charcoal/10 flex flex-col justify-center">
        <p className="opacity-40 uppercase tracking-widest mb-1 font-bold">Location</p>
        <p>{siteConfig.address}</p>
      </div>
      <div className="p-6 border-b md:border-b-0 md:border-r border-charcoal/10 flex flex-col justify-center">
        <p className="opacity-40 uppercase tracking-widest mb-1 font-bold">Reservation</p>
        <p className="flex gap-2">
          <a href={siteConfig.links.spacecloud} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">SpaceCloud</a> / 
          <a href={siteConfig.links.hourplace} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Hourplace</a> / 
          <a href={siteConfig.links.naver} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Naver</a>
        </p>
      </div>
      <div className="p-6 border-b md:border-b-0 md:border-r border-charcoal/10 flex flex-col justify-center">
        <p className="opacity-40 uppercase tracking-widest mb-1 font-bold">Contact</p>
        <p>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-terracotta">{siteConfig.email}</a>
        </p>
      </div>
      <div className="p-6 flex flex-col md:items-end justify-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center font-bold hover:bg-charcoal/5 transition-colors"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
