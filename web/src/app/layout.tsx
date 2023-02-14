import { ReactNode } from 'react'
import '../../styles/globals.css'

import Header from '../components/Header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
