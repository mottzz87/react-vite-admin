/*
 * @Author: Vane
 * @Date: 2021-08-28 14:55:48
 * @LastEditTime: 2021-09-01 03:26:29
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\pages\About\index.tsx
 */
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import clss from 'classnames'
import cls from 'index.module.less'
import initIconfont from '@/utils/getStyleSheets'

const About: React.FC = () => {

  const [sheetsIconList, setSheetsIconList] = useState([])

  useEffect(() => {
    initIconfont.ali().then((res: any) => {
      console.log(111, res)
      setSheetsIconList(res)
    });
    
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

export default About;