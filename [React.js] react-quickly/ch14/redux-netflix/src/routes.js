const React = require('react')
const {
    Router,
    Route,
    IndexRoute,
    browserHistory
} = require('react-router')
const App = require('components/app/app')
const Movies = require('components/movies/movies.js')
const Movie = require('components/movie/movie.js')

module.exports = (
    /*
        라우터에 browserHistory | hashHistory 제공
        빈 url / 에 대해 IndexRoute를 정의
        콜론을 이용하여 영화 id를 매개변수로 받는다.
    */
    <Router history={browserHistory}> 
        <Route path="/" component={App}>
            <IndexRoute component={Movies} />
            <Route path="movies" component={Movies}>
                <Route path=":id" component={Movie}/>
            </Route>
        </Route>
    </Router>
)