import ActionButtonComponent from "@/components/blocks/ActionButton/ActionButtonComponent";
import ContentPageComponent from "@/components/blocks/ContentPage/ContentPageComponent";
import FixedHeaderBarComponent from "@/components/blocks/FixedHeaderBar/FixedHeaderBarComponent";
import LanguageMenuComponent from "@/components/blocks/LanguageMenu/LanguageMenuComponent";
import { apiPlugin, storyblokInit } from "@storyblok/react";

storyblokInit({
    accessToken: process.env.sbToken, 
    use: [apiPlugin],
    components: {
        ContentPage: ContentPageComponent,
        FixedHeaderBar: FixedHeaderBarComponent,
        ActionButton: ActionButtonComponent,
        LanguageMenu: LanguageMenuComponent,
    },
    apiOptions: {
        region: ''
    }

})