# Terrazza Lounge Homepage (MVP)

방배동 카페 라운지 및 복합 문화공간 'Terrazza Lounge'의 공식 홈페이지 MVP입니다.
프리미엄 지중해풍 공간의 톤앤매너를 반영하여 모바일 최우선 반응형으로 제작되었습니다.

## 주요 기능 및 구조
- **기술 스택**: React 19, Vite, Tailwind CSS v4, Supabase
- **단일 페이지 디자인 (SPA)**: Home, About, Menu, Space Rental, Gallery, Reservation, Location이 스무스 스크롤 형태로 연결되며 사용자 이탈을 최소화합니다.
- **예약 문의 기능**: 홈페이지에서 남긴 폼은 Supabase `rental_inquiries` 테이블로 바로 전송됩니다.
- **모바일 대응**: 반응형 레이아웃 및 외부 캘린더/예약 플랫폼 연동을 위한 버튼을 제공합니다.
- **SEO 적용**: `react-helmet-async`를 이용한 메타태그와 LocalBusiness JSON-LD 스키마가 포함되어 있습니다.

## 배포 가이드 (GitHub Pages)

정적 호스팅인 GitHub Pages로 최소한의 비용으로 매우 간단하게 배포할 수 있습니다.

1. **GitHub 저장소 생성 및 푸시**
   - 코드를 GitHub 저장소 원격(remote)에 추가하고 푸시합니다.

2. **Vite 설정 (vite.config.ts 수정)**
   - 만약 저장소 이름이 `terrazza-lounge`라면, `vite.config.ts` 파일에 `base: '/terrazza-lounge/'` 속성을 추가해야 합니다. (개인 도메인을 연동할 경우 `base: '/'` 유지)

3. **배포 액션 설정 (또는 수동 배포)**
   - 가장 쉬운 방법 (gh-pages 패키지 사용):
     ```bash
     npm install -D gh-pages
     ```
   - `package.json`에 스크립트 추가:
     ```json
     "scripts": {
       ...
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
     ```
   - `npm run deploy` 실행 시 `gh-pages` 브랜치에 자동으로 배포됩니다.
   - GitHub Repository Settings -> Pages 메뉴에서 Source 브랜치를 `gh-pages`로 선택하여 활성화합니다.

## 수정해야 할 Config 항목 (src/config/site.ts 및 .env)

수시로 변경될 수 있는 가격이나 SNS 링크, 외부 예약 플랫폼 링크는 `src/config/site.ts`와 환경변수(`.env`)에서 관리합니다.

**✅ 환경변수 (`.env` 파일 생성 후 기입)**
- `VITE_SUPABASE_URL`: Supabase 프로젝트 URL
- `VITE_SUPABASE_ANON_KEY`: Supabase 익명 퍼블릭 키 (Public Anon Key)
- `VITE_SPACECLOUD_URL`: 스페이스클라우드 예약 링크
- `VITE_HOURPLACE_URL`: 아워플레이스 예약 링크
- `VITE_INSTAGRAM_URL`: 인스타그램 프로필 링크

**✅ 설정 파일 (`src/config/site.ts`)**
- `phone`: 전화번호
- `email`: 연락처 이메일
- `address`: 실제 가게 주소 (기본 세팅 완료)
- `operatingHours`: 카페 및 라운지 운영 시간, 휴무일

## Supabase 설정 방법 (초기 1회)

예약 폼을 정상 동작시키기 위해 Supabase 세팅이 필요합니다.
1. [Supabase](https://supabase.com/)에서 새 프로젝트를 생성합니다.
2. 좌측 메뉴의 **SQL Editor**로 이동합니다.
3. 프로젝트 내 `/supabase/schema.sql` 파일에 있는 모든 내용을 복사하여 붙여넣고 **Run (실행)** 합니다.
4. (선택사항) 프로그램 목록과 메뉴 데이터를 동적으로 불러오려면, 생성된 `programs`, `menu_items` 테이블에 데이터를 추가한 후 프론트엔드 코드를 연동하면 됩니다. (현재 MVP는 하드코딩된 Data File 참조)
5. Project Settings > API 탭에서 URL과 Anon Key를 복사하여 운영 환경(.env 혹은 호스팅 환경 변수 탭)에 등록합니다.

## 추후 확장 가능한 기능 목록 (Next Step)
- **메뉴 / 프로그램 동적 렌더링**: 관리자가 Supabase Dashboard에서 `menu_items`, `programs` 테이블에 데이터를 입력하면 프론트에서 실시간으로 불러와 뿌려주게 업데이트 할 수 있습니다.
- **예약 캘린더 임베드**: 구글 캘린더 API를 연동하거나, 외부 플랫폼 위젯을 Reservation 섹션에 추가할 수 있습니다.
- **관리자 어드민 페이지**: Supabase Auth 로그인 기능과 연동하여 Vercel 등에 관리자 페이지를 띄울 수 있습니다. (직접 예약 승인 및 대관 스케줄 표기 기능 등)
