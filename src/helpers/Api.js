import { creq } from "./Apicall";
import {BACKEND_URL} from "./help";


export const registerfunction = async(data)=>{
    return await creq("POST",`${BACKEND_URL}/user/register`,data)
}

export const sentOtpFunction = async(data)=>{
    return await creq("POST",`${BACKEND_URL}/user/sendotp`,data)
}

export const userVerify = async(data)=>{
    return await creq("POST",`${BACKEND_URL}/user/login`,data)
}