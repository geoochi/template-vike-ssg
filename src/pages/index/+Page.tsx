import { MoonIcon, SunIcon, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useTheme from '@/hooks/use-theme'
import { useState, useEffect } from 'react'
import { navigate } from 'vike/client/router'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [joke, setJoke] = useState('')
  const [waitting, setWaitting] = useState(false)

  const getJoke = async () => {
    setWaitting(true)
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await res.json()
    setJoke(data.joke)
    setWaitting(false)
  }

  useEffect(() => {
    getJoke()
  }, [])

  return (
    <>
      <p className='text-3xl'>template - vike@0.4 - react@19 - shadcn@canary - tailwindcss@4 - SSG</p>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant='ghost' size='icon'>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
      <a href='/about'>Link to About Page</a>
      <Button onClick={() => navigate('/about')}>Navigate to About Page</Button>
      <Button onClick={getJoke}>get joke</Button>
      {waitting ? <Loader2 className='w-4 h-4 animate-spin' /> : <p>{joke}</p>}
    </>
  )
}

export default Home
