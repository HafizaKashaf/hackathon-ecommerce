// schemas/blockContent
export default {
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
      {
        type: 'block', // This allows text with formatting
      },
      {
        type: 'image', // Optional: for adding images
        options: {
          hotspot: true, // Enables image cropping
        },
      },
    ],
  };
  