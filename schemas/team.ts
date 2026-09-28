export default {
  name: 'team',
  title: 'Professional Team Profiles',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Professional Full Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Corporate Title / Role',
      type: 'string',
      description: 'e.g., ICT Systems Integration Lead'
    },
    {
      name: 'sector',
      title: 'Relevant Operational Division',
      type: 'string',
      description: 'e.g., Construction & Civil, Information Technology'
    },
    // 🌟 ADD THIS NEW IMAGE FIELD OBJECT RIGHT HERE:
    {
      name: 'image',
      title: 'Profile Picture',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload a professional headshot. If left blank, the corporate logo will be used as a default fallback.'
    },
    {
      name: 'bio',
      title: 'Scope of Work Description',
      type: 'text',
      description: 'Brief overview profile explaining what this manager executes'
    }
  ]
}
