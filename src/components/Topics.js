import React from "react"

import { Table } from 'react-bootstrap'

const Topics = props => {

  const topics = props.query.data.Author[0].Main_Categories

  if (topics.length === 0) return 'Not enough information to display.';

  let totalPercentage = 0

  const topicGen = topics.map((author, index) => {
    if (index === 0) {
      let poc = parseFloat(author.Percent_of_Coverage.toFixed(0))
      totalPercentage += poc
      return (
        <tr className="bg-warning" key={index} style={{marginBottom:5}}>
          <td style={{paddingLeft: 10 }}>{index + 1}</td>
          <td>{author.Main_Topic}</td>
          <td>{poc}%</td>
        </tr>
      )
    } if (index < 5) {
      let poc = parseFloat(author.Percent_of_Coverage.toFixed(0))
      totalPercentage += poc
      return (
        <tr key={index} style={{marginBottom:5}}>
          <td style={{ paddingLeft: 10 }}>{index + 1}</td>
          <td>{author.Main_Topic}</td>
          <td>{poc}%</td>
        </tr>
      )
    } if (index === 5) {
      return (
        <tr key={index} style={{marginBottom:5}}>
          <td style={{ paddingLeft: 10 }}>{index+ 1}</td>
          <td>Other</td>
          <td>{100 - totalPercentage}%</td>
        </tr>
      )
    }
    return null
  })
  return (
    <Table responsive hover borderless size="sm">
      <thead className="bg-secondary text-white">
        <tr style={{marginBottom:5}}>
          <td style={{ borderRadius: '3px 0 0 0', paddingLeft: 10 }}>Rank</td>
          <td>Topic</td>
          <td style={{ borderRadius: '0 3px 0 0' }}>Percentage of Coverage</td>
        </tr>
      </thead>
      <tbody>
        {topicGen}
      </tbody>
    </Table>
  )
}

export default Topics