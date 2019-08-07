import config from 'config';
import Fly from 'flyio/dist/npm/wx'

//https://github.com/wendux/fly
let api = new Fly
//定义公共headers
api.config.headers = {
    'content-type': 'application/x-www-form-urlencoded'
}
//设置超时
api.config.timeout = 10000
//设置请求基地址
api.config.baseURL = config.baseUrl
api.config.wapUrl = config.wapUrl + "app/"
//设置公共的Get参数（app模式下此变量不更新）
// api.config.params = {"key": uni.getStorageSync("access_token")}


//错误处理
const errorPrompt = (err) => {
    //未登录
    if (err.data.login === "0") {
        uni.showToast({
            title: '登录失效',
            icon: 'none'
        })
        uni.navigateTo({
            url: '/pages/login/login',
        })
    } else {
        //其他报错
        // uni.showToast({
        //     title: err.data.datas.error || '网络错误',
        //     icon: 'none'
        // })
    }
}

// 添加请求拦截器
api.interceptors.request.use((request) => {
    // 在发送请求之前做些什么
    let token = uni.getStorageSync('aliToken')
    if (token) {
        request.headers['token'] = token
    }
    return request
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
api.interceptors.response.use((res) => {
    // 对响应数据做些事
    // if (!res.data) {
    // return Promise.reject(res)
    // }
    return res
}, (error) => {
    return Promise.reject(error)
})

export default api;
