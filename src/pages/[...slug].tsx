import { NextPageContext } from "next";
import { getStoryblokApi, ISbStoriesParams, StoryblokComponent, useStoryblokState } from "@storyblok/react";
import { sbParams } from "@/models/storyblokModels";
import { ContentContainer } from "@/components/contentcontainer/ContentContainer";

interface SBPageProps {
  story: any
}

export default function Home({ story }: SBPageProps) {
  return <ContentContainer story={story} />
}

export async function getServerSideProps(props: NextPageContext) {
  const slug = props.req?.url?.split("?")[0]
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      revalidate: 3600,
    },
  };
}