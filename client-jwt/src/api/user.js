import AuthHelperMethods from "../components/Auth/AuthHelperMethods";

export const getUserDetails = async (loginid) => {
    const Auth = new AuthHelperMethods();

    console.log(JSON.stringify({
        'token': Auth.getToken() ,
        loginid
    }));
    // Get a token from api server using the fetch api
    return Auth.fetch(`http://localhost/server-jwt/userdetails.php`, {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: JSON.stringify({
            'token': Auth.getToken() ,
            loginid
        })
    }).then(res => {
        console.log("getUserDetails:");
        localStorage.setItem('userData', JSON.stringify(res));
        console.log(res);
        return res;
    }).catch(e => console.log(e));
}

export const getLocalUser = () => {
    return JSON.parse(localStorage.getItem('userData'));
}