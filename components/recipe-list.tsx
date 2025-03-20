"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ChefHat, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { getRecipesByIngredients, type Recipe } from "@/lib/recipes"

export function RecipeList() {
  const searchParams = useSearchParams()
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  // Get ingredients from searchParams and force re-render when searchParams changes
  const ingredientsParam = searchParams.get("ingredients") || ""

  // This key will force the component to re-mount when the URL changes
  const searchParamsKey = searchParams.toString()

  useEffect(() => {
    // Define and immediately call an async function
    async function loadRecipes() {
      setLoading(true)
      const ingredients = ingredientsParam.split(",").filter(Boolean)

      if (ingredients.length > 0) {
        const fetchedRecipes = await getRecipesByIngredients(ingredients)
        setRecipes(fetchedRecipes)
      } else {
        setRecipes([])
      }
      setLoading(false)
    }

    loadRecipes()
  }, [ingredientsParam, searchParamsKey]) // Add searchParamsKey to dependencies

  // If loading, show skeleton
  if (loading) {
    return null
  }

  // Parse ingredients here for rendering, not for the effect dependency
  const ingredients = ingredientsParam.split(",").filter(Boolean)

  // If no ingredients, show empty state
  if (ingredients.length === 0) {
    return (
      <div className="text-center py-12">
        <ChefHat className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-medium">No ingredients selected</h3>
        <p className="mt-2 text-sm text-muted-foreground">Add some ingredients to find matching recipes</p>
      </div>
    )
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No recipes found</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Try different ingredients or reduce the number of ingredients
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recipes with your ingredients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>Matches {recipe.matchedIngredients.length} of your ingredients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{recipe.cookingTime} mins</span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Ingredients you have:</h4>
                <div className="flex flex-wrap gap-2">
                  {recipe.matchedIngredients.map((ingredient) => (
                    <Badge key={ingredient} variant="secondary">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>
              {recipe.missingIngredients.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">You'll also need:</h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.missingIngredients.map((ingredient) => (
                      <Badge key={ingredient} variant="outline">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Link href={`/recipe/${recipe.id}?ingredients=${ingredientsParam}`} className="w-full">
                <Button variant="default" className="w-full">
                  View Recipe
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

