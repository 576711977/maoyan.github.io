import React, { useMemo, useEffect, useState } from 'react'
import { CheckList, Popup, SearchBar } from 'antd-mobile'
import './style.css'

const items = ['所有城市', '上海', '北京', '广州', '深圳', '武汉', '天津', '西安', '南京', '杭州', '安州区', '重庆', '南昌', '城市']

export default ({getCity}) => {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState('城市')
  const [searchText, setSearchText] = useState('')
  const pushCity = () => {
    // console.log('1111111111111111')
    getCity(selected)
  }
  const filteredItems = useMemo(() => { // 根据搜索框内容更新城市列表
    if (searchText) {
      return items.filter(item => item.includes(searchText))
    } else {
      return items
    }
  }, [searchText])
  useEffect(() => {
    pushCity(selected)
  }, [selected])
  return (
    <>
      <div className='city-space'
        onClick={() => {
          setVisible(true)
          setSearchText('') // 为了再次点击时，搜索框被清空
        }}
      >
        <div className='city-choose'>
          <span>{selected?selected:'城市'}</span>
          <i className="iconfont icon-down" />
        </div>
      </div>
      <Popup // 弹出层
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        destroyOnClose
      >
        <div className='searchBarContainer'>
          <SearchBar // 搜索框
            placeholder='搜索城市'
            value={searchText}
            onChange={v => {
              setSearchText(v)
            }}
          />
        </div>
        <div className='checkListContainer'>
          <CheckList // 列表选择
            className='myCheckList'
            defaultValue={selected ? [selected] : []}
            onChange={val => {
              setSelected(val[0])
              setVisible(false) // 选择后，弹出层关闭
            }}
          >
            {filteredItems.map(item => (
              <CheckList.Item key={item} value={item}>
                {item}
              </CheckList.Item>
            ))}
          </CheckList>
        </div>
      </Popup>
    </>
  )
}