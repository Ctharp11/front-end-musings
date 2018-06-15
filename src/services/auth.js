export const signUp = (signUpInfo) => {
    localStorage.setItem('signUpInfo', JSON.stringify(signUpInfo));
    console.log(localStorage.getItem('signUpInfo'));
}

export const compareData = () => {
    const data = localStorage.getItem('signUpInfo');
    console.log(data);
}