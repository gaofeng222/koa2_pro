const Koa = require('koa');

const app = new Koa();

app.use( async  (ctx) => {

    if(ctx.url === '/' && ctx.method === 'GET') {

        let html = `
            
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body = html;

    }else if(ctx.url === '/' && ctx.method == 'POST'){

        let postData=await parsePostData(ctx);

        let content = parseQueryStr(postData);

        ctx.body = content;



    }else{
        ctx.body = '<h1>404！</h1>'
    }
    //获取表单输入的数据
    function parsePostData(ctx) {
        return new Promise ( (resolve,reject) => {
            try {
                let postData = '';
                ctx.req.on('data', (data) => {
                    postData += data;
                })
                ctx.req.addListener('end', () =>{

                    resolve( postData )

                })
            }catch(error){

                reject(error)

            }
        } )
    }

    //转化成json对象

    function parseQueryStr(queryStr){

        let queryData = {};

        let queryStrList = queryStr.split('&');

        console.log(queryStrList)

        for( let i = 0;i < queryStrList.length;i++ ){

            let arrList = queryStrList[i].split('=')

            queryData[arrList[0]] = arrList[1]

        }

        return queryData;

    }

})


app.listen(3000,() => {
    console.log('[demo] is start on port 3000')
})
