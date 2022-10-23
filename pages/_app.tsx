// import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../styles/bootstrap.min.css'
import '../styles/lux.css'
import Layout from '../component/Layout'
import { AuthContextProvider } from '../context/AuthContext'
import ProtectedRoute from '../component/ProtectedRoute'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
  const noAuthRequired = ['/','/login','/signup']
  const router = useRouter();
  return(
    <AuthContextProvider>
    <Layout>
     {noAuthRequired.includes(router.pathname) ? (
      <Component {...pageProps} />
     ):
     (
      <ProtectedRoute>
         <Component {...pageProps} />
      </ProtectedRoute>
     )
     }
        
    </Layout>
    </AuthContextProvider>
  ) 
}

export default MyApp
