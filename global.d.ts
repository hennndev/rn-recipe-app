
/// <reference types="nativewind/types" />`
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'



interface RecipeTypes {
    id: number
    name: string
    imagePath: any
    description: string
    duration: string
    persons: string
    ingredients: string[]
    instructions: string[]
}
