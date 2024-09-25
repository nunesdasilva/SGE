import { ISbStoriesParams, StoryblokBridgeConfigV2 } from "@storyblok/react";

export const sbParams: ISbStoriesParams = {
    version: "draft", // or 'published'
    resolve_relations: [
      "ContentPage.Header",
      "ContentPage.Footer",
    ] 
  };

export const sbBridgeParams: StoryblokBridgeConfigV2 = {
    resolveRelations: [
        "ContentPage.Header",
        "ContentPage.Footer",
      ] , 
      resolveLinks: 'story'
  };