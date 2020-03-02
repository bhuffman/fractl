import React from 'react'

import '../styles/WordCloud.css'

const WordCloud = props => {

  let entities

  if(props.query){
    entities = props.query.data.Author[0][props.endpoint].map(e => e[props.kv])
  } else {
    entities = props.data.map(e => e[props.kv])
  }

  const fontSizes = {
    xl: {fontSize:'2em', backgroundColor:"#fff", borderRadius: '4px', cursor:'pointer' },
    lg: {fontSize:'1.5em', backgroundColor:"#fff", borderRadius: '4px', cursor:'pointer' },
    md: {fontSize:'1.25em', backgroundColor:"#fff", borderRadius: '4px', cursor:'pointer' },
    sm: {fontSize:'1em', backgroundColor:"#fff", borderRadius: '4px', cursor:'pointer' },
    xs: {fontSize:'.75em', backgroundColor:"#fff", borderRadius: '4px', cursor:'pointer' },
  }

  const changeSearchHandler = term => {
    if(props.changeSearch){
      props.changeSearch('keywords',term)
    }
  }

  const entityHandler = entities.map((word, index) => {
    if (index < 5) return <span style={fontSizes.xl} className="border mr-1 mb-1 py-2 px-3 d-inline-block wordCloudItem" onClick={()=>changeSearchHandler(word)} key={index}>{word}</span>
    if (index < 10) return <span style={fontSizes.lg} className="border mr-1 mb-1 py-2 px-3 d-inline-block wordCloudItem" onClick={()=>changeSearchHandler(word)} key={index}>{word}</span>
    if (index < 20) return <span style={fontSizes.md} className="border mr-1 mb-1 py-2 px-3 d-inline-block wordCloudItem" onClick={()=>changeSearchHandler(word)} key={index}>{word}</span>
    if (index < 30) return <span style={fontSizes.sm} className="border mr-1 mb-1 py-2 px-3 d-inline-block wordCloudItem" onClick={()=>changeSearchHandler(word)} key={index}>{word}</span>
    return <span style={fontSizes.xs} className="border mr-1 mb-1 py-2 px-3 d-inline-block wordCloudItem" onClick={() => changeSearchHandler(word)} key={index}>{word}</span>
  })

  return (
    <>
      {entityHandler}
    </>
    )
}

export default WordCloud