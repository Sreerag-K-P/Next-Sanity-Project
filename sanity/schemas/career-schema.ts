const career = {
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
    },
    {
      name: 'qualification',
      title: 'Qualification',
      type: 'string',
    },
    {
      name: 'aboutthejob',
      title: 'About the job',
      type: 'string',
    },
    {
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'string',
    },
  ],
}
export default career
