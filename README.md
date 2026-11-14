# RainbowSoft 홈페이지

피규어 큐레이터, 뮤직 큐레이터, Oshi Atlas를 소개하는 회사 홈페이지입니다. `public/`의 정적 파일을 Cloudflare Worker `rainbowsoft-home`으로 배포합니다.

- 피규어 큐레이터: 상품명·캐릭터·제품 번호·JAN 검색, 발매 정보와 판매처별 가격 기록.
- 뮤직 큐레이터: 곡·아티스트 검색, 원곡과 커버의 연결, 음악 관계 지도와 감상 링크.
- Oshi Atlas: 두 서비스의 카탈로그를 AI 대화로 탐색하는 플러그인. 질문 예시, Claude Code 설치 명령어와 소개 영상.
- samlgate는 회사 홈 footer 링크만 제공합니다. 사이트 원본은 `D:\rainbowsoft\samlgate\site`에서 관리하고 해당 저장소의 `.github/workflows/pages.yml`로 GitHub Pages에 배포합니다.

마스코트는 기존 `public/mascot.png`, `public/oshi-atlas.png`와 Figure Curator 프로젝트의 `apps/mobile/public/brand/mascot-music.png`를 사용합니다. `site.js`는 명령어 복사와 클릭 시에만 로드되는 YouTube 개인정보 보호 강화 모드 플레이어를 처리합니다. 영상 썸네일은 YouTube에서 불러옵니다.

## 검증 및 배포

이 저장소에서 사용하던 Wrangler 4.156.0을 유지합니다.

```powershell
npx wrangler@4.156.0 dev --infer-origin-from-routes=false
npx wrangler@4.156.0 deploy --dry-run
npx wrangler@4.156.0 deploy
```

로컬 런타임이 compatibility date를 지원하지 않으면 미리보기에만 `--compatibility-date 2026-10-30`을 추가합니다. 배포는 RainbowSoft 도메인이 있는 Cloudflare 계정에서 실행합니다. 인증 만료 시 `npx wrangler@4.156.0 login`으로 다시 로그인합니다.

회사 사이트의 HTTP·www 요청은 기존 Cloudflare Redirect Rule `canonical_rainbowsoft_host`로 기본 HTTPS 주소에 연결합니다. `/samlgate`, `/samlgate/`, `/samlgate/index.html`은 쿼리를 보존해 `https://samlgate.rainbowsoft.co.kr/`로 이동합니다. `/oshi-atlas`는 홈의 소개 영역으로 연결합니다.

samlgate의 GitHub Pages custom domain은 `samlgate.rainbowsoft.co.kr`이며 Cloudflare DNS에서 `figurecurator.github.io`를 가리킵니다. 회사 Worker에 samlgate custom domain을 다시 추가하지 마세요. 지원 페이지는 회사와 제품 문의, 공통 footer를 제공합니다. 개인정보처리방침과 이용약관은 피규어 큐레이터의 정책 페이지로 연결합니다.
