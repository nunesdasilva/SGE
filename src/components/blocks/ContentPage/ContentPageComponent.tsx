import { Button } from "@mui/material"
import { SbBlokData, StoryblokComponent } from "@storyblok/react"
import styles from './ContentPageComponent.module.scss'
interface ContentPageProps {
    blok: any
}
export const ContentPageComponent = ({ blok }: ContentPageProps) => {
    return <main className={styles["content-page"]}>
        { blok?.Content && blok.Content.map((c:any)=> (
            <StoryblokComponent key={c._uid} blok={c} />
        ))}
    </main>
    
    
}
export default ContentPageComponent