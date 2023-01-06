import {Col, Row} from "antd";
import st from "./PokemonAddInfo.module.css";
import {PokemonBaseStatsType} from "../../../types/tsTypes";

export const PokemonBaseStatsComponent = ({name, val}: PokemonBaseStatsType) => {
    return (
        <Row className={st.baseStatsRow}>
            <Col>{name}</Col>
            <Col>{val}</Col>
        </Row>
    )
}