/**
 * Author : Yekuuun
 * Github : https://github.com/yekuuun
 * 
 * 
 * Notes : i used JSON placeholder for base request testing => (basic & free online api.)
 * 
 * NOTE : for IHttpResponse api responses, i used IJsonPlaceholderPost as type but you should using your data interfaces objects depending on how you buildt your api.
 */

import useFetch, { IHttpResponse } from "./useFetch";

/**
 * DEFINE your interfaces based on your API calls return
 */
interface IJsonPlaceholderPost {
    userId:number
    id:number 
    title:string 
    body:string
}

/**
 * base GET request sample.
 */
const fetchData = async () => {
    try 
    {
        const apiResponse:IHttpResponse<IJsonPlaceholderPost> = await useFetch.callGetRequest('https://jsonplaceholder.typicode.com/todos/1');
        console.log("------------GET REQUEST-----------")
        console.log(apiResponse);

        /**
            Response : 
            {
                data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
                error: null
            }
        */
    } 
    catch (error) 
    {
        console.error("Error:", error);
        //DO SOMETHING.
    }
};

/**
 * base post request sample.
 */
const postRequest = async() => {
    try 
    {
        const data:IJsonPlaceholderPost = {
            "userId":1,
            "id":1,
            "body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "title":"POST request testing"
        }

        const apiResponse:IHttpResponse<IJsonPlaceholderPost> = await useFetch.callPostRequest("https://jsonplaceholder.typicode.com/posts", data);
        console.log("------------POST REQUEST-----------")
        console.log(apiResponse);

        /**
            Response : 
            {
                data: {
                    userId: 1,
                    id: 101,
                    body: 'quia et suscipit\n' +
                    'suscipit recusandae consequuntur expedita et cum\n' +
                    'reprehenderit molestiae ut ut quas totam\n' +        
                    'nostrum rerum est autem sunt rem eveniet architecto',
                    title: 'POST request testing'
                },
                error: null
            }
        */
    } 
    catch (error) 
    {
        console.error("Error:", error);
        //DO SOMETHING.
    }
}

/**
 * base post request sample.
 */
const putRequest = async() => {
    try 
    {
        const data:IJsonPlaceholderPost = {
            "userId":1,
            "id":1,
            "body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "title":"PUT request testing"
        }

        const apiResponse:IHttpResponse<IJsonPlaceholderPost> = await useFetch.callPutRequest("https://jsonplaceholder.typicode.com/posts/1", data);
        console.log("------------PUT REQUEST-----------")
        console.log(apiResponse);

        /**
            Response : 
            {
                data: {
                    userId: 1,
                    id: 1,
                    body: 'quia et suscipit\n' +
                    'suscipit recusandae consequuntur expedita et cum\n' +
                    'reprehenderit molestiae ut ut quas totam\n' +        
                    'nostrum rerum est autem sunt rem eveniet architecto',
                    title: 'POST request testing'
                },
                error: null
            }
        */
    } 
    catch (error) 
    {
        console.error("Error:", error);
        //DO SOMETHING.
    }
}

/**
 * base DELETE request
 */
const deleteData = async () => {
    try 
    {
        const apiResponse:IHttpResponse<IJsonPlaceholderPost> = await useFetch.callGetRequest('https://jsonplaceholder.typicode.com/posts/1');
        console.log("------------DEL REQUEST-----------")
        console.log(apiResponse);

        /**
            Response : 
            {
                data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
                error: null
            }
        */
    } 
    catch (error) 
    {
        console.error("Error:", error);
        //DO SOMETHING.
    }
};

//-----------SAMPLES EXEC------------
fetchData();
postRequest();
putRequest();
deleteData();
