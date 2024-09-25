import { Button } from "@mui/material"
import { SbBlokData, StoryblokComponent } from "@storyblok/react"
import styles from './LanguageMenuComponent.module.scss'
interface LanguageMenuProps {
    blok: SbBlokData
}
export const LanguageMenuComponent = ({ blok }: LanguageMenuProps) => {
    return <main className={styles["language-menu"]}>
        Language menu
    </main>
}
export default LanguageMenuComponent