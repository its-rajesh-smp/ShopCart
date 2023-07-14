function formatJSON(arg) {
    if (typeof arg === "string") {
        return JSON.parse(arg)
    }
    return JSON.stringify(arg)
}

export default formatJSON;