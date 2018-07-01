export const iframely = (input) => {
    const sendUrl = "http://iframe.ly/api/iframely?url=" + input + "&api_key=07ee4686e047984c7bb492";
    return fetch(sendUrl)
}