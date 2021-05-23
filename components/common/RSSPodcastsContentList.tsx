import { useState, useEffect } from "react"
import fetch from "cross-fetch"
import { Output } from "rss-parser"

import PodcastsContentList from "components/common/PodcastsContentList"

export interface RSSPodcastsContentListProps {
    className?: string
    rss: string

    title?: string
    chunkSize?: number
}

const RSSPodcastsContentList = ({
    className,
    rss,
    title,
    chunkSize,
}: RSSPodcastsContentListProps) => {
    const [feed, setFeed] = useState<Output<{}>>()

    useEffect(() => {
        let running = true

        if (!rss) return
        ;(async () => {
            const fetchBaseUrl =
                process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""

            try {
                const res = await fetch(
                    `${fetchBaseUrl}/api/rss?${new URLSearchParams({ url: rss })}`
                )
                const _feed = await res.json()

                if (running) setFeed(_feed)
            } catch (e) {
                console.log("Error Fetching RSS feed")
            }
        })()

        return () => {
            running = false
        }
    }, [rss, setFeed])

    return (
        <PodcastsContentList
            className={className}
            title={title ?? feed?.title}
            feed={
                feed?.items.map((item, index) => ({
                    id: item.guid ?? index,
                    title: item.title ?? `#${index + 1}`,
                    series: title ?? feed?.title ?? "",
                    src: feed?.image?.url ?? "",
                    description: item.summary ?? item.contentSnippet,
                    url: item.link,
                })) ?? []
            }
            chunkSize={chunkSize}
        />
    )
}

export default RSSPodcastsContentList
