const Koa = require('koa')

const  app = new Koa()

app.use( async ( ctx ) => {

    // ctx.body = 'Hello koa2'
    let url = ctx.url;

    let request = ctx.request;

    let req_query = request.query;

    let req_querystring = request.querystring;

    //直接获取

    let ctx_query = ctx.query;

    let ctx_querystring = ctx.querystring;



    ctx.body = {

        url,

        ctx_query,

        ctx_querystring

    }
    console.log(req_query);

})

app.listen(3000)

console.log('[demo] is start on port 3000')
