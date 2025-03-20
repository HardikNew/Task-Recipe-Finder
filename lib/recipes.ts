export interface Recipe {
  id: string
  title: string
  ingredients: string[]
  matchedIngredients: string[]
  missingIngredients: string[]
  instructions: string[]
  cookingTime: number
  difficulty: string
  servings: number
  tips?: string
}

// Mock recipe data
const recipesData: Recipe[] = [
  {
    id: "1",
    title: "Simple Pasta with Tomato Sauce",
    ingredients: [
      "200g pasta",
      "2 tomatoes, diced",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "Fresh basil (optional)",
    ],
    matchedIngredients: [],
    missingIngredients: [],
    instructions: [
      "Bring a large pot of salted water to a boil. Add pasta and cook according to package instructions.",
      "Meanwhile, heat olive oil in a pan over medium heat. Add onion and cook until translucent.",
      "Add garlic and cook for another minute until fragrant.",
      "Add diced tomatoes, salt, and pepper. Cook for about 10 minutes until tomatoes break down.",
      "Drain pasta and add to the sauce. Toss to combine.",
      "Serve hot, garnished with fresh basil if available.",
    ],
    cookingTime: 20,
    difficulty: "Easy",
    servings: 2,
    tips: "For a richer sauce, add a tablespoon of butter at the end.",
  },
  {
    id: "2",
    title: "Cheesy Scrambled Eggs",
    ingredients: [
      "4 eggs",
      "30g cheese, grated",
      "1 tbsp butter",
      "Salt and pepper to taste",
      "Chives for garnish (optional)",
    ],
    matchedIngredients: [],
    missingIngredients: [],
    instructions: [
      "Crack eggs into a bowl and whisk until well combined.",
      "Melt butter in a non-stick pan over medium-low heat.",
      "Pour in the eggs and let them set slightly before stirring gently with a spatula.",
      "When eggs are partially cooked but still wet, add the grated cheese and continue to cook, stirring occasionally.",
      "Remove from heat when eggs are just set but still look slightly wet (they will continue cooking).",
      "Season with salt and pepper, and garnish with chives if using.",
    ],
    cookingTime: 10,
    difficulty: "Easy",
    servings: 2,
    tips: "Don't overcook the eggs - they should be soft and creamy.",
  },
  {
    id: "3",
    title: "Garlic Butter Rice",
    ingredients: [
      "1 cup rice",
      "2 cups water or broth",
      "3 cloves garlic, minced",
      "2 tbsp butter",
      "1/2 tsp salt",
      "Fresh parsley, chopped (optional)",
    ],
    matchedIngredients: [],
    missingIngredients: [],
    instructions: [
      "Rinse rice under cold water until water runs clear.",
      "In a pot, melt 1 tbsp butter over medium heat. Add minced garlic and sauté until fragrant.",
      "Add rice and stir to coat with butter and garlic.",
      "Pour in water or broth and salt. Bring to a boil.",
      "Reduce heat to low, cover, and simmer for 15-18 minutes until liquid is absorbed.",
      "Remove from heat and let stand, covered, for 5 minutes.",
      "Fluff with a fork, stir in remaining butter, and garnish with parsley if using.",
    ],
    cookingTime: 25,
    difficulty: "Easy",
    servings: 4,
    tips: "For extra flavor, use chicken or vegetable broth instead of water.",
  },
  {
    id: "4",
    title: "Quick Potato and Onion Frittata",
    ingredients: [
      "4 eggs",
      "1 medium potato, thinly sliced",
      "1 small onion, thinly sliced",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "30g cheese, grated (optional)",
    ],
    matchedIngredients: [],
    missingIngredients: [],
    instructions: [
      "Heat olive oil in an oven-safe skillet over medium heat.",
      "Add potato slices and cook for about 5 minutes until starting to soften.",
      "Add onion slices and continue cooking until both are tender and lightly browned.",
      "Whisk eggs in a bowl with salt and pepper.",
      "Pour eggs over the potatoes and onions. Cook until edges are set but center is still runny.",
      "If using cheese, sprinkle it on top.",
      "Place under a preheated broiler for 2-3 minutes until top is set and golden.",
      "Let cool slightly before slicing and serving.",
    ],
    cookingTime: 20,
    difficulty: "Medium",
    servings: 2,
    tips: "Make sure your skillet is oven-safe before putting it under the broiler.",
  },
  {
    id: "5",
    title: "Tomato and Garlic Bruschetta",
    ingredients: [
      "2 tomatoes, diced",
      "2 cloves garlic, minced",
      "1 tbsp olive oil",
      "4 slices of bread",
      "Salt and pepper to taste",
      "Fresh basil, chopped (optional)",
    ],
    matchedIngredients: [],
    missingIngredients: [],
    instructions: [
      "In a bowl, combine diced tomatoes, minced garlic, olive oil, salt, and pepper.",
      "If using basil, add it to the tomato mixture.",
      "Toast the bread slices until golden and crisp.",
      "Rub each toast with a clove of garlic (optional for extra garlic flavor).",
      "Top each toast with the tomato mixture.",
      "Serve immediately.",
    ],
    cookingTime: 15,
    difficulty: "Easy",
    servings: 2,
    tips: "For the best flavor, let the tomato mixture sit for 15 minutes before topping the toast.",
  },
  {
    id: "6",
    title: "Simple Chicken Stir-Fry",
    ingredients: [
      "200g chicken breast, sliced",
      "1 onion, sliced",
      "2 cloves garlic, minced",
      "1 carrot, julienned",
      "2 tbsp soy sauce",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
    ],
    matchedIngredients: [],
    missingIngredients: [],
    instructions: [
      "Heat olive oil in a large pan or wok over high heat.",
      "Add chicken and cook until no longer pink, about 5-6 minutes.",
      "Add onion and garlic, cook for 2 minutes until fragrant.",
      "Add carrot and continue cooking for 3-4 minutes until vegetables are tender-crisp.",
      "Pour in soy sauce and stir to coat everything evenly.",
      "Season with salt and pepper to taste.",
      "Serve hot, optionally over rice.",
    ],
    cookingTime: 15,
    difficulty: "Medium",
    servings: 2,
    tips: "For extra flavor, marinate the chicken in soy sauce for 15 minutes before cooking.",
  },
  {
    id: "7",
    title: "Cheesy Garlic Bread",
    ingredients: [
      "1 baguette or bread loaf",
      "100g cheese, grated",
      "4 tbsp butter, softened",
      "3 cloves garlic, minced",
      "Salt to taste",
      "Fresh parsley, chopped (optional)",
    ],
    matchedIngredients: [],
    missingIngredients: [],
    instructions: [
      "Preheat oven to 180°C (350°F).",
      "Cut the bread in half lengthwise.",
      "In a bowl, mix softened butter with minced garlic and salt.",
      "Spread the garlic butter mixture over the cut sides of the bread.",
      "Sprinkle grated cheese evenly over the butter.",
      "Place on a baking sheet and bake for 10-15 minutes until cheese is melted and edges are golden.",
      "If using parsley, sprinkle it over the hot bread.",
      "Cut into slices and serve warm.",
    ],
    cookingTime: 15,
    difficulty: "Easy",
    servings: 4,
    tips: "For extra crunch, toast the bread for 5 minutes before adding the toppings.",
  },
  {
    id: "8",
    title: "Basic Beef Stir-Fry",
    ingredients: [
      "200g beef strips",
      "1 onion, sliced",
      "2 cloves garlic, minced",
      "1 bell pepper, sliced",
      "2 tbsp soy sauce",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
    ],
    matchedIngredients: [],
    missingIngredients: [],
    instructions: [
      "Heat olive oil in a large pan or wok over high heat.",
      "Add beef strips and cook for 2-3 minutes until browned.",
      "Add onion and garlic, cook for 2 minutes until fragrant.",
      "Add bell pepper and continue cooking for 3-4 minutes until vegetables are tender-crisp.",
      "Pour in soy sauce and stir to coat everything evenly.",
      "Season with salt and pepper to taste.",
      "Serve hot, optionally over rice.",
    ],
    cookingTime: 15,
    difficulty: "Medium",
    servings: 2,
    tips: "For more tender beef, slice it against the grain.",
  },
  {
    id: "9",
    title: "Simple Tomato Soup",
    ingredients: [
      "4 tomatoes, chopped",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "2 cups vegetable or chicken broth",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "Fresh basil (optional)",
    ],
    matchedIngredients: [],
    missingIngredients: [],
    instructions: [
      "Heat olive oil in a pot over medium heat. Add onion and cook until translucent.",
      "Add garlic and cook for another minute until fragrant.",
      "Add chopped tomatoes and cook for 5 minutes until they start to break down.",
      "Pour in broth, bring to a boil, then reduce heat and simmer for 15 minutes.",
      "Use an immersion blender to puree the soup until smooth (or transfer to a blender in batches).",
      "Season with salt and pepper to taste.",
      "Serve hot, garnished with fresh basil if available.",
    ],
    cookingTime: 30,
    difficulty: "Medium",
    servings: 4,
    tips: "For a creamier soup, add a splash of heavy cream at the end.",
  },
  {
    id: "10",
    title: "Buttery Mashed Potatoes",
    ingredients: [
      "4 large potatoes, peeled and cubed",
      "4 tbsp butter",
      "1/4 cup milk",
      "Salt and pepper to taste",
      "Chives for garnish (optional)",
    ],
    matchedIngredients: [],
    missingIngredients: [],
    instructions: [
      "Place potatoes in a large pot and cover with cold water. Add a pinch of salt.",
      "Bring to a boil, then reduce heat and simmer for 15-20 minutes until potatoes are tender.",
      "Drain potatoes and return them to the hot pot. Let them dry for a minute.",
      "Add butter and mash the potatoes.",
      "Gradually add milk while continuing to mash until desired consistency is reached.",
      "Season with salt and pepper to taste.",
      "Serve hot, garnished with chives if using.",
    ],
    cookingTime: 30,
    difficulty: "Easy",
    servings: 4,
    tips: "For extra smooth potatoes, use a ricer instead of a masher.",
  },
]

// Function to get recipes based on ingredients
export async function getRecipesByIngredients(userIngredients: string[]): Promise<Recipe[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Convert user ingredients to lowercase for case-insensitive matching
  const normalizedUserIngredients = userIngredients.map((ing) => ing.toLowerCase())

  // Filter and process recipes
  return (
    recipesData
      .map((recipe) => {
        // For each recipe, determine which ingredients match and which are missing
        const allIngredients = recipe.ingredients.map((ing) => {
          // Extract the main ingredient name (before the comma or first measurement)
          const mainIngredient = ing
            .split(",")[0]
            .replace(/^\d+\s*\w+\s+/, "")
            .trim()
          return mainIngredient.toLowerCase()
        })

        // Find matched ingredients
        const matchedIngredients = normalizedUserIngredients.filter((userIng) =>
          allIngredients.some((recipeIng) => recipeIng.includes(userIng)),
        )

        // Find missing main ingredients (excluding common items like salt, pepper, water)
        const commonItems = ["salt", "pepper", "water", "to taste"]
        const missingIngredients = allIngredients.filter(
          (ing) =>
            !matchedIngredients.some((match) => ing.includes(match)) &&
            !commonItems.some((common) => ing.includes(common)),
        )

        // Return recipe with matched and missing ingredients
        return {
          ...recipe,
          matchedIngredients,
          missingIngredients,
        }
      })
      // Filter to only include recipes with at least one matching ingredient
      .filter((recipe) => recipe.matchedIngredients.length > 0)
      // Sort by number of matching ingredients (descending)
      .sort((a, b) => b.matchedIngredients.length - a.matchedIngredients.length)
  )
}

// Function to get a recipe by ID
export async function getRecipeById(id: string): Promise<Recipe | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const recipe = recipesData.find((recipe) => recipe.id === id)

  if (!recipe) {
    return null
  }

  return recipe
}

