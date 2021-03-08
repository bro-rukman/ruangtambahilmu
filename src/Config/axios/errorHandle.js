import {toast} from 'react-toastify'

import React from 'react'

export default function errorHandle(error) {
    if (error) {
        let message;
        if (error.response) {
            if (error.response.status === 500)
                message : "Something went wrong !";
                else message : error.response.data.message
            if (typeof message === "string") {
                toast.error(message)
            }
            return Promise.reject(error)
        }
    }
}

