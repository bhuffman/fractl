import React from "react"
import { Table } from 'react-bootstrap'

import parseDomain from 'parse-domain'
import Anime from 'react-anime'

import '../styles/PublishedIn.css'


const PublishedIn = props => {

  const domains = props.query.data.Author[0].Published_Domains
  const articles = props.query.data.Author[0].Article_Archive

  const [getNumdomains, setNumdomains] = React.useState(10)
  // eslint-disable-next-line
  const [getDomains, setDomains] = React.useState(domains.sort((a,b)=>b.Number_Of_Articles-a.Number_Of_Articles))
  const [getIndexShow, setIndexShow] = React.useState()
  const [getExpanded, setExpanded] = React.useState(false)

  const indexHandler = index => {
    setExpanded(false)
    if (getIndexShow === index) {
      setIndexShow()
    } else {
      setIndexShow(index)
    }
  }

  const articleHandler = domain => {
    
    const filteredDomains = articles.filter(res => {
      const parsedDomain = parseDomain(res.URL).domain + '.' + parseDomain(res.URL).tld
      return parsedDomain === domain
    })

    if (filteredDomains.length === 0) {
      return(
        <ul className="list-group list-group-flush">
          <li className="list-group-item" key="noitemsfound">No items found.</li>
        </ul>
      )
    }
    const constructedListItems = filteredDomains
      .filter((res,index)=>{
        if (!getExpanded) {
          return index < 5
        } return true
      })
      .map((res,index)=>{
        return (
          <li className="list-group-item" key={index}>
            <a href={res.URL} key={res.URL} target='_blank' rel="noopener noreferrer">{res.Title}</a>
          </li>
        )
      })
    return (
      <ul className="list-group list-group-flush publishedin-links">
        <Anime translateY={['-1em', 0]}
          opacity={[0, 1]}
          easing="easeOutBack"
          duration={200}
          delay={(el, index) => {
            if (index > 5) return 50
            return index * 10
            }}>
          {constructedListItems}
        </Anime>
        {filteredDomains.length > 5 && !getExpanded ? (
          <li className="list-group-item" key="expander">
            <span onClick={() => setExpanded(true)} style={{cursor:'pointer'}} className="text-primary" key="showallarticles">
              + Show all articles
            </span>
          </li>
        ) : null }
      </ul>
    )
  }

  const domainlist = getDomains.map((domain, index) => {
    let roundedPageRank = parseFloat(domain.Open_Page_Rank.toFixed(2))
    if (getNumdomains > index) {
      if (index === 0) {
        return (
          <React.Fragment key={domain+'thing'}>
            <tr className="bg-warning" key={index} style={{ marginBottom: 5, cursor: 'pointer' }} onClick={()=>indexHandler(index)}>
              <td style={{paddingLeft: 10}} key="firstdomain">▸ <u>{domain.Domain_Name}</u></td>
              <td key="roundedprmain">{roundedPageRank}</td>
              <td key="domnumarticles">{domain.Number_Of_Articles}</td>
            </tr>
            {getIndexShow === index ? (
              <>
              <tr style={{ backgroundColor: 'transparent' }}>
                <td colSpan={3} key="articlehandler" style={{ padding: '10px 0' }}>
                  {articleHandler(domain.Domain_Name)}
                </td>
              </tr>
              </>
            ) : null}
          </React.Fragment>)
      } else {
        return (
          <React.Fragment key={domain + index}>
            <tr key={index} style={{ cursor: 'pointer' }} onClick={() => indexHandler(index)}>
              <td style={{paddingLeft: 10 }} key="domainname">▸ <u>{domain.Domain_Name}</u></td>
              <td key="roundedpr">{roundedPageRank}</td>
              <td key="numarticles">{domain.Number_Of_Articles}</td>
            </tr>
            {getIndexShow === index ? (
              <tr style={{ backgroundColor: 'transparent' }}>
                <td colSpan={3} key="articlehandler" style={{ padding: '10px 0' }}>
                  {articleHandler(domain.Domain_Name)}
                </td>
              </tr>
            ) : null}
          </React.Fragment>)
      }
    } return null
  })


  return (
    <>
    <Table responsive hover borderless size="sm">
      <thead className="bg-secondary text-white">
        <tr style={{ marginBottom: 5 }}>
          <td style={{ borderRadius: '3px 0 0 0', paddingLeft: 10 }} key="domain">Domain</td>
          <td key="openpr">Open Page Rank</td>
          <td style={{ borderRadius: '0 3px 0 0' }} key='numpubd'>Num. Articles Published</td>
        </tr>
      </thead>
      <tbody>
        {domainlist}
      </tbody>
    </Table>
    { getNumdomains === 10 && domains.length > getNumdomains ? (
      <div className="mt-1 mb-2">
        <u onClick={() => setNumdomains(getNumdomains + 5)} style={{ cursor: 'pointer' }} className="text-muted">
          + Show 10 more domains
        </u>
      </div>
    ) : null}
    </>
  )
}

export default PublishedIn