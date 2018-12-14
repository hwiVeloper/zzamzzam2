const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const app = new Koa();

const render = require('./render');

// / 요청이 들어올 경우 서버사이드 렌더링 작업을 실시한다.
app.use((ctx, next) => {
    if (ctx.path === '/') return render(ctx);
    return next();
});
// 요청을 받으면 build 내부의 파일을 반환
app.use(serve(path.resolve(__dirname, '../build/')));
// 요청받은 경로가 파일이 아니면, 해당 경로를 위한 SSR 실행
app.use(render);
app.listen(3001);
console.log('PORT 3001 OPENED!');