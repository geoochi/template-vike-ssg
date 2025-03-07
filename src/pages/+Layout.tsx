import useTheme from '@/hooks/useTheme'
import './global.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useTheme()
  return <>{children}</>
}

export default Layout
