export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Day8";
  next();
};
