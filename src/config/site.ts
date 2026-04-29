export const siteConfig = {
  name: "Terrazza Lounge",
  description: "방배동의 낮과 밤을 담은 카페 라운지 & 복합 문화 공간",
  phone: "010-0000-0000",
  email: "contact@terrazza.kr",
  address: "서울 서초구 방배동 807-17",
  links: {
    spacecloud: import.meta.env.VITE_SPACECLOUD_URL || "https://spacecloud.kr",
    hourplace: import.meta.env.VITE_HOURPLACE_URL || "https://hourplace.co.kr",
    naver: "https://map.naver.com",
    kakao: "https://map.kakao.com",
    google: "https://maps.app.goo.gl/search/서울+서초구+방배동+807-17",
  },
  operatingHours: {
    cafe: "11:00 - 18:00 (Tue-Sun)",
    lounge: "18:00 - 24:00 (Tue-Sun)",
    closed: "Monday Closed",
  },
  features: [
    "약 60평대 단독 라운지",
    "지중해풍 프리미엄 인테리어",
    "갤러리 와이어 및 전광 설치",
    "최대 50인 수용 가능 (스탠딩)",
  ],
};
