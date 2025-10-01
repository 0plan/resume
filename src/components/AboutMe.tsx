import { useTranslation } from "react-i18next";
import avatar from "@/assets/img/avatar.jfif";
import { Github, Home, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className="md:flex">
        <div className="md:w-1/3 flex justify-center items-center p-4">
          <img
            className="mx-auto h-32 w-32 rounded-full md:h-48 md:w-48 md:rounded-xl object-cover"
            src={avatar}
            alt={t("profile.name")}
          />
        </div>
        <div className="md:w-2/3">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{t("profile.name")}</CardTitle>
            <p className="text-sm text-muted-foreground">{t("profile.position")}</p>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-base text-muted-foreground">
              {t("profile.description")}
            </p>
            <div className="flex items-center space-x-4">
              <a target="_blank" href={t("profile.blog")} className="flex items-center text-sm text-primary hover:underline">
                <Home className="w-4 h-4 mr-1" />
                Blog
              </a>
              <a target="_blank" href={t("profile.github")} className="flex items-center text-sm text-primary hover:underline">
                <Github className="w-4 h-4 mr-1" />
                GitHub
              </a>
              <a target="_blank" href={`mailto:${t("profile.email")}`} className="flex items-center text-sm text-primary hover:underline">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </a>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};
export default AboutMe;
