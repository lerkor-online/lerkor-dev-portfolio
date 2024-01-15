import AppContextProvider from '../context/context'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Lerkor-dev',
  description: 'Front-end Developer',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppContextProvider>
        <Toaster position='bottom-right' toastOptions={{ duration: 3000 }} />
        {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
