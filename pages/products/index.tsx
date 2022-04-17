import Link from 'next/link'
import { useState } from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function ProductPage() {
  const [product, setProduct] = useState(0)

  const handleProduct = (e: any) => {
    setProduct(e.target.value)
  }
  return(
    <MainLayout>
      <h1>Products Page</h1>

      <h1 className="title">
        <input type="number" onChange={handleProduct} value={product} />
        <br />
        Ir a  <Link href={`/products/${encodeURIComponent(product)}`}>
                <a>product {product}</a>
              </Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/products/index.tsx</code>
      </p>
    </MainLayout>

  )
}
