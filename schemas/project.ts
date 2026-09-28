export default {
  name: 'project',
  title: 'Latest Sector Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string'
    },
    {
      name: 'sectorRef',
      title: 'Associated Division / Sector',
      type: 'reference',
      to: [{ type: 'sector' }],
      description: 'Link this project directly to its matching corporate division'
    },
    {
      name: 'image',
      title: 'Project Showcase Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload the featured project graphic to replace the dark placeholder box layout.'
    },
    {
      name: 'client',
      title: 'Client Entity Name',
      type: 'string',
      description: 'e.g., Enga Provincial Administration'
    },
    {
      name: 'date',
      title: 'Date Uploaded / Logged',
      type: 'string',
      description: 'e.g., September 2026'
    },
    {
      name: 'amount',
      title: 'Project Valuation Portfolio Amount',
      type: 'string',
      description: 'Financial asset worth (e.g., K2,450,000.00)'
    },
    {
      name: 'description',
      title: 'Scope & Execution Narrative',
      type: 'text',
      description: 'Full narrative that collapses and expands using your custom Read More button'
    }
  ]
}
