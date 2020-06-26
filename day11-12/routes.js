const HOME = "/";
const FILTER = "/filter";
const ID = "/:id";

export const routes = {
  home: HOME,
  filter: FILTER,
  id: (id) => {
    if (id) {
      return `${id}`;
    }
  },
};
