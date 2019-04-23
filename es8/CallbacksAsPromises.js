const doSomethingWithPromises = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //I can informe a callback function to be executed, but it's not obligated
            resolve(console.log('Im a callback. I did something!'))
        }, 1500)
    })
}


const execute = async () => {
    await doSomethingWithPromises();
    console.log('I did something after the Promise!')
}

execute();