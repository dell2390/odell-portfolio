import { useState, useEffect } from "react"
import fetch from "cross-fetch"
import { Output } from "rss-parser"

import ContentList from "components/common/ContentList"
import Podcast from "components/common/Podcast"

export interface RSSPodcastsContentListProps {
    className?: string
    url: string

    title?: string
}

const RSSPodcastsContentList = ({ className, url, title }: RSSPodcastsContentListProps) => {
    const [feed, setFeed] = useState<Output<{}>>()

    useEffect(() => {
        let running = true

        if (!url) return
        ;(async () => {
            const fetchBaseUrl =
                process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""

            const res = await fetch(`${fetchBaseUrl}/api/rss?${new URLSearchParams({ url })}`)
            const _feed = await res.json()

            setFeed(_feed)
        })()

        return () => {
            running = false
        }
    }, [url, setFeed])

    return (
        <ContentList className={className} label={title ?? feed?.title}>
            {feed?.items.map((item, index) => (
                <Podcast
                    key={item.guid}
                    title={item.title ?? `#${index + 1}`}
                    series={title ?? feed?.title ?? ""}
                    src={feed.image?.url ?? ""}
                    description={item.summary ?? item.contentSnippet}
                    url={item.link}
                />
            ))}
        </ContentList>
    )
}

export default RSSPodcastsContentList
