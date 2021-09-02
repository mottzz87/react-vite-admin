/*
 * @Author: Vane
 * @Date: 2021-09-01 19:11:30
 * @LastEditTime: 2021-09-01 19:11:30
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\pages\IconFont\index.tsx
 */
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import clss from 'classnames'
import cls from 'index.module.less'
import initIconfont from '@/utils/getStyleSheets'

const IconFont: React.FC = () => {

  const [sheetsIconList, setSheetsIconList] = useState([])

  const getList = async () => {
    const list = await initIconfont.ali()
    setSheetsIconList(list)
  }
  useEffect(() => {
    getList()
  }, [])

  const onCopyClick = (item: string) => {
    console.log(item)
  }
  
  return (
      <Row>
        {
          sheetsIconList.map((v, i) => (
            <Col xs={12} sm={8} md={6} lg={4} xl={2} key={i}>
              <div className="iconfont-warp" onClick={() => onCopyClick(v)}>
                <div className="flex-margin">
                  <div className="iconfont-warp-value">
                    <i className={clss(v, 'iconfont')}/>
                  </div>
                  <div className="iconfont-warp-label mt10">{ v }</div>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    
  )
};

export default IconFont;