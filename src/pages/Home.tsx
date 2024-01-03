import { useTranslation } from 'react-i18next'
import Left from '@components/Left.tsx'
import Right from '@components/Right.tsx'
import Skills from '@components/Skills.tsx'
import Portfolio from '@components/Portfolio.tsx'

export default function Home() {
  return (
    <div className="relative overflow-hidden before:absolute before:start-1/2 before:top-0">
      <div className="w3-content w3-margin-top">
        <div className="w3-row-padding">
          <Left />
          <Right />
        </div>
      </div>
      <Skills />
      <Portfolio />
    </div>
  )
}
