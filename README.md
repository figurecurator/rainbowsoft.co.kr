# RainbowSoft 홈페이지

피규어 큐레이터와 samlgate를 소개하는 정적 사이트입니다. 공개 파일은 `public/`에 있고 Cloudflare Workers Static Assets의 `rainbowsoft-home`으로 배포합니다.

```powershell
npx wrangler@4.156.0 dev
npx wrangler@4.156.0 deploy --dry-run
npx wrangler@4.156.0 deploy
```

`main`에 `public/`, `wrangler.jsonc`, 배포 workflow 변경이 들어오면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로 배포합니다. Actions 탭에서 수동 실행(`workflow_dispatch`)도 할 수 있고, 같은 경로를 바꾸는 PR에서는 `deploy --dry-run`으로 설정만 확인합니다. 저장소 secret `CLOUDFLARE_API_TOKEN`(Workers Scripts 편집 권한)과 `CLOUDFLARE_ACCOUNT_ID`가 필요합니다.

직접 배포는 RainbowSoft 도메인이 있는 Cloudflare 계정에서 실행합니다. Cloudflare Redirect Rule `canonical_rainbowsoft_host`가 HTTP와 `www` 요청을 경로와 쿼리를 보존해 기본 HTTPS 주소로 보냅니다. 이전 경로는 `public/_redirects`에서 관리합니다.

공통 푸터는 회사 링크, 피규어 큐레이터와 samlgate 제품 링크, RainbowSoft 저작권 및 연락처 순서로 구성합니다. 홈과 지원 페이지에서 같은 구성을 사용합니다.
