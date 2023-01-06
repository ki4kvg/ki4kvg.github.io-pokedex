import React, {useEffect, useState} from "react";
import {Button, Layout, List} from "antd";
import PokemonCard from "../../components/CatalogPageComponents/PokemonCard/PokemonCard";
import {getPokemonShortInfoAction, setPokemonTypesAction} from "../../store/actions/pokemonActions";
import Paginator from "../../components/Paginator/Paginator";
import SiderComponent from "../../components/Sider/Sider";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";
import {pokemonSlice} from "../../store/reducers/pokemonSliceReducer";
import st from "./PokemonCatalog.module.css"
import {LeftOutlined} from "@ant-design/icons";
import {DrawerComponent} from "../../components/CatalogPageComponents/DrawerComponent/DrawerComponent";

const {Content} = Layout;

const PokemonCatalog = () => {
    const dispatch = useAppDispatch()

    const {
        pokemonsByTypesList,
        pokemonShortInfo,
        isLoading,
        isLastRequest
    } = useAppSelector((state) => state.pokemonReducer)
    const data = [...pokemonShortInfo]

    //-------------------------------------Sider-----------------------------------------
    const [checkedList, setCheckedList] = useState<Array<string>>([]);

    //-------------------------------------Drawer-----------------------------------------
    const [visible, setVisible] = useState(false);

    //-------------------------------------Paginator-------------------------------------
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [current, setCurrent] = useState(1);

    const onChange = (page: number, pageSize: number) => {
        setCurrent(page)
        setLimit(pageSize)
        setOffset((page - 1) * pageSize)
    };

    const paginatorCheck = () => {
        const data = [...pokemonsByTypesList]
        let taken = data.splice(offset, limit)
        dispatch(pokemonSlice.actions.deletePokemonShortInfo());
        return taken.map((p) => {
            dispatch(getPokemonShortInfoAction(p))
        })
    }

    useEffect(() => {
        dispatch(pokemonSlice.actions.deletePokemonByTypesList())
        onChange(1, 10);
    }, [checkedList])

    useEffect(() => {
        dispatch(setPokemonTypesAction());
    }, [])

    useEffect(() => {
        paginatorCheck()
    }, [limit, offset])

    useEffect(() => {
        if (isLastRequest) {
            paginatorCheck()
        }
    }, [isLastRequest])


    return (
        <Layout>
            <DrawerComponent checkedList={checkedList} setCheckedList={setCheckedList} paginatorCheck={paginatorCheck}
                             visible={visible} setVisible={setVisible}/>
            <Layout>
                <Content style={{overflow: "hidden"}}>
                    <List
                        loadMore={<Paginator limit={limit}
                                             offset={offset}
                                             current={current}
                                             total={pokemonsByTypesList.length}
                                             onChange={onChange}/>}
                        loading={isLoading}
                        grid={{
                            xs: 1,
                            sm: 1,
                            md: 1,
                            lg: 2,
                            xl: 3,
                            xxl: 4,
                        }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <PokemonCard p={item}/>
                            </List.Item>
                        )}
                    />
                </Content>
            </Layout>
            <Button
                className={st.menu}
                type="primary"
                icon={<LeftOutlined className={st.menuIcon}/>}
                onClick={() => setVisible(true)}
            />
            <SiderComponent checkedList={checkedList} setCheckedList={setCheckedList} paginatorCheck={paginatorCheck}/>
        </Layout>
    )
}

export default PokemonCatalog;
