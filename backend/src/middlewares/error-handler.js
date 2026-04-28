export function errorHandler(error, request, response, next) {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";

  response.status(statusCode).json({
    error: message
  });
}
