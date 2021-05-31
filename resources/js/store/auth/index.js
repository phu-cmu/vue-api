import axios from '../../axios/axios'

export default {
    state: {
        isAuthenticated: !!localStorage.getItem('isAuthenticated'),
        token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
        userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null
    },
    getter: {
        isAuthenticated: state => state.isAuthenticated,
        token: state => state.token,
        userData: state => state.userData
    },
    mutations: {
        setAuthenticated(state, payload) {
            localStorage.setItem('isAuthenticated', payload.isAuthenticated)
            state.isAuthenticated = payload.isAuthenticated
            localStorage.setItem('token', payload.token)
            state.token = payload.token
            localStorage.setItem('userData', JSON.stringify(payload.userData))
            state.userData = payload.userData
        },
        removeAuthenticated(state) {
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('token')
            localStorage.removeItem('userData')
            state.isAuthenticated = false
            state.token = null
            state.userData = null
        }
    },
    actions: {
        onLogin(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post('/api/login', payload).then(res => {
                    context.commit('setAuthenticated', {
                        isAuthenticated: true,
                        token: res.data.token,
                        userData: res.data.user
                    })
                    resolve({
                        success: true,
                        data: res.data
                    })
                }).catch(error => {
                    reject(error.response)
                })
            })
        },
        onLogout(context) {
            context.commit('removeAuthenticated')
            axios.post('/api/logout').then(res => {
            }).catch(error => console.log(error))
        }
    }
}
