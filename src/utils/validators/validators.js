export const required = value => {
    if (value) return undefined

    return "Field is required"
}


export const maxCreator = (maxL) => (value) => {
    if (value.length > maxL) return (`Max is ${maxL} symbols`)

    return undefined
}