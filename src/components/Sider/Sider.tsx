import {Layout} from "antd";
import st from "./Sider.module.css"
import React, {FC} from "react";
import {SiderComponentType} from "../../types/tsTypes";
import CategoriesRadioGroup from "../CategoriesRadioGroup/CategoriesRadioGroup";

const {Sider} = Layout;

const SiderComponent: FC<SiderComponentType> = ({checkedList, setCheckedList, paginatorCheck}) => {

    return (
        <Sider className={st.sider}
               width={180}
               breakpoint="lg"
               collapsedWidth="0"
               trigger={null}>
            <CategoriesRadioGroup checkedList={checkedList} setCheckedList={setCheckedList} paginatorCheck={paginatorCheck}/>
        </Sider>
    )
}

export default SiderComponent;