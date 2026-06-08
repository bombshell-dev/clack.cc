// clack.cc is retired as a standalone site. Everything permanently (301)
// redirects to bomb.sh/clack, which currently forwards on to the docs but
// may later become clack's own landing page. A couple of handy shortlinks
// are preserved.

const DESTINATION = "https://bomb.sh/clack";

const SHORTLINKS: Record<string, string> = {
  "/issues": "https://github.com/bombshell-dev/clack/issues/new/choose",
  "/discord": "https://discord.gg/KSbmXugQga",
};

export default {
  fetch(request) {
    const { pathname } = new URL(request.url);
    // Normalize: case-insensitive, ignore trailing slashes.
    const path = pathname.replace(/\/+$/, "").toLowerCase() || "/";
    return Response.redirect(SHORTLINKS[path] ?? DESTINATION, 301);
  },
} satisfies ExportedHandler;
