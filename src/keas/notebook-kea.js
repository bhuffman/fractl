import { kea } from "kea"
import {
  append,
  set,
  lensIndex,
  remove,
  mergeRight,
  prepend,
  without
} from "ramda"

export const NotebookKea = kea({
  path: () => ["scenes", "user", "notebook"],
  actions: () => ({
    setActive: active => ({ active }),
    addStarred: (starred, path) => ({ starred, path }),
    removeStarred: (starred, path) => ({ starred, path }),
    setLayout: content => ({ content })
  }),
  reducers: ({ actions }) => ({
    active: [
      {
        articleUrl:
          "https://www.nytimes.com/2019/03/12/us/college-admissions-cheating-scandal.html"
      },
      {
        [actions.setActive]: (state, payload) =>
          mergeRight(state, payload.active)
      }
    ],
    starred: [
      {
        articles: [],
        topics: [],
        entities: [],
        keywords: [],
        authors: []
      },
      { persist: true },
      {
        [actions.addStarred]: (state, payload) => ({
          ...state,
          [payload.path]: prepend(payload.starred, state[payload.path])
        }),
        [actions.removeStarred]: (state, payload) => ({
          ...state,
          [payload.path]: without(payload.starred, state[payload.path])
        })
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
