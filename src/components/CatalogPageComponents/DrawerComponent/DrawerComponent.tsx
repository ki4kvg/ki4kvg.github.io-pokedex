import st from "./Drawer.module.css"
import { useNavigate} from "react-router-dom";
import Search from "antd/es/input/Search";
import CategoriesRadioGroup from "../../CategoriesRadioGroup/CategoriesRadioGroup";
import {Drawer} from "antd";
import React, {FC} from "react";
import {DrawerComponentType} from "../../../types/tsTypes";

export const DrawerComponent: FC<DrawerComponentType> = ({checkedList, setCheckedList, paginatorCheck, visible, setVisible}) => {

    const navigate = useNavigate();

    const onSearch = (value: string) => {
        navigate(`/pokemon/${value}`)
    }

    return(
        <Drawer className={st.drawer} title="Sider Menu" placement="right" onClose={() => setVisible(false)}
                open={visible}>
            <Search className={st.searchBar} onSearch={(value) => onSearch(value)}
                    placeholder="Type pokemon name to search" allowClear enterButton="Search" size="middle"/>
            <CategoriesRadioGroup checkedList={checkedList} setCheckedList={setCheckedList}
                                  paginatorCheck={paginatorCheck}/>
        </Drawer>
    )
}