# RainbowSoft 홈페이지

RainbowSoft 회사 사이트와 samlgate 제품 사이트를 Cloudflare Worker `rainbowsoft-home`으로 배포합니다. 회사 사이트는 `public/`에, samlgate 제품 사이트는 `public/samlgate/`에 있습니다. `worker.js`가 도메인에 맞는 페이지를 반환합니다.

회사 홈은 Oshi Atlas 홍보 페이지로, 플러그인 소개·질문 예시·YouTube 소개 영상·Claude Code 설치 명령어와 Instagram 링크를 제공합니다. 영상은 재생 버튼을 누르면 YouTube 개인정보 보호 강화 모드 플레이어를 로드합니다. 썸네일은 YouTube에서 불러옵니다. 아이콘 `public/oshi-atlas.png`는 `oshi-atlas-plugin/assets/icon.png`에서 가져왔습니다. `/oshi-atlas`와 `/oshi-atlas/`도 홈의 소개 영역으로 연결합니다.

```powershell
npx wrangler@4.156.0 dev --infer-origin-from-routes=false
npx wrangler@4.156.0 deploy --dry-run
npx wrangler@4.156.0 deploy
```

GitHub Actions 배포 워크플로는 제거된 상태입니다. 위 명령으로 직접 검증·배포합니다. 인증이 만료되면 `npx wrangler@4.156.0 login`으로 다시 로그인합니다. 로컬 런타임이 설정의 compatibility date를 지원하지 않는 경우 미리보기에만 `--compatibility-date 2026-10-30`을 추가할 수 있습니다.

직접 배포는 RainbowSoft 도메인이 있는 Cloudflare 계정에서 실행합니다. Cloudflare Redirect Rule `canonical_rainbowsoft_host`가 회사 사이트의 HTTP와 `www` 요청을 기본 HTTPS 주소로 보냅니다. 회사 사이트의 `/samlgate/`는 쿼리를 보존해 `https://samlgate.rainbowsoft.co.kr/`로 이동합니다. samlgate의 Custom Domain과 TLS 인증서는 Cloudflare에서 관리합니다.

공통 푸터는 회사 링크, 피규어 큐레이터와 samlgate 제품 링크, RainbowSoft 저작권 및 연락처 순서로 구성합니다. 홈과 지원 페이지에서 같은 구성을 사용합니다.
