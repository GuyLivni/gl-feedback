import configureStoreDev    from "./store.dev";
import configureStoreProd   from "./store.prod";

export default function (initialState = {}) {
  switch (process.env.NODE_ENV) {
    case "production":
      return configureStoreProd(initialState);

    case "development":
      return configureStoreDev(initialState);

    default:
      return configureStoreProd(initialState);
  }
}
