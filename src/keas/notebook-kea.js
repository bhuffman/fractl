import { kea } from "kea"
import { append, set, lensIndex, remove, mergeRight } from "ramda"

export const NotebookKea = kea({
  path: () => ["scenes", "user", "notebook"],
  actions: () => ({
    setArticles: content => ({ content }),
    setTopics: content => ({ content }),
    setEntities: content => ({ content }),
    setKeywords: content => ({ content }),
    setAuthors: content => ({ content })
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
    ]
  })
})
