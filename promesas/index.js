const miPromesaResuelta = new Promise((resolve, reject) => {
    resolve("promesa resuelta")
});

const promesaNoResuelta = new Promise((resolve, reject)=>{
    reject("promesa no resuelta")
})

console.log(miPromesaResuelta)
console.log(promesaNoResuelta)