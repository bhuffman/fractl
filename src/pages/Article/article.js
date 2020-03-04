import React from "react"
import { compose, defaultTo, path, head, isNil } from "ramda"
import "../../styles/resizable-styles.css"
import "../../styles/grid-styles.css"
import { Responsive, WidthProvider } from "react-grid-layout"
import { NotebookKea } from "../../keas/notebook-kea"
import CardArticle from "./card-article"
import CardMeta from "./card-meta"
import CardKeyword from "./card-keywords"
import CardBacklinksIn from "./card-backlinks"
import testArticle from "../../assets/test.json"

import { useQuery } from "@apollo/react-hooks"
import { getArticle } from "../../queriesArticles"

const ResponsiveGridLayout = WidthProvider(Responsive)

const DrawerItems = props => {
  const { loading, error, data } = useQuery(getArticle, {
    variables: {
      URL: props.active.articleUrl
    }
  })

  const articleData =
    loading || isNil(data) ? null : head(defaultTo([], path(["Article"], data)))
  return (
    <div>
      <ResponsiveGridLayout
        className="layout"
        layouts={props.layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 8, md: 6, sm: 2, xs: 1, xxs: 1 }}
        onLayoutChange={(l, a) => {
          props.actions.setLayout(a)
        }}
        draggableHandle=".dragArea"
      >
        <div key="article">
          <div className={"dragArea"} />
          {articleData && <CardArticle data={articleData} />}
        </div>
        <div key="meta">
          <div className={"dragArea"} />
          {articleData && <CardMeta data={articleData} />}
        </div>
        <div key="keywords">
          <div className={"dragArea"} />
          {articleData && <CardKeyword data={articleData} />}
        </div>
        <div key="backlinksIn">
          <div className={"dragArea"} />
          {articleData && (
            <CardBacklinksIn
              data={articleData}
              links={articleData.Links_To}
              title={"Backlinks In "}
            />
          )}
        </div>
        <div key="backlinksOut">
          <div className={"dragArea"} />
          {articleData && (
            <CardBacklinksIn
              data={articleData}
              links={articleData.Links_From}
              title={"Backlinks Out "}
            />
          )}
        </div>
      </ResponsiveGridLayout>
    </div>
  )
}

export default compose(NotebookKea)(DrawerItems)
