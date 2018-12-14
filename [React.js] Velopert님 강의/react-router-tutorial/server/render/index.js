const fs = require('fs');
const path = require('path');
const render = require('./render').default; // ES6 Module => .default

const template = fs.readFileSync(path.join(__dirname, '../../build/index.html'), { encoding: 'utf8' });

module.exports = (ctx) => {
    // 요청이 들어오면 현재 경로를 render 함수에 전달하여 문자열을 생성한다.
    const location = ctx.path;
    // const rendered = render(location);

    // // id=root인 div 안에 문자열을 넣어준다.
    // const page = template.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);

    // ctx.body = page;
    return render(location).then(
        ({html, state}) => {
            const page = template.replace('<div id="root"></div>', `<div id="root">${html}</div><script>window.__PRELOADED_STATE__=${JSON.stringify(state)}</script>`);
            ctx.body = page;
        }
    );
}