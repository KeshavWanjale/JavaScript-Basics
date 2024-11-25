let promise1 = new Promise((resolve,reject) =>{
    setTimeout(()=> {
        console.log("Promise1 fulfilled");
        // reject()
        resolve(true)
    },2000)
})

let promise2 = new Promise((resolve,reject) =>{
    setTimeout(()=> {
        reject(new Error ("Promise2 could not fulfill"))
    },2000)
})

let promise3 = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});


promise1.then((value) => {
    console.log(value)
}, (error) => {
    console.log("Some error occured in Promise 1")
})

promise2.catch((error) => {
    console.log("Some error occured in promise 2");  
})

promise3.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });
