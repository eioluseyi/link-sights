import { LinkListType } from "@/types/types.server";
import { linkList } from "@/variables/variables.server";
import { isUrlEqual } from "@/utils";

export const findExistingLinkByIndex = (link: URL) => {
  const linkFoundIndex = linkList.findIndex((listItem) =>
    isUrlEqual(link, listItem.href)
  );

  return linkFoundIndex;
};

export const updateStats = async (statsData: LinkListType) => {
  /**
   * - Check if link exists in `linkList`
   * - If link exists, add attempt to linkData
   * - If link doesn't exist, add new link with new attempt
   */

  const linkIndex = findExistingLinkByIndex(statsData.href);

  if (linkIndex >= 0) {
    //   If link exists
    linkList[linkIndex].attempts.push(statsData.attempts[0]);
  } else {
    //   If link doesn't exist
    linkList.push(statsData);
  }
};
