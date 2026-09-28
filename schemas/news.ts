export default {
  name: 'news',
  title: 'Corporate News & Media',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article / Bulletin Title',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'string',
      description: 'e.g., September 2026'
    },
    {
      name: 'category',
      title: 'Media Category Tag',
      type: 'string',
      description: 'e.g., Announcements, Operations'
    },
    {
      name: 'summary',
      title: 'Brief Preview Summary',
      type: 'text',
      description: 'Short two-sentence intro text appearing inside your card preview boxes'
    },
    {
      name: 'content',
      title: 'Full Article Narrative Content',
      type: 'text',
      description: 'The complete detailed article text that loads inside the right display tray on desktop or expands inline on mobile'
    },
    {
      name: 'image',
      title: 'News Thumbnail Photo',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}
