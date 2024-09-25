
import StoryblokProvider from "@/providers/StoryblokProvider";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

export const RootLayoutComponent = ({ children }: LayoutProps) => {
    return <StoryblokProvider>
        {children}
    </StoryblokProvider>
}
export default RootLayoutComponent