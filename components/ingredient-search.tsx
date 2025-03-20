"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X, Plus } from "lucide-react"

const commonIngredients = [
  "chicken",
  "beef",
  "pasta",
  "rice",
  "potato",
  "tomato",
  "onion",
  "garlic",
  "cheese",
  "egg",
  "milk",
  "butter",
  "olive oil",
  "flour",
  "sugar",
  "salt",
  "pepper",
  "carrot",
  "broccoli",
  "spinach",
]

// Popular ingredients to show as quick-add tags
const popularIngredients = ["chicken", "tomato", "cheese", "potato", "onion"]

export default function IngredientSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Initialize ingredients from URL params if they exist
  const ingredientsParam = searchParams.get("ingredients") || ""
  const [ingredients, setIngredients] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])

  // Update ingredients state when URL changes
  useEffect(() => {
    const urlIngredients = ingredientsParam.split(",").filter(Boolean)
    setIngredients(urlIngredients)
  }, [ingredientsParam])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    setCurrentInput(value)

    if (value.length > 1) {
      const filtered = commonIngredients.filter(
        (ingredient) => ingredient.toLowerCase().includes(value) && !ingredients.includes(ingredient),
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const addIngredient = (ingredient: string) => {
    // Check if the ingredient is in the commonIngredients list (case-insensitive)
    const normalizedIngredient = ingredient.toLowerCase()
    const validIngredient = commonIngredients.find((ing) => ing.toLowerCase() === normalizedIngredient)

    if (validIngredient && !ingredients.includes(validIngredient) && ingredients.length < 5) {
      const newIngredients = [...ingredients, validIngredient]

      // Update URL with new ingredients
      const params = new URLSearchParams(searchParams.toString())
      params.set("ingredients", newIngredients.join(","))
      router.push(`/?${params.toString()}`)

      // Clear input and suggestions
      setCurrentInput("")
      setSuggestions([])
    }
  }

  const removeIngredient = (ingredient: string) => {
    const newIngredients = ingredients.filter((item) => item !== ingredient)

    // Update URL with new ingredients or clear it if empty
    const params = new URLSearchParams(searchParams.toString())

    if (newIngredients.length > 0) {
      params.set("ingredients", newIngredients.join(","))
      router.push(`/?${params.toString()}`)
    } else {
      params.delete("ingredients")
      router.push(`/?${params.toString()}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentInput) {
      e.preventDefault()
      addIngredient(currentInput)
    }
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {ingredients.map((ingredient) => (
            <Badge key={ingredient} variant="secondary" className="text-sm py-1 px-3">
              {ingredient}
              <button
                onClick={() => removeIngredient(ingredient)}
                className="ml-2 text-muted-foreground hover:text-foreground"
                aria-label={`Remove ${ingredient}`}
              >
                <X size={14} />
              </button>
            </Badge>
          ))}
        </div>

        <div className="relative">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder={ingredients.length < 5 ? "Add up to 5 ingredients..." : "Maximum 5 ingredients reached"}
              value={currentInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={ingredients.length >= 5}
              className="flex-1"
            />
            <Button
              onClick={() => addIngredient(currentInput)}
              disabled={
                !currentInput ||
                ingredients.length >= 5 ||
                !commonIngredients.some((ing) => ing.toLowerCase() === currentInput.toLowerCase())
              }
            >
              Add
            </Button>
          </div>

          {suggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
              <ul className="py-1">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="px-4 py-2 hover:bg-muted cursor-pointer"
                    onClick={() => addIngredient(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Popular ingredients tags */}
        {ingredients.length < 5 && (
          <div className="mt-2">
            <p className="text-sm text-muted-foreground mb-2">Popular ingredients:</p>
            <div className="flex flex-wrap gap-2">
              {popularIngredients.map(
                (ingredient) =>
                  !ingredients.includes(ingredient) && (
                    <Badge
                      key={ingredient}
                      variant="outline"
                      className="cursor-pointer hover:bg-secondary"
                      onClick={() => addIngredient(ingredient)}
                    >
                      <Plus size={14} className="mr-1" />
                      {ingredient}
                    </Badge>
                  ),
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

