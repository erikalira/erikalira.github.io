const localeRedirectScript = `
(() => {
  const localeMatch = document.cookie.match(/(?:^|; )NEXT_LOCALE=(pt|en)(?:;|$)/);
  const locale = localeMatch?.[1] ?? (navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");

  window.location.replace("/" + locale);
})();
`;

export default function RootPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
      <noscript>
        <main className="flex min-h-screen items-center justify-center gap-4 bg-app-canvas p-6 text-foreground">
          <a className="font-semibold text-accent-strong" href="/pt">
            Portugues
          </a>
          <a className="font-semibold text-accent-strong" href="/en">
            English
          </a>
        </main>
      </noscript>
    </>
  );
}
