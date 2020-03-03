import { kea } from "kea"
import { append, set, lensIndex, remove, mergeRight } from "ramda"

export const NotebookKea = kea({
  path: () => ["scenes", "user", "notebook"],
  actions: () => ({
    setArticles: content => ({ content }),
    setTopics: content => ({ content }),
    setEntities: content => ({ content }),
    setKeywords: content => ({ content }),
    setAuthors: content => ({ content }),
    setLayout: content => ({ content })
  }),
  reducers: ({ actions }) => ({
    articles: [
      [],
      {
        [actions.setArticles]: (_, payload) => payload.content
      }
    ],
    topics: [
      [],
      {
        [actions.setTopics]: (_, payload) => payload.content
      }
    ],
    entities: [
      [],
      {
        [actions.setEntities]: (_, payload) => payload.content
      }
    ],
    keywords: [
      [],
      {
        [actions.setKeywords]: (_, payload) => payload.content
      }
    ],
    authors: [
      [],
      {
        [actions.setAuthors]: (_, payload) => payload.content
      }
    ],
    layout: [
      {
        lg: [
          { i: "article", x: 0, y: 0, w: 1, h: 2 },
          { i: "meta", x: 1, y: 0, w: 3, h: 2, minH: 2 },
          { i: "keywords", x: 4, y: 0, w: 1, h: 2 },
          { i: "backlinksIn", x: 4, y: 0, w: 1, h: 2 }
        ],
        md: [
          { i: "article", x: 0, y: 0, w: 1, h: 2 },
          { i: "meta", x: 1, y: 0, w: 3, h: 2, minH: 2 },
          { i: "keywords", x: 4, y: 0, w: 1, h: 2 },
          { i: "backlinksIn", x: 4, y: 0, w: 1, h: 2 }
        ],
        sm: [
          { i: "article", x: 0, y: 0, w: 1, h: 2 },
          { i: "meta", x: 1, y: 0, w: 3, h: 2, minH: 2 },
          { i: "keywords", x: 4, y: 0, w: 1, h: 2 },
          { i: "backlinksIn", x: 4, y: 0, w: 1, h: 2 }
        ],
        xs: [
          { i: "article", x: 0, y: 0, w: 1, h: 2 },
          { i: "meta", x: 1, y: 0, w: 3, h: 2, minH: 2 },
          { i: "keywords", x: 4, y: 0, w: 1, h: 2 },
          { i: "backlinksIn", x: 4, y: 0, w: 1, h: 2 }
        ],
        xxs: [
          { i: "article", x: 0, y: 0, w: 1, h: 2 },
          { i: "meta", x: 1, y: 0, w: 3, h: 2, minH: 2 },
          { i: "keywords", x: 4, y: 0, w: 1, h: 2 },
          { i: "backlinksIn", x: 4, y: 0, w: 1, h: 2 }
        ]
      },
      { persist: true },
      {
        [actions.setLayout]: (_, payload) => payload.content
      }
    ]
  })
})
