'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [grouped, setGrouped] = useState<any>({})

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const { data } = await supabase.from('products').select('*')

    const groupedData: any = {}

    data?.forEach((p) => {
      if (!groupedData[p.category]) {
        groupedData[p.category] = []
      }
      groupedData[p.category].push(p)
    })

    setGrouped(groupedData)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Menu</h1>

      {Object.keys(grouped).map((cat) => (
        <div key={cat} style={{ marginBottom: 30 }}>
          <h2 style={{ textTransform: 'uppercase' }}>{cat}</h2>

          {grouped[cat].map((p: any) => (
            <div key={p.id} style={{ marginBottom: 10 }}>
              {p.name} — {p.price}€
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
