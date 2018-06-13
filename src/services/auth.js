export const signUp = (signUpInfo) => {
    localStorage.setItem('signUpInfo', signUpInfo);
}

export const compareData = () => {
    const data = localStorage.getItem('signUpInfo');
    console.log(data);
}