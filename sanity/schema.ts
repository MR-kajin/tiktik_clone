import { type SchemaTypeDefinition } from 'sanity'

const schemaTypes = [
  {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'User Name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string',
        }
    ]
},
{
  name: 'postedBy',
  title: 'Posted By',
  type: 'reference',
  to: [{type: 'user'}]
},
{
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
      {
          name: 'postedBy',
          title: 'Posted by',
          type: 'postedBy'
      },
      {
          name: 'comment',
          title: 'Comment',
          type: 'string',
      }
  ]
},
{
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
        },
      ],
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'comment' }],
    },
    {
      name: 'topic',
      title: 'Topic',
      type: 'string',
    },
  ],
}
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
