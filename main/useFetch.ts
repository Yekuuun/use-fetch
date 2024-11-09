/**
 * Author : yekuuun
 * Github : https://github.com/yekuuun
 * 
 * This project was designed for avoiding young devs using libs likes axios & redaxios using native javascript fetch API.
 */

export interface IError {
    status:number
    message:string 
    
}

export interface IHttpResponse<T> {
    data:T
    error:(null | IError)
}

export default class useFetch
{
    /**
     * base GET request
     * @param url 
     */
    static callGetRequest = async<T> (url:string):Promise<IHttpResponse<T>> => {
        try
        {
            const response:Response = await fetch(url, {
                method:'GET',
                headers: {
                    'Content-Type':'application/json'
                },
                credentials: 'include'
            });

            if(!response.ok)
            {
                return this.buildErrorResponse(response);
            }
            else
            {   
                const data:T = await response.json() as T;

                const apiResponse:IHttpResponse<T> = {
                    "data":data,
                    "error": null
                }

                return apiResponse;
            }
        }
        catch(error)
        {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

            const newExceptionResponse:IHttpResponse<T> = {
                "data":null as unknown as T,
                "error": {
                    "message":errorMessage,
                    "status":400
                }
            }

            return newExceptionResponse;
        }
    }


    ///----------PRIVATE-------

    /**
     * Private static method for handling errors.
     * @param response 
     * @returns 
     */
    private static buildErrorResponse = async <T>(response:Response):Promise<IHttpResponse<T>> => {
        const errorMessage = await response.text();

        const newError:IError = {
            "message":errorMessage || response.statusText || "Unknown error",
            "status":response.status
        }

        const returnResponse:IHttpResponse<T> = {
            "data":null as unknown as T,
            "error":newError
        }

        return returnResponse;
    }
}