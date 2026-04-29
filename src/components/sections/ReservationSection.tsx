import { siteConfig } from "@/config/site";
import { supabase } from "@/lib/supabase";
import React, { useState } from "react";
import { Button } from "../ui/Button";

export function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    desired_date: "",
    desired_time: "",
    event_type: "",
    guest_count: "",
    message: "",
    privacy_agreed: false,
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const { error } = await supabase
        .from('rental_inquiries')
        .insert([
          { 
            ...formData,
            guest_count: formData.guest_count ? parseInt(formData.guest_count) : null
          }
        ]);

      if (error) throw error;
      
      setStatus("success");
      setFormData({
        name: "", phone: "", email: "", desired_date: "", desired_time: "",
        event_type: "", guest_count: "", message: "", privacy_agreed: false
      });
      alert("성공적으로 접수되었습니다. 개별 연락 드리겠습니다.");
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert("접수 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      if (status !== "success") setStatus("idle");
    }
  };

  return (
    <section id="reservation" className="py-24 bg-ivory">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">Reservation</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
            공간 대관 및 예약 문의를 남겨주시면, 일정을 확인하여 신속하게 답변해 드립니다. <br className="hidden md:block" />
            외부 예약 플랫폼을 통해서도 빠른 예약이 가능합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Reservation Links */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-serif text-2xl text-charcoal mb-6 border-b border-charcoal/10 pb-4">
              외부 예약 플랫폼
            </h3>
            <p className="text-sm font-light text-charcoal/80 mb-8">
              원하시는 플랫폼의 외부 링크를 통해 실시간 예약 가능 일정과 상세 가격표를 확인하실 수 있습니다.
            </p>
            
            <div className="space-y-4">
              <a href={siteConfig.links.spacecloud} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full justify-between group hover:border-olive">
                  <span>SpaceCloud에서 예약하기</span>
                  <span className="text-olive group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </a>
              <a href={siteConfig.links.hourplace} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full justify-between group hover:border-olive">
                  <span>Hourplace에서 예약하기</span>
                  <span className="text-olive group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </a>
            </div>

            <div className="mt-12 bg-ivory-dark p-6 rounded-md border border-charcoal/5">
              <h4 className="font-serif text-lg text-charcoal mb-2">Direct Contact</h4>
              <p className="text-sm text-charcoal/70 mb-4 font-light">플랫폼 이용이 어려우시거나, 대규모 행사/장기 대관 문의는 언제든 직접 연락주세요.</p>
              <p className="font-medium text-terracotta">{siteConfig.phone}</p>
              <p className="font-medium text-charcoal text-sm">{siteConfig.email}</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 bg-ivory border border-charcoal/10 rounded-[32px] p-8 md:p-12">
            <h3 className="font-serif text-3xl text-charcoal mb-8 border-b border-charcoal/10 pb-4">
              직접 문의하기
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-charcoal/50 mb-2">이름 (담당자명) *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-white border border-charcoal/10 px-4 py-3 rounded-xl focus:outline-none focus:border-charcoal transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-charcoal/50 mb-2">연락처 *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-white border border-charcoal/10 px-4 py-3 rounded-xl focus:outline-none focus:border-charcoal transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-charcoal/50 mb-2">이메일</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-charcoal/10 px-4 py-3 rounded-xl focus:outline-none focus:border-charcoal transition-colors" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-charcoal/50 mb-2">희망 날짜</label>
                  <input type="date" name="desired_date" value={formData.desired_date} onChange={handleChange} className="w-full bg-white border border-charcoal/10 px-4 py-3 rounded-xl focus:outline-none focus:border-charcoal transition-colors text-charcoal font-light" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-charcoal/50 mb-2">희망 시간</label>
                  <input type="text" name="desired_time" placeholder="예: 14:00 - 18:00" value={formData.desired_time} onChange={handleChange} className="w-full bg-white border border-charcoal/10 px-4 py-3 rounded-xl focus:outline-none focus:border-charcoal transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-charcoal/50 mb-2">이용 목적 (유형)</label>
                  <select name="event_type" value={formData.event_type} onChange={handleChange} className="w-full bg-white border border-charcoal/10 px-4 py-3 rounded-xl focus:outline-none focus:border-charcoal transition-colors">
                    <option value="">선택해주세요</option>
                    <option value="세미나/워크숍">기업 세미나 / 워크숍</option>
                    <option value="네트워킹파티">네트워킹 파티</option>
                    <option value="원데이클래스">원데이 클래스</option>
                    <option value="전시/팝업">전시 / 팝업</option>
                    <option value="촬영">방송 / 상업 촬영</option>
                    <option value="기타">기타 프라이빗 모임</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-charcoal/50 mb-2">예상 인원 (명)</label>
                  <input type="number" name="guest_count" value={formData.guest_count} onChange={handleChange} min="1" className="w-full bg-white border border-charcoal/10 px-4 py-3 rounded-xl focus:outline-none focus:border-charcoal transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-charcoal/50 mb-2">문의 내용</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="전달하실 내용이나 특별한 요청사항이 있다면 적어주세요." className="w-full bg-white border border-charcoal/10 px-4 py-3 rounded-xl focus:outline-none focus:border-charcoal transition-colors resize-none"></textarea>
              </div>

              <div className="flex items-start mt-4">
                <input 
                  type="checkbox" 
                  name="privacy_agreed" 
                  id="privacy" 
                  required 
                  checked={formData.privacy_agreed}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-olive border-charcoal/10 rounded focus:ring-charcoal accent-charcoal" 
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-charcoal/70 font-light">
                  [필수] 예약 및 상담을 위한 개인정보 수집 및 이용에 동의합니다.
                </label>
              </div>

              <Button type="submit" size="lg" variant="solid" className="w-full md:w-auto mt-6 px-12 py-6 text-sm" disabled={status === "loading"}>
                {status === "loading" ? "제출 중..." : "문의 접수하기"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
