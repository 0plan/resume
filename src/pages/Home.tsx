import Skills from '@components/Skills.tsx'
import Portfolio from '@components/Portfolio.tsx'
import WorkExperience from '@components/WorkExperience.tsx'
import AboutMe from '@components/AboutMe.tsx'
import Education from '@components/Education.tsx'
import Information from '@components/Information.tsx'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <div className="lg:flex">
        <div className="px-2 md:w-full lg:w-1/3">
          <AboutMe />
          <Information documents={t('education', { returnObjects: true })} />
        </div>

        <div className="px-2 md:w-1/2 lg:w-1/3">
          <Information documents={t('experiences', { returnObjects: true })} />
        </div>
        <div className="px-2 md:w-1/2 lg:w-1/3">
          <Information documents={t('certificates', { returnObjects: true })} />
        </div>
      </div>
      <Skills />
      <Information documents={t('portfolio', { returnObjects: true })} />
    </div>
  )
}
