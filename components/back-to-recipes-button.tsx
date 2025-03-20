"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackToRecipesButton() {
  const searchParams = useSearchParams()

  // Get the ingredients parameter directly
  const ingredients = searchParams.get("ingredients")

  // Create the back link with preserved ingredients
  const backLink = ingredients ? `/?ingredients=${ingredients}` : "/"

  return (
    <Link href={backLink} className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground">
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back to recipes
    </Link>
  )
}

