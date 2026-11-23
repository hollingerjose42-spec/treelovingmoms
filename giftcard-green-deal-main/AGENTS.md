<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The offer page lives at `/` and uses centralized offer styles and the shared Button offer variant to preserve consistent presentation.
- The header is a green band with the bundled Dollar Tree logo centered; any image the page shows must be a bundled local import, never a Lovable asset-proxy URL, so independent hosting still renders it.
- Offer amount and destination live in a shared configuration module so page copy and sharing metadata stay consistent.
- Get Started sends visitors straight to the supplied offer destination; the page itself never collects personal information or simulates a reward.
- Social share metadata builds its image URL from the request origin (a GET server function), never a hardcoded host or a relative bundled-asset path; share and favicon artwork lives in `public/` so crawlers can fetch it.
