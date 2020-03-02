export const getAuthorsMainCategory = `
  query GetAuthors($name: String!){
      Author(name: $name){
        Main_Categories(name: $name){
          Main_Topic,
          Percent_of_Coverage,
        }
      }
    }`
export const getAuthorsSubCategories = `
  query GetAuthors($name: String!){
      Author(name: $name){
        Sub_Categories(name: $name){
          Sub_Topic,
          Percent_of_Coverage,
        }
      }
    }`
export const getAuthorsDiscussesEntities = `
  query GetAuthors($name: String!){
      Author(name: $name){
        Discusses_Entities(name: $name){
          Entity,
          Mentions,
        }
      }
    }`
export const getAuthorsDiscussesKeywords = `
  query GetAuthors($name: String!){
      Author(name: $name){
         Discusses_Keywords(name: $name){
          Keyword,
          Mentions,
        }
      }
    }`
export const getAuthorsPublishedDomains = `
  query GetAuthors($name: String!){
      Author(name: $name){
        Published_Domains(name: $name){
          Domain_Name,
          Open_Page_Rank,
          Number_Of_Articles,
          Alexa_Rank,
          Domain_Authority,
          Location,
          Moz_Rank,
        },
        Article_Archive(name: $name){
          URL,
          Date {
            year,
            month,
            day
          },
          Title,
        }
      }
    }`
export const getAuthorsArticleArchive = `
  query GetAuthors($name: String!){
      Author(name: $name){
        Article_Archive(name: $name){
          URL,
          Date {
            year,
            month,
            day
          },
          Title,
        }
      }
    }`
export const getAuthorsSimilarAuthors = `
  query GetAuthors($name: String!, $pagerank: Float!){
      Author(name: $name){
        Similar_Authors(name: $name, min_pagerank: $pagerank){
          Similar_Author,
          Emails,
          MuckRack,
          Similarity_Score,
        }
      }
    }`

export const getAuthorsBaseInfo = `
  query GetAuthors($name: String!)
    {
      Author(name: $name){
        name,
        emails,
        twitter,
        position,
        company,
        companies,
        current_company,
        current_company_size,
        current_company_website,
        emails,
        facebook,
        klout,
        known_domains,
        linkedin,
        location,
        medium,
        phone_number
      }
    }
  `