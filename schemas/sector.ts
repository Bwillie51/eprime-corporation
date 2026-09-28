export default {
  name: 'sector',
  title: 'Corporate Sectors',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Sector Name',
      type: 'string',
      description: 'e.g., Construction & Civil, Information Technology'
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      description: 'The unique path extension (e.g., construction, it)'
    },
    {
      name: 'tagline',
      title: 'Sector Motto / Tagline',
      type: 'string',
      description: 'Motto displayed inside the dark header block'
    },
    {
      name: 'description',
      title: 'Division Operations Details',
      type: 'text',
      description: 'The full paragraph outlining what this division executes'
    },
        {
      name: 'backgroundSlideshow',
      title: 'Home Page Background Slideshow Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload multiple corporate background images here. They will automatically cross-fade every 3 to 4 seconds on the live main dashboard screen.'
    },

    {
      name: 'image',
      title: 'Sector Header Background Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'The exact image appearing on the main page grid that mirrors as the background header backdrop'
    }
  ]
}
