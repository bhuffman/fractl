import React, { useEffect, useRef, useState } from "react"
import {
  compose,
  mergeRight,
  defaultTo,
  path,
  length,
  head,
  isNil
} from "ramda"
import "../../styles/resizable-styles.css"
import "../../styles/grid-styles.css"
import { Responsive, WidthProvider } from "react-grid-layout"
import { NotebookKea } from "../../keas/notebook-kea"
import { makeStyles } from "@material-ui/core/styles"
import CardArticle from "./card-article"
import CardMeta from "./card-meta"
import CardKeyword from "./card-keywords"
import CardBacklinksIn from "./card-backlinks-in"
import testArticle from "../../assets/test.json"

// import { useQuery } from "urql"
import { useQuery } from "@apollo/react-hooks"
import { getArticle } from "../../queriesArticles"

const ResponsiveGridLayout = WidthProvider(Responsive)

const useStyles = makeStyles(theme => ({
  count: {
    border: "1px solid gray",
    borderRadius: "10px",
    position: "absolute",
    background: "white",
    height: "18px",
    width: "18px",
    top: "30px",
    left: "47px",
    fontSize: "10px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "steelblue"
  },
  root: {
    height: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}))

const DrawerItems = props => {
  const classes = useStyles()
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
      >
        <div key="article">
          {articleData && <CardArticle data={articleData} />}
        </div>
        <div key="meta">{articleData && <CardMeta data={articleData} />}</div>
        <div key="keywords">
          {articleData && <CardKeyword data={articleData} />}
        </div>
        <div key="backlinksIn">
          {articleData && <CardBacklinksIn data={articleData} />}
        </div>
      </ResponsiveGridLayout>
    </div>
  )
}

export default compose(NotebookKea)(DrawerItems)
