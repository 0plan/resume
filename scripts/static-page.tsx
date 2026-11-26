import { createInstance, type ResourceLanguage } from "i18next";
import { I18nextProvider } from "react-i18next";
import { renderToStaticMarkup } from "react-dom/server";
import Home from "@/pages/Home";
import Footer from "@/components/layouts/footer";

export async function renderPage(
  lang: string,
  data: ResourceLanguage,
  styles: string[],
) {
  const i18n = createInstance();
  await i18n.init({
    lng: lang,
    fallbackLng: false,
    resources: { [lang]: { translation: data } },
    interpolation: { escapeValue: false },
  });
  const t = i18n.t;
  return renderToStaticMarkup(
    <I18nextProvider i18n={i18n}>
      <html lang={lang}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="robots" content="noindex" />
          <title>{`${t("profile.name")} | ${t("profile.position")} | 0plan`}</title>
          <meta name="description" content={t("profile.description")} />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            sizes="any"
            href="../favicon.svg"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../apple-touch-icon.png"
          />
          <link rel="manifest" href="../manifest.json" />
          {styles.map((file) => (
            <link key={file} rel="stylesheet" href={`../${file}`} />
          ))}
        </head>
        <body>
          <header className="mx-auto flex min-h-14 max-w-340 items-center gap-5 border-b px-4 text-primary underline">
            <a href="../">{t("ui.home")}</a>
            {lang === "ko" ? (
              <a lang="en" href="en.html">
                English
              </a>
            ) : (
              <a lang="ko" href="ko.html">
                한국어
              </a>
            )}
          </header>
          <main className="mx-auto max-w-340 px-4 pt-10 sm:px-10">
            <Home interactive={false} />
          </main>
          <Footer />
        </body>
      </html>
    </I18nextProvider>,
  );
}
