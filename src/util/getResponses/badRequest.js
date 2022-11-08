const badRequest = {
    fault: {
        code: 'badRequest',
        httpStatus: 400,
        message: 'You have supplied invalid request details',
        serverDateTime: new Date().toISOString(),
        failures: []
    }
}

module.exports = badRequest;
