'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

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
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: 16 }}>
      <h1 style={{ marginBottom: 20 }}>Menu</h1>

      {Object.keys(grouped).map((cat) => (
        <div key={cat} style={{ marginBottom: 30 }}>
          <h2 style={{ marginBottom: 12 }}>{cat}</h2>

          {grouped[cat].map((p: any) => (
            <div
              key={p.id}
              style={{
                background: 'white',
                borderRadius: 20,
                padding: 16,
                marginBottom: 12,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: 16 }}>
                  {p.name}
                </div>

                <div style={{ color: '#e67e22', marginTop: 6, fontWeight: 600 }}>
                  €{p.price}
                </div>
              </div>

              <button
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: 'none',
                  background: '#f3e5d8',
                  fontSize: 22,
                  cursor: 'pointer'
                }}
              >
                +
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
