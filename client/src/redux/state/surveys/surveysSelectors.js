import moment from "moment";

const getSortedSurveys = (state, sortKey) => (
  state.sort((a, b) => {
    if (sortKey === "no" || sortKey === "yes") {
      return b[sortKey] - a[sortKey];
    }
    if (sortKey === "title") {
      return a[sortKey] > b[sortKey]
        ? 1
        : a[sortKey] < b[sortKey] ? -1 : 0;
    }
    if (sortKey === "dateSent") {
      return moment.utc(b[sortKey]).diff(moment.utc(a[sortKey]));
    }
    return 0;
  })
);

export { getSortedSurveys };
