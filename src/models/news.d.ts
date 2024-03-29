export interface GoSource {
  domain: string;
  location: null;
}

export interface GoLabels {
  name: string;
}

export interface GoMatchedAuthors {
  id: null;
  name: string;
}

export interface GoKeywords {
  name: string;
  weight: number;
}

export interface GoTopics {
  name: string;
}

export interface GoCategories {
  name: string;
}

export interface GoEntities {
  data: string;
  type: string;
  mentions: number;
}

export interface GoCompanies {
  id: string;
  name: string;
  domains: string[];
  symbols: string[];
}

export interface GoSentiment {
  positive: number;
  negative: number;
  neutral: number;
}

export interface GoPeople {
  wikidataId: string;
  name: string;
}

export interface GoPlaces {
  osmId: string;
  road: string;
  suburb: string;
  city: string;
  county: string;
  state: string;
  postcode: string;
  country: string;
  countryCode: string;
  neighbourhood: string;
  coordinates: {
    lat: number;
    lon: number;
  };
}

export interface NyLegacy {
  xlarge: string;
  xlargewidth: integer;
  xlargeheight: integer;
}

export interface NyPerson {
  firstname: string;
  middlename: string;
  lastname: string;
  qualifier: string;
  title: string;
  role: string;
  organization: string;
  rank: integer;
}

export interface NyMultimedia {
  rank: integer;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: integer;
  width: integer;
  legacy: NyLegacy;
  crop_name: string;
}

export interface NyHeadline {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
}

export interface NyKeywords {
  name: string;
  value: string;
  rank: integer;
  major: string;
}

export interface NyByline {
  original: string;
  organization: string;
  person: NyPerson[];
}

export interface NaSource {
  id: string;
  name: string;
}

export interface OnAssets {
  type: string;
  mimeType: string;
  file: string;
  typeData: {
    altText: string;
    caption: string;
    credit: string;
    source: string;
    width: string;
    height: string;
    secureFile: string;
    displayCredit: string;
    mediaId: string;
    imageType: string;
    suppliersReference: string;
  };
}

export interface Goperigon {
  url: string;
  authorsByline: string;
  articleId: string;
  clusterId: string;
  source: GoSource;
  imageUrl: string;
  country: string;
  language: string;
  pubDate: string;
  addDate: string;
  refreshDate: string;
  score: number;
  title: string;
  description: string;
  content: string;
  medium: string;
  links: string[];
  labels: GoLabels[];
  matchedAuthors: GoMatchedAuthors[];
  claim: string;
  verdict: string;
  keywords: GoKeywords[];
  topics: GoTopics[];
  categories: GoCategories[];
  entities: GoEntities[];
  companies: GOCompanies[];
  sentiment: GoSentiment;
  summary: string;
  translation: string;
  translatedTitle: string;
  translatedDescription: string;
  translatedSummary: string;
  locations: [];
  reprint: boolean;
  reprintGroupId: string;
  places: GoPlaces[];
  people: GoPeople[];
}

export interface OnElements {
  id: string;
  relation: string;
  type: string;
  assets: OnAssets[];
}

export interface NewYorkArticles {
  abstract: string;
  web_url: string;
  snippet: string;
  print_page: integer;
  print_section: string;
  source: string;
  multimedia: NyMultimedia[];
  headline: NyHeadline;
  keywords: NyKeywords[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: NyByline;
  type_of_material: string;
  _id: string;
  word_count: integer;
  uri: string;
}

export interface NewsApi {
  source: NaSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface OpenNews {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: String;
  elements: OnElements[];
  author: string;
  fields: {
    trailText: string;
  };
}

export interface AllArticles {
  title: string;
  description: string;
  author: string;
  pubDate: string;
  imageUrl: string;
  id: string;
}

export interface ArticlesWithPages {
  data: AllArticles[];
  pages: number;
}
