import { ReactNode, useEffect } from "react"
import styles from "./ContentContainer.module.scss"
import { ISbStoryData, StoryblokComponent, useStoryblok, useStoryblokState } from "@storyblok/react"
import { sbBridgeParams, sbParams } from "@/models/storyblokModels"
interface ContentProps {
    story: ISbStoryData
}
export const ContentContainer = ({ story }:ContentProps) => {
    useStoryblok(story.full_slug, sbParams, sbBridgeParams)
    return <main className={styles["content-container"]}>
        <StoryblokComponent blok={story.content} />
    </main>

}