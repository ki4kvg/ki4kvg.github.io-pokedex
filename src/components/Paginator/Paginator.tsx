import React from "react";
import {Pagination, Row} from "antd";
import st from "../../Pages/PokemonCatalogPage/PokemonCatalog.module.css";
import {PaginatorType} from "../../types/tsTypes";



const Paginator = ({total, limit, current, onChange}: PaginatorType) => { //checkedList?

    return (
        <Row justify={"center"} className={st.paginatorBlock}>
            <Pagination onChange={(page, pageSize) => onChange(page, pageSize)}
                        pageSize={limit}
                        current={current}
                        total={total}
                        showSizeChanger={true}
                        pageSizeOptions={[10, 20, 50]}/>
        </Row>
    )
}

export default Paginator;