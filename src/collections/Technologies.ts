import { type CollectionConfig } from "payload";

export const Technologies: CollectionConfig = {
  slug: "technologies",
  upload: true,
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "icon",
      type: "upload",
      relationTo: "media",
    },
  ],
};
