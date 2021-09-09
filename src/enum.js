export const APISource = { 
    api_endpoint: "https://newsapi.org/v2/",
    api_key: "24483fff9c5d4ef2af63936f9c90a671"
 };
 
 export const category = {
    apple: "everything?q=apple&from=2021-09-08&to=2021-09-08&sortBy=popularity",
    tech_crunch: "top-headlines?sources=techcrunch",
    wall_street: "everything?domains=wsj.com",
    tesla: "everything?q=tesla&from=2021-08-09&sortBy=publishedAt"
 }

 export const categoryMapper = {
    apple : "APPLE",
    tech_crunch : "TECHCRUNCH",
    wall_street : "WALL STREET JOURNAL",
    tesla : "TESLA"
 }