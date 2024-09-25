
import { ReactNode } from "react";
import '@/storyblok/storyblokInit'

interface StoryblokProviderProps {
    readonly children: ReactNode
}
export default function StoryblokProvider({ children }: StoryblokProviderProps) {
    return children
}