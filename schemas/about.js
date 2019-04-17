import { FaInfo } from "react-icons/fa";

export default {
  name: 'about',
  title: 'About',
  type: 'document',
  icon: FaInfo,
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
      short: 'short',
      img: 'images'
    },
    prepare(selection) {
      const {title, img, short} = selection
      return {
        title: `${short}. ${title}`,
        media: img[0]
      }
    }
  }
}
