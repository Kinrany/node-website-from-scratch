const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx) => {
    ctx.status = 200;
    ctx.body = 'Hello world';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
