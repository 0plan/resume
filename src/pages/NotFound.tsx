import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/lib/page-meta";

export default function NotFound() {
  const { t } = useTranslation();
  usePageMeta(t("ui.missingPage"), t("profile.description"));
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">{t("ui.missingPage")}</h1>
      <Link className="text-primary underline" to="/">
        {t("ui.home")}
      </Link>
    </section>
  );
}
