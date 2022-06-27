// API 应用程序接口  Application Interface

// fetch  axios  faskmock
//  取数据， api 负责这件事
// 前端 url  get  /contents 后端负责在/contents 提供contents数据
// 前端和后端数据交换的格式是json 
import axios from 'axios'

// const getContestData = () => axios 
//  .get('https://www.fastmock.site/mock/b087fa74707e3b5325dd8a2fcd7b699c/beers/movie')
// export const getCities = () => 
//     axios.get('https://www.fastmock.site/mock/90a1d936bcb5bf5029347fd7e763a939/cat/cities')

const contents = [
    {
        id: 1,
        img: './src/assets/images/l1.jpg',
        text: '2022中国平安足球协会超级联赛(海口赛区)',
        date: '2022.6.25 19:30 周六',
        pos: '北京 五源河体育场',
        price: '100元',
        type: '体育赛事' 
    },
    {
        id: 2,
        img: './src/assets/images/l2.jpg',
        text: '【9.9元超值特惠】马语汇亲子马术体验活动',
        date: '2022.6.23 19:30 周六',
        pos: '上海 马场',
        price: '9.9元',
        type: '体育赛事' 
    },
    {
        id: 3,
        img: './src/assets/images/l3.jpg',
        text: '【5折超值特惠】马语汇亲子马术体验活动马',
        date: '2022.6.27 19:30 周六',
        pos: '上海 马场',
        price: '996元',
        type: '体育赛事' 
    },
    {
        id: 4,
        img: './src/assets/images/l7.jpg',
        text: '2022英雄联盟夏季赛六六六(中国赛区)',
        date: '2022.6.25 19:30 周六',
        pos: '西安 广场',
        price: '111元',
        type: '电竞赛事' 
    },
    {
        id: 5,
        img: './src/assets/images/l5.jpg',
        text: '2022中国拳王争霸赛(街道赛区)',
        date: '2022.6.25 19:30 周六',
        pos: '北京 街道',
        price: '567元',
        type: '体育赛事' 
    },
    {
        id: 6,
        img: './src/assets/images/l4.jpg',
        text: '2022中国平安足球协会超级联赛(海口赛区)',
        date: '2022.6.25 19:30 周六',
        pos: '西安 五源河体育场',
        price: '888元',
        type: '体育赛事' 
    },
    {
        id: 7,
        img: './src/assets/images/l6.jpg',
        text: '2023英雄联盟手游春季赛直播(海口赛区)',
        date: '2022.6.25 19:30 周六',
        pos: '北京 五源河体育场',
        price: '234元',
        type: '电竞赛事' 
    },
    {
        id: 8,
        img: './src/assets/images/l8.jpg',
        text: '2023英雄联盟世界赛(北京赛区)~~~',
        date: '2023.7.17 17:37 周六',
        pos: '北京 体育场',
        price: '999元',
        type: '电竞赛事' 
    },   
]
// withDelay(function () {})  return async函数
// delay函数
const delay = time => new Promise(resolve => setTimeout(resolve, time));
const withDelay = fn => async (...args) => {
    await delay(1000);
    return fn(...args)
}

export const fetchcontents = withDelay(params => {
    const { inputContent, activeKey, city='' } = params
    let result = contents;
    if (activeKey) {
        switch (activeKey) {
            case "电竞赛事":
                result = result.filter(content => content.type === '电竞赛事')
                break;
            case "体育赛事":
                result = result.filter(content => content.type === '体育赛事')
                break;
            default:
                break
        }
    }
    if (inputContent) {
        result = result.filter(content => (
            content.text+content.date+content.price+content.pos).includes(inputContent))
    }
    if (city && city !== '所有城市'&& city !== '城市') {
        result = result.filter(content => content.pos.includes(city))
    }

    return Promise.resolve({
        activeKey, result
    })
})

    // Promise 类 resolve 静态方法
    // Promise.all 返回以一个fullfiled的promise实例
    // 一般用于返回promise实例