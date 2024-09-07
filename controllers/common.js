exports.respond = async function respond(data) {
    if (data=="error" || data==null) {
        return {status: "error", message: "An error occurred"};
    }else{
        return {status: "success", response: data};
    }
};