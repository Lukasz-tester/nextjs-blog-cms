export interface Post {
    title: string,
    slug: { current: string },
    publishedAt: string,
    excerpt: string,
    body: unknown,
    tags: Array<Tag>,
    _id: string
}

export interface Tag {
    name: string,
    slug: { current: string },
    _id: string 
}