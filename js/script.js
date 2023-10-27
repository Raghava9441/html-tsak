// let promise = new Promise((resolve, reject) => {
//     reject("fail")
//     resolve("success")
// })

// promise
//     .then(data => console.log(data))
//     .catch(err => console.error(err))


async function f() {
    try {
        let response = await fetch("https://gorest.co.in/public/v2/users");
    } catch (err) {
        console.log(err)
    }
}

f();