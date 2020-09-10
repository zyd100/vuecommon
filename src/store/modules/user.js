

const state = {
    token: '',
    name: '',
    roles: []
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}

const actions = {
    login({commit},userInfo){
        return new Promise((resolve,reject)=>{
            //call api
            console.log(userInfo)
            commit("SET_TOKEN","")
            resolve()
            reject()
        })
       
    }
}

export default {
    state,
    mutations,
    actions
}