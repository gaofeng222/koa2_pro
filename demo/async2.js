function getsomething() {
    return 'something'
}

async function testAsync(){
    return 'Hello async'
}



async function test(){

    const v1 = await getsomething();
    const v2 = await testAsync();

    console.log(v2)
    console.log(v1)

}

test()
