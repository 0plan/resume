import { t } from 'i18next'

const AboutMe = () => {
  return (
    <div className="rounded shadow md:w-1/2">
      <figure className="rounded-xl bg-slate-100 p-8 md:flex md:p-0 dark:bg-slate-800">
        <img
          className="mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-none"
          src={'~/assets/img/gohome.jpg'}
          alt=""
          width="384"
          height="512"
        />
        <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
          <blockquote>
            <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
              {t('profile.description')}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {t('profile.name')}
            </div>
            <div className="text-slate-800 dark:text-slate-300">
              {t('profile.email')}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {t('profile.position')}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}
export default AboutMe
