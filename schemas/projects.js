import { FaHome } from "react-icons/fa";

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: FaHome,
  fields: [
    {
      name: 'title',
      title: 'Nazev',
      type: 'string'
    },
    {
      name: 'short',
      title: 'Poradi',
      type: 'number'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'images',
      title: 'Obrazky',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      short: 'short',
      img: 'images'
    },
    prepare(selection) {
      const {title, slug, img, short} = selection
      return {
        title: `${short}. ${title}`,
        subtitle: `Link na full: ${slug ? slug.current : 'unknown'}`,
        media: img[0]
      }
    }
  }
}
