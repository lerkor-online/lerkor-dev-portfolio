import AppContextProvider from '../context/context'
import './globals.css'

export const metadata = {
  title: 'Lerkor-dev',
  description: 'Front-end Developer',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=contain',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppContextProvider>
        {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
