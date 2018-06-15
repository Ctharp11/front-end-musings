export const signUp = (signUpInfo) => {
    sessionStorage.setItem('signUpInfo', JSON.stringify(signUpInfo));
    localStorage.setItem('signedIn', true);
}
