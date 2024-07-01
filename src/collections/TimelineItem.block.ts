import { type Block } from "payload";

export const TimelineItem: Block = {
  slug: "timeline-item",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "from",
      type: "text",
      required: true,
    },
    {
      name: "to",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: false,
    },
    {
      name: "link",
      type: "text",
    },
  ],
};
