import AppContextProvider from '../context/context'
import './globals.css'

export const metadata = {
  title: 'Lerkor-dev',
  description: 'Front-end Developer',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="viewport-fit=cover" />
      </head>
      <body>
        <AppContextProvider>
        {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
