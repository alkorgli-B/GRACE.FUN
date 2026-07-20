import './globals.css'

export const metadata = {
  title: '$GRACE - The GOATest Black Cat',
  description: 'The official website for $GRACE memecoin on Pons Network',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
