import Skills from '@components/Skills.tsx'
import AboutMe from '@components/AboutMe.tsx'
import Information from '@components/Information.tsx'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <div className="md:flex">
        <div className="md:w-1/2 xl:w-1/2">
          <AboutMe />
          <Information documents={t('education', { returnObjects: true })} />
        </div>
        <div className="md:w-1/2 xl:flex xl:w-full">
          <div className="md:pl-2 xl:w-full">
            <Information
              documents={t('experiences', { returnObjects: true })}
            />
          </div>
          <div className="md:pl-2 xl:w-full">
            <Information
              documents={t('certificates', { returnObjects: true })}
            />
          </div>
        </div>
      </div>
      <Skills />
      <Information documents={t('portfolio', { returnObjects: true })} />
    </div>
  )
}
