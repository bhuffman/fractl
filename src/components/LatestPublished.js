import React from "react"

import { Card } from 'react-bootstrap'
import parseDomain from 'parse-domain'

const LatestPublished = props => {

  let articles
  
  console.log('thisdata',props.data)
  switch(props.page) {
    case('keywords'):
      articles = props.data
      break
    case('authors'):
      articles = props.query.data.Author[0].Article_Archive
      break
    default:
      articles = props.query.data.Author[0].Article_Archive
  }
  

  const [numarticles, setNumarticles] = React.useState(5)

  const articlelist = articles.map((article, index) => {
      if (numarticles > index) {
        return (
          <Card className="p-3 mb-2" key={index}>
            <Card.Title>
              <a href={article.URL} target="blank" key={index}>
                {article.Title}
              </a>
            </Card.Title>
            {article.Date.year ? (
              <Card.Subtitle className="text-muted font-weight-normal">
                {parseDomain(article.URL).domain+'.'+parseDomain(article.URL).tld} - Published on {article.Date.month}/{article.Date.day}/{article.Date.year} 
              </Card.Subtitle>
            ) : (
              <Card.Subtitle className="text-muted font-weight-normal">
                {parseDomain(article.URL).domain+'.'+parseDomain(article.URL).tld}
              </Card.Subtitle>
            )}
            
          </Card>
        )
      } return null
    }
  )

  return (
    <>
      {articlelist}
      {articles.length > numarticles ? (
        <div className="my-2">
          <u onClick={() => setNumarticles(numarticles+5)} style={{ cursor: 'pointer' }} className="text-muted">
            + Load 5 more articles
          </u>
        </div>
      ) : null}
    </>
  )
}

export default LatestPublished