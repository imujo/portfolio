import { GlobalConfig } from "payload";
import { TimelineItem } from "./TimelineItem.block";

export const Experience: GlobalConfig = {
  slug: "experience",
  fields: [
    {
      name: "timelineItems",
      type: "blocks",
      blocks: [TimelineItem],
    },
  ],
};
