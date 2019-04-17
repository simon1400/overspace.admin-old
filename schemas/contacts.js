import { FaRegAddressBook } from "react-icons/fa";

export default {
  name: 'contacts',
  title: 'Kontakty',
  type: 'document',
  icon: FaRegAddressBook,
  fields: [
    {
      name: 'title',
      title: 'Jmeno',
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
      title: 'Popis',
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
