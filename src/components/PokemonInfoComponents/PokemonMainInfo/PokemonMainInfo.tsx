import * as React from "react";
import {FC} from "react";
import {Carousel, Col, Row} from "antd";
import st from "./PokemonMainInfo.module.css"
import {pokemonInfoType} from "../../../types/tsTypes";

const PokemonMainInfo: FC<pokemonInfoType> = (props) => {

    const PokemonType = props.pokemonInfo?.types.map((t, index) => {
        return <Row key={index}>{t.type.name}</Row>
    })

    const SliderContent = Object.values(props.pokemonInfo?.sprites.other.home || {}).map((i: any, index) => {
        if (!!i) {
            return <img key={index} src={i}/>
        }
    })

    return (
        <Col className={st.cardColumn}>
            <Carousel className={st.slider} autoplay>
                {SliderContent}
            </Carousel>
            <Row className={st.pokemonName}>
                {props.pokemonInfo?.name}
            </Row>
            <Row>
                <div className={st.HPBar}></div>
            </Row>
            <Row>
                {props.pokemonInfo?.stats[0].base_stat} HP
            </Row>
            <Row gutter={32} className={st.shortStats} justify="center">
                <Col>
                    <Row className={st.pokemonStatsValue}>
                        {PokemonType}
                    </Row>
                    <Row className={st.pokemonStatsType}>
                        TYPE
                    </Row>
                </Col>
                <Col className={st.weightColumn}>
                    <Row className={st.pokemonStatsValue}>
                        {props.pokemonInfo?.weight}
                    </Row>
                    <Row className={st.pokemonStatsType}>
                        WEIGHT
                    </Row>
                </Col>
                <Col>
                    <Row className={st.pokemonStatsValue}>
                        {props.pokemonInfo?.height}
                    </Row>
                    <Row className={st.pokemonStatsType}>
                        <div>HEIGHT</div>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default PokemonMainInfo;

