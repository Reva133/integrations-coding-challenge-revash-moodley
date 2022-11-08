const internalError = {
    fault: {
        code: "internalError",
        httpStatus: 500,
        message: "An internal error was encountered processing the request",
        serverDateTime: new Date().toISOString(),
        failures: [],
    } 
}

module.exports = internalError;
