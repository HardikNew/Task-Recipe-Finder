import { Clock, ChefHat, Utensils } from "lucide-react"
import { getRecipeById } from "@/lib/recipes"
import { notFound } from "next/navigation"
import { BackToRecipesButton } from "@/components/back-to-recipes-button"

export default async function RecipePage({ params }: { params: { id: string } }) {
  const recipe = await getRecipeById(params.id)

  if (!recipe) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <BackToRecipesButton />

        <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{recipe.cookingTime} mins</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="mr-1 h-4 w-4" />
              <span>{recipe.difficulty}</span>
            </div>
            <div className="flex items-center">
              <Utensils className="mr-1 h-4 w-4" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex">
                  <span className="font-bold mr-3">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {recipe.tips && (
            <div className="mt-6 p-4 bg-muted rounded-md">
              <h3 className="font-semibold mb-2">Chef's Tips</h3>
              <p>{recipe.tips}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

