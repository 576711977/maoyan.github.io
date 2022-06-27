import React from 'react'
import { List } from 'antd';
const { Item } = List;
import { ListWrapper } from './style'

const ContentList = ({contents}) => {
    return (
        <div className='list-wrap'>
            { contents[0] !== 7 &&
                <List 
                    style={{marginBottom:"50px"}}
                    itemLayout='horizontal'
                    dataSource={contents}
                    renderItem={({ img, text, date, pos, price }) => {
                        return (
                            <Item>
                                <ListWrapper>
                                    <img src={img} />
                                    <div className='list-content'>
                                        <p>{text}</p>
                                        <p>{date}</p>
                                        <p>{pos}</p>
                                        <div><span>售票中</span>{price}</div>
                                    </div>
                                </ListWrapper>
                            </Item>
                        )
                    }}
                />
            }
        </div>
    )
}

export default ContentList