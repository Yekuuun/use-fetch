import useFetch, { IHttpResponse } from "./useFetch";

//GET REQUEST => define any using custom objects.
const fetchData = async () => {
    try 
    {
        const apiResponse:IHttpResponse<any> = await useFetch.callGetRequest('https://jsonplaceholder.typicode.com/todos/1');
        console.log(apiResponse);
    } 
    catch (error) 
    {
        console.error("Error:", error);
    }
};

fetchData();

/**
    Response : 
    {
        data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
        error: null
    }
 */