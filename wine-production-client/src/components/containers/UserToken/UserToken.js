export class UserToken {
    static LoginToken(token) {
        localStorage.setItem('userToken',token)
    }

    static isLogin() {
        return localStorage.getItem('userToken')
    }

    static logout() {
        localStorage.removeItem('userToken')
    }
}