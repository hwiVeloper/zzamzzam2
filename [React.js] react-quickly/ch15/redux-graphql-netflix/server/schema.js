const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat
} = require('graphql')
const movies = require('./movies.json')

const movie =  new graphql.GraphQLObjectType({
    name: 'Movie',
    fields: {
        title: {
            type: GraphQLString
        },
        cover: {
            type: GraphQLString
        },
        year: {
            type: GraphQLString
        },
        cost: {
            type: GraphQLFloat
        },
        starring: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'starring',
                fields: {
                    name: {
                        type: GraphQLString
                    }
                }
            }))
        }
    }
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            movies: {
                type: new GraphQLList(movie),
                resolve: () => movies // 전체 영화 목록 배열을 return
            },
            movie: {
                type: movie,
                args: {
                    index: {
                        type: GraphQLInt
                    }
                },
                resolve: (r, {index}) => movies[index - 1]
            }
        }
    })
})