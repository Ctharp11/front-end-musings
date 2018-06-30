export const signUp = (signUpInfo) => {
    sessionStorage.setItem('signUpInfo', JSON.stringify(signUpInfo));
    
}

export const loginTrue = () => {
    localStorage.setItem('signedIn', true);
}
