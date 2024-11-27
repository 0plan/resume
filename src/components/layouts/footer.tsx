import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="text-sm text-gray-500 sm:text-center">
          {t("update.description")} {t("update.date")}
        </span>
        <a
          href={t("update.note")}
          target="_blank"
          className="flex justify-center items-center"
        >
          <div className="border rounded-full mr-2 border-black p-1">
            <Github className="h-4 w-4" />
          </div>
          <span className="underline text-sky-500 hover:text-sky-700">
            release note
          </span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
