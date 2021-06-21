const graphql = require('graphql');
// axios
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull} = graphql;

//For company nested graphql
const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields:() => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        location: {type: GraphQLString},
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:8900/companies/${parentValue.id}/users`)
                .then(res => res.data)
            }
        }
    })
})


const UserType = new GraphQLObjectType({
    name:'User',
    fields:() => ({
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age:{type: GraphQLInt},
        company: {
            type: CompanyType,
            resolve(parentValue,args) {
                return axios.get(`http://localhost:8900/companies/${parentValue.companyId}`)
                .then(res=> res.data);
            }
        }
    })
})

// Getting data from API
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type:UserType,
            // taking user search id
            args: {id:{type:GraphQLString}},
            resolve(parentValue, args){
                return axios.get(`http://localhost:8900/users/${args.id}`)
                .then(resp => resp.data)
            }
        },
        company:{
            type:CompanyType,
            args:{id:{type:GraphQLString}},
            resolve(parentValue, args){
                return axios.get(`http://localhost:8900/companies/${args.id}`)
                .then(resp => resp.data)
            }
        }
    }
})

// Mutation
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                age:{type: new GraphQLNonNull(GraphQLInt)},
                companyId: {type: GraphQLString}
            },
            resolve(parentValue, {firstName, age}) {
                return axios.post('http://localhost:8900/users' ,{firstName, age})
                .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})