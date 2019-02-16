import UserAPI from '../api/user.js';

// status = 0 -> 数据尚未加载
// status = 1 -> 数据开始加载
// status = 2 -> 数据加载成功
// status = 3 -> 数据加载失败

const cafes={
    state:{
        userLoadStatus:0,
        user:{}
    },
    actions:{
        loadUser({commit}) {
            commit('setUserLoadStatus', 1);

            UserAPI.getUser()
                .then(function (response) {
                    commit('setUser', response.data);
                    commit('setUserLoadStatus', 2);
                })
                .catch(function () {
                    commit('setUser', {});
                    commit('setUserLoadStatus', 3);
                });
        },
    },
    mutations:{
        setUserLoadStatus(state, status) {
            state.userLoadStatus = status;
        },

        /*
         Sets the user
         */
        setUser(state, user) {
            state.user = user;
        },
    },
    getters: {
        getUserLoadStatus( state ){
            return state.userLoadStatus;
        },

        getUser( state ){
            return state.user;
        }
    }
}


export default cafes
