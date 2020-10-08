import queryString from "query-string";

export default function getQueryParams(qString) {
  return queryString.parse(qString);
}
