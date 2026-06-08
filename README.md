# clack.cc

`clack.cc` is retired as a standalone site. This repo is now a tiny Cloudflare
Worker that permanently (`301`) redirects all traffic to
[bomb.sh/clack](https://bomb.sh/clack) — which currently forwards on to the
[Clack docs](https://bomb.sh/docs/clack/basics/getting-started/) and may
eventually become Clack's own landing page.

Two shortlinks are preserved:

| Path            | Redirects to               |
| :-------------- | :------------------------- |
| `/issues`       | GitHub → new issue chooser |
| `/discord`      | Bombshell Discord invite   |
| everything else | `https://bomb.sh/clack`    |

The previous Astro landing page (with the WebContainer terminal demo) lives in git history prior to the Cloudflare migration.

## Develop

```sh
pnpm install
pnpm dev        # wrangler dev — local preview of the redirects
pnpm typecheck  # tsc --noEmit
```

## Deploy

```sh
pnpm deploy     # wrangler deploy
```
