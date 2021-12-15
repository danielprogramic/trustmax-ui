import {useCallback} from "react";
import {AuthService} from "services/AuthService";

interface UseFormLoginProp {
    username: string;
    password: string;
}

export default function useFormLogin({ username, password }: UseFormLoginProp) {

    return useCallback(() => {
        console.log('call authenticate')
        AuthService.getToken(username, password).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }, [username, password])
}