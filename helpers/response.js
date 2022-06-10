exports.successResponse = function(messages = '' , data=[], extras) {
    var response = {
        success : true,
        data,
        messages
    }
    return response ={ ...response , ...extras}
};

exports.errorResponse = function(messages='' , data=[]) {
    var response = {
        success : false,
        data,
        messages,
    }
    return response
};
