import './global.css'
import useTheme from '@/hooks/useTheme'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useTheme()
  return <>{children}</>
}

export default Layout
