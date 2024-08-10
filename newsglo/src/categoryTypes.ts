export interface ArticleCategory {
    status: string
    copyright: string
    response: Response
  }
  
  export interface Response {
    docs: Doc[]
    meta: Meta
  }
  
  export interface Doc {
    abstract: string
    web_url: string
    snippet: string
    lead_paragraph: string
    source: string
    multimedia: any[]
    headline: Headline
    keywords: Keyword[]
    pub_date: string
    document_type: string
    news_desk: string
    section_name: string
    byline: Byline
    type_of_material: string
    _id: string
    word_count: number
    uri: string
  }
  
  export interface Headline {
    main: string
    kicker?: string
    content_kicker: any
    print_headline: string
    name: any
    seo: any
    sub: any
  }
  
  export interface Keyword {
    name: string
    value: string
    rank: number
    major: string
  }
  
  export interface Byline {
    original?: string
    person: Person[]
    organization: any
  }
  
  export interface Person {
    firstname: string
    middlename?: string
    lastname: string
    qualifier: any
    title: any
    role: string
    organization: string
    rank: number
  }
  
  export interface Meta {
    hits: number
    offset: number
    time: number
  }
  