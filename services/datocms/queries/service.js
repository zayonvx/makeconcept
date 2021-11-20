export const SERVICE_PAGE_QUERY = `
  service {
    title
  }
  allServiceitems {
    image {
      url
    }
    title
    description
    moredescription {
        value
    }
  }
`