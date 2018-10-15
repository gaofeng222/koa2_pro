const Koa = require('koa');

const Router = require('koa-router');

const app = new Koa();

const router = new Router({
    prefix:"/baidu"
});

router.get('/',(ctx,next) => {

    ctx.body = 'Hello world!'

})
router.get('/admin',(ctx,next) => {

    ctx.body = 'Hello admin!'

})

app
    .use(router.routes())
    .use(router.allowedMethods())


app.listen(3000,() => {
    console.log('starting at port 3000');
})
