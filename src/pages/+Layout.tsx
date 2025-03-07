import useTheme from '@/hooks/use-theme'
import './global.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useTheme()
  return <>{children}</>
}

export default Layout
