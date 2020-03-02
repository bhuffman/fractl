export const getKeywordsBaseInfo = `
  query Term_Search($search_input:String, $min_pagerank:Float){
    Term_Search_Most_Associated_Keywords(search_input:$search_input){
      Keyword,
      Ranking,
    },
    Term_Search_Most_Associated_Entities(search_input:$search_input){
      Entity,
      Ranking,
    },
    Term_Search_Most_Associated_Domains (search_input:$search_input, min_pagerank:$min_pagerank){
      Domain,
      Open_Page_Rank,
      Domain_Authority,
      Ranking,
    },
    Term_Search_Most_Associated_Authors(search_input:$search_input, min_pagerank:$min_pagerank){
      Name,
      Emails,
      Twitter,
      MuckRack,
      Ranking,
    },
    Term_Search_Most_Associated_Topics(search_input:$search_input){
      Topic,
      Ranking,
    },
    Term_Search_Most_Associated_Articles(search_input:$search_input){
        URL,
        Date {
          year,
          month,
          day,
        },
        Title,
        Domain_Name,
        Score,
    }
  }
`