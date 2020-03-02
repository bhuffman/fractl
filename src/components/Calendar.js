import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'
import moment from 'moment'

const Calendar = props => {

  const articles = props.query.data.Author[0].Article_Archive

  if(articles.length === 0) return 'Not enough information to display.';

  let dates, dateTo, yearHeight
  let datesData = []
  let dateCounts = {}

  dates = articles
    .filter(value => value.Date.year)
    .map((value, index) => {
      return moment(`${value.Date.year}-${value.Date.month}-${value.Date.day}`).unix()
    })
  dates.sort((a, b) => a - b)
  // dateFrom = moment.unix(dates[0]).format('YYYY-MM-DD')
  dateTo = moment.unix(dates[dates.length - 1]).format('YYYY-MM-DD')
  yearHeight = parseInt(dateTo.split('-')[0]) - 2018 >= 0 ? ((parseInt(dateTo.split('-')[0]) - 2018 + 1) * 140) + 50 : 0
  dates.forEach(x => {
    let mmddyy = moment.unix(x).format('YYYY-MM-DD')
    dateCounts[mmddyy] = (dateCounts[mmddyy] || 0) + 1
  })
  for (let [k, v] of Object.entries(dateCounts)) {
    datesData.push({"day": k, "value": v})
    
  }

  return (
    <div style={{ width: '800px', height: yearHeight, margin: '0 auto'}}>
      <ResponsiveCalendar
        data={datesData}
        from={'2018-01-02'}
        to={dateTo}
        margin={{ top: 30, right: 0, bottom: 40, left: 20 }}
        align="top-left"
        minValue={1}
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#46ad9c', '#e8c1a0', '#f47560']}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        daySpacing={1}
        // isInteractive={false}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 40,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          }
        ]}
      />
    </div>
  )
}

export default Calendar