'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const { data } = await supabase.from('products').select('*')
    setProducts(data || [])
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Menu</h1>

      {products.length === 0 && <p>Nessun prodotto</p>}

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: 20 }}>
          <h3>{p.name}</h3>
          <p>{p.price}€</p>
        </div>
      ))}
    </div>
  )
}
