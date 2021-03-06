const { isCelebrateError } = require('celebrate');

function handleErrors(err, req, res) {
  const { statusCode = 500, message } = err;

  if (isCelebrateError(err)) {
    return res.status(400).send({ message: 'Введены некорректные данные' });
  }

  return res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });
}

module.exports = handleErrors;
