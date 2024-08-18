const messegeList = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

const HttpError = (cod, messege = messegeList[cod]) => {
  const error = new Error(messege);
  error.status = cod;
  return error;
};

export default HttpError;
