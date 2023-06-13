export const removeLeadingHash = (str: string) => {
  let cleanQueryString = str;
  if (str.startsWith("#")) {
    cleanQueryString = str.substring(1);
  }

  return cleanQueryString;
};

export const removeLeadingQuestionMark = (str: string) => {
  let cleanQueryString = str;
  if (str.startsWith("?")) {
    cleanQueryString = str.substring(1);
  }

  return cleanQueryString;
};

export const removeTrailingSlash = (str: string) => {
  return str.endsWith("/") ? str.slice(0, -1) : str;
};

export const isUrlEqual = (first: string | URL, second: string | URL) => {
  const firstUrlObj = new URL(first);
  const secondUrlObj = new URL(second);

  // Compare the strings literally
  if (first === second) return true;

  // Compare the components
  const firstHostname = firstUrlObj.hostname;
  const secondHostname = secondUrlObj.hostname;
  if (firstHostname !== secondHostname) {
    return false;
  }

  const firstPathname = removeTrailingSlash(firstUrlObj.pathname);
  const secondPathname = removeTrailingSlash(secondUrlObj.pathname);
  if (firstPathname !== secondPathname) {
    return false;
  }

  const firstSearch = removeLeadingQuestionMark(firstUrlObj.search);
  const secondSearch = removeLeadingQuestionMark(secondUrlObj.search);
  if (firstSearch !== secondSearch) {
    return false;
  }

  const firstHash = removeLeadingHash(firstUrlObj.hash);
  const secondHash = removeLeadingHash(secondUrlObj.hash);
  if (firstHash !== secondHash) {
    return false;
  }

  // URLs are equal
  return true;
};
