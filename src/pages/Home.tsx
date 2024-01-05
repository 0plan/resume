import Skills from '@components/Skills.tsx'
import Portfolio from '@components/Portfolio.tsx'
import WorkExperience from '@components/WorkExperience.tsx'
import AboutMe from '@components/AboutMe.tsx'
import Education from '@components/Education.tsx'

export default function Home() {
  return (
    <div>
      <div className="md:flex">
        <div className=" px-2 md:w-1/2">
          <AboutMe />
          <Education />
        </div>
        <div className="px-2 md:w-1/2">
          <WorkExperience />
        </div>
      </div>
      <Skills />
      <Portfolio />
    </div>
  )
}
