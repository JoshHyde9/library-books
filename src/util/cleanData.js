/**
 * @param {Array<any> | string} data
 * @returns {Array<any> | string}
 */

const REMOVE_HTML_TAGS = /(<([^>]+)>)/gi;
export const cleanData = (data) => {
  if (Array.isArray(data)) {
    const cleanedData = [...data];

    cleanedData.filter((item) => {
      if (!item.volumeInfo.description) return;

      item.volumeInfo.description.replace(REMOVE_HTML_TAGS, "");
    });

    return cleanedData;
  }

  data.description = data.description.replace(REMOVE_HTML_TAGS, "");
  console.log(data);
  return data;
};
