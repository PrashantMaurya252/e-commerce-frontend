const { BASE_URL } = require("../Config/config")



async function apiManager(method,path,data,addHeaders,contentType){
    let config ={
        method:method,
        headers:{
            'Content-Type': contentType ? contentType :'application/json',
            authorization:`Bearer ${localStorage.getItem('token')}`,
            accesstoken:localStorage.getItem('token')
        },
        body: contentType === 'multipart/form-data' ? data : JSON.stringify(data)
       
    }

    if(method === 'GET'){
        delete config.body
    }
    if(addHeaders){
        config = {...config,headers:{...config.headers,...addHeaders}}
    }
    if(contentType === 'multipart/form-data'){
        delete config.headers['Content-Type']
    }

    return fetch(`${BASE_URL}${path}`,config)
    .then(res => {
        return res.json()
    })
    .catch(error =>{
        return error
    })
    
}

export default apiManager