export const filterEvenNumber = (array : number[]) : Promise<number[]> =>
    new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(array.filter((num) => num%2===0));
        },1000)
    })