import { Button } from "@mui/material"
import { SbBlokData, StoryblokComponent } from "@storyblok/react"
import styles from './FixedHeaderBarComponent.module.scss'

interface FixedHeaderBarProps {
    blok: any
}
export const FixedHeaderBarComponent = ({ blok }: FixedHeaderBarProps) => {
    return <main className={styles["fixed-header"]}>
        {blok?.Components && blok.Components.map((c: any) => (
            <StoryblokComponent key={c._uid} blok={c} />
        ))}
    </main>
}
export default FixedHeaderBarComponent