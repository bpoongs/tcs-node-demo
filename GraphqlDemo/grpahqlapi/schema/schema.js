const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema} = graphql;

//Static Data
const users = [
    {"id": "23", "firstName":"Bill", "age":20},
    {"id": "47", "firstName":"John", "age":22},
    {"id": "13", "firstName":"Andy", "age":11},
    {"id": "76", "firstName":"Kerio", "age":33}
]

// Create Object for user
const UserType = new GraphQLObjectType({
    name:'User',
    fields:{
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age:{type: GraphQLInt}
    }
})

//Define Root Query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type:UserType,
            args: {id:{type:GraphQLString}},
            resolve(parentValue, args){
                return _.find(users,{id:args.id})
            }
        }
    }
})


//export schema
module.exports = new GraphQLSchema({
    query: RootQuery
})
