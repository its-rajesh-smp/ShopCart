function formatEmail(str) {
    const newStr = str ? str.replaceAll(".", "").replaceAll("@", "") : ""
    return newStr
}

export default formatEmail;