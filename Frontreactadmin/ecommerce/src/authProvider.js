export default{
    login:({username})=>{
        const request=new Request('http://localhost:3000/login',{
            method:'POST',
            body:JSON.stringify({"email":username}),
            headers:new Headers({'content-type':'application/json'})
        })
        return fetch(request)
        .then(response => {

            console.log(response)
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(({ authToken }) => {
            console.log(authToken);
            localStorage.setItem('token', authToken);
        });
    },
    logout:()=>{
        localStorage.removeItem('token')
        return Promise.resolve();
    },
    checkError:({status})=>{
        if(status==401 || status==403){
            localStorage.removeItem('token');
            return Promise.resolve();
        }
        },
        checkAuth:()=>{
            return localStorage.getItem('token')?Promise.resolve():Promise.resolve();
        },
        getPermission:params=>Promise.resolve()
    }
