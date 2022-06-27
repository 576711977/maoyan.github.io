import { useState, useEffect } from 'react'
// import './App.css'
import { fetchcontents } from '../../api/request'
import 'antd/dist/antd.css' // 引入UI框架的样式
import { Spin } from 'antd'
import ContentList from '../../components/List'
import ListInput from '../../components/ListInput'
import Header from './Header'
import { Wrapper } from './style'
import { Tabs } from 'antd-mobile'
import nocontest from '../../assets/images/no_contest.jpg'
import ChooseCity from '../../components/ChooseCity'

function Contest() {
  const [contents, setContents] = useState([]);
  const [inputContent, setInputContent] = useState(''); 
  const [activeKey, setActiveKey] = useState('全部')
  const [loading, setLoading] = useState(true);
  const [placeholder, setPlaceholder] = useState('') 
  const [city, setCity] = useState('城市')
  const getCity = (ct) => {
    setCity(ct) 
  }
  const getInputContent = (content) => {
    setInputContent(content)
  }
  const tabs = [
    {
      key: '全部',
      title: '全部',
    },
    {
      key: '电竞赛事',
      title: '电竞赛事', 
    },
    {
      key: '体育赛事',
      title: '体育赛事', 
    }
  ]
  useEffect(() => {
    setLoading(true) 
    setPlaceholder(`在${activeKey}里搜索`)
    setContents([7])
    fetchcontents({inputContent, activeKey, city})
      .then(data => {
        setContents([...data.result])
        setLoading(false)
      })
  }, [activeKey, inputContent, city])

  return (
    <Wrapper>    
      <Header />
      <h2 className='title-font'>热门赛事</h2>
      <div className='tabs-event'>
        <Tabs activeKey={activeKey} onChange={setActiveKey} 
          activeLineMode='fixed'
          style={{'--fixed-active-line-width': '25px', display: 'flex',justifyContent: 'flex-start', '--title-font-size': '0.1'}}
        >
          {tabs.map(item => (
            <Tabs.Tab key={item.key} title={item.title} />
          ))} 
        </Tabs>
        <ChooseCity getCity={getCity} />
      </div>
      <div className="event-wrapper">
        <ListInput placeholder={placeholder} getInputContent={getInputContent} />
        <Spin spinning={loading} tip="加载中~">
          {
            contents.length == 0 ? 
            <div className='no-contest'>
              <img src={nocontest}></img>
              <p>暂无赛事，看看更多演出</p>
            </div> 
            : <ContentList contents={contents} />
          } 
        </Spin>
      </div>      
    </Wrapper>
  )
}

export default Contest
