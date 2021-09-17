/*
 * @Author: Vane
 * @Date: 2021-09-01 19:11:30
 * @LastEditTime: 2021-09-17 21:36:01
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\pages\IconFont\index.tsx
 */
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Popover, message } from 'antd';
import clss from 'classnames'
import onCopyClick from '@/utils/clipboard';
import styles from './index.module.less'
import initIconfont from '@/utils/getStyleSheets'

const IconFont: React.FC = () => {

  const [sheetsIconList, setSheetsIconList] = useState([])

  const getList = async () => {
    const list = await initIconfont.ali()
    console.log(new Date())
    setSheetsIconList(list)
  }
  
  useEffect(() => {
    setTimeout(() => {
      getList()
    }, 100)
  }, [])

  return (
    <Row gutter={[3, 3]}>
      {
        sheetsIconList.map((v, i) => (
          <Col xs={12} sm={8} md={6} lg={4} xl={3} key={v}>
            <Card hoverable onClick={(e) => onCopyClick(e, v)}>
            <Popover placement="top" content={v}>
              <div className={styles.iconWrapper}>
                <i className={clss(v, 'iconfont')}/>
                <div className={styles.name}>
                  {v}
                </div>
              </div>
              </Popover>
            </Card>
          </Col>
        ))
      }
    </Row>
  )
};

export default IconFont;