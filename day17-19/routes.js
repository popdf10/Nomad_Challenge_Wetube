const HOME = "/";
const CREATE = "/create";
const MOVIE_DETAIL = "/:id";
const EDIT_MOVIE = "/:id/edit";
const DELETE_MOVIE = "/:id/delete";
const SEARCH = "/search";

const routes = {
  home: HOME,
  create: CREATE,
  movieDetail: (id) => {
    if (id) {
      return `/${id}`;
    } else {
      return MOVIE_DETAIL;
    }
  },
  editMovie: (id) => {
    if (id) {
      return `/${id}/edit`;
    } else {
      return EDIT_MOVIE;
    }
  },
  deleteMovie: (id) => {
    if (id) {
      return `/${id}/delete`;
    } else {
      return DELETE_MOVIE;
    }
  },
  search: SEARCH,
};

export default routes;
