# RainbowSoft 홈페이지

RainbowSoft 회사 사이트와 samlgate 제품 사이트를 Cloudflare Worker `rainbowsoft-home`으로 배포합니다. 회사 사이트는 `public/`에, samlgate 제품 사이트는 `public/samlgate/`에 있습니다. `worker.js`가 도메인에 맞는 페이지를 반환합니다.

```powershell
npx wrangler@4.156.0 dev --infer-origin-from-routes=false
npx wrangler@4.156.0 deploy --dry-run
npx wrangler@4.156.0 deploy
```

`main`에 `public/`, `worker.js`, `wrangler.jsonc` 또는 배포 워크플로 변경이 들어오면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로 배포합니다. Actions 탭에서 수동으로 실행할 수 있습니다. 같은 파일을 변경하는 PR에서는 `deploy --dry-run`으로 배포 구성을 확인합니다. `production` 환경에 `CLOUDFLARE_API_TOKEN`과 `CLOUDFLARE_ACCOUNT_ID`를 등록합니다. 토큰은 대상 계정에서 Worker를 배포하고 `rainbowsoft.co.kr` 영역의 Custom Domain을 연결할 수 있어야 합니다.

직접 배포는 RainbowSoft 도메인이 있는 Cloudflare 계정에서 실행합니다. Cloudflare Redirect Rule `canonical_rainbowsoft_host`가 회사 사이트의 HTTP와 `www` 요청을 기본 HTTPS 주소로 보냅니다. 회사 사이트의 `/samlgate/`는 쿼리를 보존해 `https://samlgate.rainbowsoft.co.kr/`로 이동합니다. samlgate의 Custom Domain과 TLS 인증서는 Cloudflare에서 관리합니다.

공통 푸터는 회사 링크, 피규어 큐레이터와 samlgate 제품 링크, RainbowSoft 저작권 및 연락처 순서로 구성합니다. 홈과 지원 페이지에서 같은 구성을 사용합니다.
