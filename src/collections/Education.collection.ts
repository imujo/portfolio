import { GlobalConfig } from "payload";
import { TimelineItem } from "./TimelineItem.block";

export const Education: GlobalConfig = {
  slug: "education",
  fields: [
    {
      name: "timelineItems",
      type: "blocks",
      blocks: [TimelineItem],
    },
  ],
};
