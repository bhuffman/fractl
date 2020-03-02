import React from "react"

import { Button, Badge } from 'react-bootstrap'

const SimilarAuthors = props => {

  let entities

  if (props.query) {
    entities = props.query.data.Author[0].Similar_Authors.map((author, index) => {
      return (
        <Button variant="info" key={index} size="sm" className="mr-2 mb-2" onClick={() => props.changeSearch('authors',author.Similar_Author)}>
          {author.Similar_Author} <Badge variant="light">{parseFloat(author.Similarity_Score * 100).toFixed(0)}% Match</Badge>
        </Button>
      )
    })
  } else {
    entities = props.data.map((author,index) => {
      return (
        <Button variant="info" key={index} size="sm" className="mr-2 mb-2" onClick={() => props.changeAuthor('authors',author[props.kv])}>
          {author[props.kv]}
        </Button>
      )
    })
  }

 
  return (
    <div style={{width:800}}>
      {entities}
    </div>
  )
}

export default SimilarAuthors