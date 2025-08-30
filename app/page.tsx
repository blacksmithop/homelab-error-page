"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const [quote, setQuote] = useState("")
  const [loading, setLoading] = useState(true)

  const errorCode = searchParams.get("error") || searchParams.get("code") || "404"

  useEffect(() => {

        setQuote("The only way to do great work is to love what you do.")
        setLoading(false)
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="text-6xl font-mono text-white/90">{errorCode}</div>

        <div className="text-white/70 text-lg leading-relaxed">{loading ? "..." : `~ ${quote}`}</div>
      </div>
    </div>
  )
}
