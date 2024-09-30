"use client"

import { FeedTemplate } from "@/templates/feed"
import { Suspense } from "react"

export default function Feed() {
    return (
        <>
        <Suspense fallback={<h2>Carregando...</h2>}>
            <FeedTemplate />
        </Suspense>
        </>
    )
}