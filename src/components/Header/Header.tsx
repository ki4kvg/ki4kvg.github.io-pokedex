import {Col, Layout, Row} from "antd";
import {NavLink, useNavigate} from "react-router-dom";
import Search from "antd/es/input/Search";
import st from "./Header.module.css"

const {Header} = Layout;


const HeaderComponent = () => {

    const navigate = useNavigate();

    const onSearch = (value: string) => {
        navigate(`/pokemon/${value}`)
    }

    return (
        <Header className={st.header}>
            <Row className={st.headerRow} justify={"space-between"}>
                <Col className={st.navlinkCol} span={14}>
                    <NavLink to={"/"}>Pokemon catalog</NavLink>
                </Col>
                <Col className={st.colSearch} span={10}>
                    <Search onSearch={(value) => onSearch(value)}
                            placeholder="Type pokemon name to search" allowClear enterButton="Search" size="middle"/>
                </Col>
            </Row>
        </Header>
    )
}

export default HeaderComponent;