import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
//obligatoriamente las páginas deben tener la exportación por defecto
export default function HomePage() { //puede tener cualquier nombre no afecta
  return(
    <MainLayout>
      <h1>Home Page</h1>

      <h1 className="title">
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayout>

  )
}
