import './global.css'

export const metadata = {
  title: '$GRACE - The GOATest Black Cat',
  description: 'The official website for $GRACE memecoin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

