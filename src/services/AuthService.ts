import axios from "axios";

const getKeyClockURL = () => process.env.KEYCLOCK_API_URL

const openIdConfiguration = () => {
    return axios.get(`${getKeyClockURL()}/auth/realms/dotmax/.well-known/openid-configuration`)
}

const configWithCredentials = {
    withCredentials: true
}

const getToken = (username: string, password: string) => {
    const params = new URLSearchParams();
    params.append('grant_type', process.env.GRANT_TYPE)
    params.append('client_id', process.env.CLIENT_ID)
    params.append('client_secret', process.env.CLIENT_SECRET)
    params.append('username', username)
    params.append('password', password)

    return axios
        .post(`${getKeyClockURL()}/auth/realms/dotmax/protocol/openid-connect/token`, params, configWithCredentials)
}

const validateToken = (token: string) => {

    const params = new URLSearchParams();
    params.append('client_id', process.env.CLIENT_ID)
    params.append('client_secret', process.env.CLIENT_SECRET)
    params.append('token', token)

    return axios
        .post(`${getKeyClockURL()}/auth/realms/dotmax/protocol/openid-connect/token/introspect`, params, configWithCredentials)
}

export const AuthService = {
    openIdConfiguration,
    getToken,
    validateToken,
}