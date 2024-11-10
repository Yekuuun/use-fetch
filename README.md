```

                                              _____    _       _     
                               _   _ ___  ___|  ___|__| |_ ___| |__  
                              | | | / __|/ _ \ |_ / _ \ __/ __| '_ \ 
                              | |_| \__ \  __/  _|  __/ || (__| | | |
                               \__,_|___/\___|_|  \___|\__\___|_| |_|

                    ----Fuck axios, redaxios & other libs, i can use typescript----
```

As I mentioned, useFetch is a small TypeScript class designed to demonstrate how to use fetch for basic HTTP API calls. As a developer, I often used pre-built tools like Axios or Redaxios to perform HTTP requests, but adding these dependencies is not always necessary. Adding libraries can increase your project’s size and introduce dependencies that may not be essential.

In this guide, I'll show you how to create a basic class that implements GET, POST, PUT, and DELETE requests. We'll use generic T data types and a basic IHttpResponse interface for clean, centralized logic in your next web app.
---

### In details : 

```TS

export interface IError {
    status:number
    message:string 
    
}

export interface IHttpResponse<T> {
    data:T
    error:(null | IError)
}

```

I've created very simple interfaces for handling API response data, but you can customize them to suit your needs.


```TS

    /**
     * Base POST request model.
     * @param url 
     * @param body 
     */
    static callPostRequest = async<T>(url:string, body:any):Promise<IHttpResponse<T>> => {
        try
        {
            const response:Response = await fetch(url, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:'include',
                body: JSON.stringify(body) //body => (data to be sendt)
            })

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

```

useFetch utilizes TypeScript generics (T) for flexible and reusable code, establishing a consistent structure for managing HTTP responses. When developing ASP.NET Core APIs, I frequently create global response objects to ensure consistency, improve documentation, and avoid handling numerous response types, resulting in cleaner and more maintainable code.

**Example :**

```C#

namespace SharpApi.Models;

public class ServiceResponse<D>
{
    public D? Data {get; set;}
    public string Message {get; set;} = "successfully called API.";
    public EErrorType EErrorType {get; set;} = EErrorType.SUCCESS;
}

//controller : 

/// <summary>
/// Getting a specific user based on his id.
/// </summary>
/// <param name="id"></param>
/// <returns></returns>
[HttpGet("{id}")]
public async Task<ActionResult<ServiceResponse<GetUserInfosDto>>> GetUserById(int id)
{
    ServiceResponse<GetUserInfosDto> response = await _userService.GetUserById(id);
    ActionResult<ServiceResponse<GetUserInfosDto>> result = await ResponseManager.GetResponse(response);
    return result;
}

```

Following this pattern, we can create a IServiceResponse in our client application and replace IHttpResponse with our custom IServiceResponse interface.

This documentation provides a guide on using fetch, building HTTP requests, and managing API responses in a clean, structured way.

---

### Assets : 

**base request responses using IHttpResponse interface**

![SAMPLE](https://github.com/Yekuuun/use-fetch/blob/main/assets/sample.png)

