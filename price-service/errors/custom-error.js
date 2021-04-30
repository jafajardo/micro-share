class CustomError extends Error {
  constructor(customMessage) {
    super(customMessage);

    this.message = customMessage;

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeErrors() {
    return { errors: [{ message: this.message }] };
  }
}

module.exports = CustomError;
