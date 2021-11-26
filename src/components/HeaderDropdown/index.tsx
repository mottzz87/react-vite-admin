/*
 * @Author: Vane
 * @Date: 2021-08-31 21:17:48
 * @LastEditTime: 2021-08-31 21:18:50
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\components\HeaderDropdown\index.tsx
 */
import React, {FC,ReactNode} from 'react'
import type { DropDownProps } from 'antd/es/dropdown';
import { Dropdown } from 'antd';
import classNames from 'classnames';

import styles from './index.module.less';

export type HeaderDropdownProps = {
  overlayClassName?: string;
  overlay: ReactNode | (() => ReactNode) | any;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter';
} & Omit<DropDownProps, 'overlay'>;

const HeaderDropdown: FC<HeaderDropdownProps> = ({ overlayClassName: cls, ...restProps }) => (
  <Dropdown overlayClassName={classNames(styles.container, cls)} {...restProps} />
);

export default HeaderDropdown;