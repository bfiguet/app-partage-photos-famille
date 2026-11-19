import type {Metadata,Viewport} from 'next'
import './globals.css'
export const metadata:Metadata={title:'EntreNous — La galerie de famille',description:'Un espace privé pour réunir les photos de famille et retrouver les originaux, sur invitation.'}
export const viewport:Viewport={colorScheme:'light',themeColor:'#fffefa'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr" className="light"><body className="antialiased">{children}</body></html>}
