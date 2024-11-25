let async1 = async () => {
    return true
}

async1().then((result) => {
  console.log(result);
}).catch((err) => {
    console.log(err);
});


function asynchronous_operational_method() {
    let first_promise = 
        new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" World!!!");
        }, 1000);
    });
    let combined_promise = 
        Promise.all([first_promise, second_promise]);
    return combined_promise;
}

async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
}

display();