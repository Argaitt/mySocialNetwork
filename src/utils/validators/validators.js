export const requiredField = value => {
    if (value) return undefined
    return 'field is required'
}

export const maxLengthCreator = maxLength => value => {
    if (value && value.length > maxLength) return 'max length is 30 or more symbols'
    return undefined
}



