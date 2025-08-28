export const task = (status:boolean):Promise<string> =>
    new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(status){
                resolve("Task successded")
            }else{
                reject("Task failed")
            }
        },100)
    })