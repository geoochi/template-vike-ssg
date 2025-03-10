import { Button } from '@/components/ui/button'
import { navigate } from 'vike/client/router'

const About: React.FC = () => {
  return (
    <>
      <p className='text-4xl'>About Page</p>
      <a href='/'>Link to Home Page</a>
      <Button onClick={() => navigate('/')}>Navigate to Home Page</Button>
    </>
  )
}

export default About
