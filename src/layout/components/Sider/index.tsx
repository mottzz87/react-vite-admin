/*
 * @Author: Vane
 * @Date: 2021-08-28 16:32:49
 * @LastEditTime: 2021-08-31 01:47:51
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \react-vite\src\layout\components\Sider\index.tsx
 */
import { Layout, Menu, Typography } from 'antd';
import Icon from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, {useState} from 'react';
// import useStore from '@/store/useStore';
import cls from './index.module.less';
import history from '@/utils/history'
import menuMap, { IMenuConfig } from '@/routes/menus'
const { Sider } = Layout;
const { Item, SubMenu } = Menu;

const SiderBar: React.FC = () => {
  // const { user } = useStore((state) => state);
  const [collapsed, setCollapsed] = useState(false)
  const [menuList, setMenus] = useState(menuMap)

  const renderIcon = (menu: IMenuConfig) =>
    typeof menu.icon === 'function' ? menu?.icon() : <Icon type={menu.icon || 'icon-tuichu'} />;

  const renderSubMenu = (menu: IMenuConfig) => (
    <SubMenu key={menu.path} title={menu.title} icon={renderIcon(menu)}>
      {renderMenuItem(menu.children || [])}
    </SubMenu>
  );

  const renderMenuItem = (menus: IMenuConfig[]) => {
    return menus?.map(menu => {
      if (menu.children && menu.children.length) return renderSubMenu(menu);
      return (
        <Item key={menu.path} title={menu.title} >
          {menu.title}
        </Item>
      );
    });
    // // 拖拽样式有问题 后续调整
    // return (
    //   <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
    //     <Droppable droppableId="droppable">
    //       {(provided) => (
    //           <div {...provided.droppableProps} ref={provided.innerRef}>
    //             {
    //               menus?.map((menu, i) => {
    //                 if (menu.children && menu.children.length) {
    //                   return (
    //                     <Draggable key={menu.path} draggableId={menu.path} index={i}>
    //                       {(provided) => (
    //                         <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
    //                           {renderSubMenu(menu)}
    //                         </div>
    //                       )}
    //                     </Draggable>
    //                   )
    //                 };
    //                 return (
    //                   <Item key={menu.path} title={menu.title}>
    //                     {menu.title}
    //                   </Item>
    //                 );
    //               })
    //             }
    //           </div>
    //       )}
    //     </Droppable>
    //   </DragDropContext>
    // )
  }

  // const onDragEnd = (result: any) => {
  //   const { source, destination } = result;
  //   if (!destination) {
  //     return;
  //   }
  //   const reorder = (menus: IMenuConfig[], startIndex: number, endIndex: number) => {
  //     const result = Array.from(menus);
  //     const [removed] = result.splice(startIndex, 1);
  //     result.splice(endIndex, 0, removed);
  //     return result;
  //   };
  //   const arr = reorder(
  //     menuList,
  //     result.source.index,
  //     result.destination.index
  //   );
  //   setMenus(arr)
  // };

  const handleClickMenu = (menu: { key: string }) => {
    history.push(menu.key as string);
  };
  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={cls.menu_logo}>
        <Typography.Title className={cls.logo_title} level={5}>
          Logo
        </Typography.Title>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} inlineCollapsed={collapsed} onClick={handleClickMenu}>
        { renderMenuItem(menuList) }
      </Menu>
    </Sider>
  );
};
export default SiderBar;