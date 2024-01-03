import ContextMe from './ContextMe'
import Education from './Education'
import AboutMe from '@components/AboutMe.tsx'

const Left = () => {
  return (
    <div className="w3-third">
      <AboutMe />
      <br />
      <Education />
    </div>
  )
}

export default Left
