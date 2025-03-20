import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
      <p className="text-muted-foreground mb-8">We couldn't find the recipe you were looking for.</p>
      <Link href="/">
        <Button>Return to Recipe Finder</Button>
      </Link>
    </div>
  )
}

