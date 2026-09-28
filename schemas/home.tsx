export default {
  name: 'homeSettings',
  title: 'Home Page Configuration',
  type: 'document',
  // Restrict editing controls to a single corporate instance setting block
  __experimental_actions: ['update', 'publish'], 
  fields: [
    {
      name: 'title',
      title: 'Main Corporate Title',
      type: 'string',
      initialValue: 'ePrime Corporation Limited'
    },
    {
      name: 'tagline',
      title: 'Company Tagline',
      type: 'string',
      initialValue: 'Powering Enterprise. Enabling Growth.'
    },
    {
      name: 'brandPromise',
      title: 'Official Brand Promise Text',
      type: 'string',
      initialValue: 'We are committed to delivering quality products and Services'
    },
    {
      name: 'backgroundSlideshow',
      title: 'Home Background Slideshow Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload multiple corporate background images here. They will automatically cross-fade every 3 to 4 seconds on the live main website.'
    }
  ]
}
