import React, {FC} from "react";
import {Col, Image, Row} from "antd";
import st from "./PokemonAddInfo.module.css"
import {
    AbilitiesType,
    HeldItemsType,
    PokemonAdditionalInfoType,
    PreviewImageType,
    StatsType
} from "../../../types/tsTypes";
import {PokemonBaseStatsComponent} from "./PokemonBaseStats";

const AdditionalInfo: FC<PokemonAdditionalInfoType> = ({pokemonInfo}) => {

    const PokemonAbilities = pokemonInfo?.abilities.map((t: AbilitiesType, index) => {
        return <Row key={index}>{t.ability.name}</Row>
    })
    const PokemonHeldItems = pokemonInfo?.held_items.map((t: HeldItemsType, index) => {
        return <Row key={index}>{t.item.name}</Row>
    })

    const BasePokemonStats = pokemonInfo?.stats.map((t: StatsType, index) => {
        return <PokemonBaseStatsComponent name={t.stat.name} val={t.base_stat} key={index}></PokemonBaseStatsComponent>
    })

    const PokemonPreviewImageArr = Object.values(pokemonInfo?.sprites || {} as PreviewImageType).map((i: any, index) => {
        if (typeof i === "string") {
            return <Image key={index} src={i}/>
        }
    })

    return (
        <Col className={st.fullInfoColumn}>
            <Row>
                <Image.PreviewGroup>
                    {PokemonPreviewImageArr}
                </Image.PreviewGroup>
            </Row>
            <Row className={st.fullInfoStatsRow}>
                <Col className={st.fullInfoStatsColumns}>
                    <Row className={st.fullInfoAllStatsTypes}>Stats</Row>
                    {BasePokemonStats ? BasePokemonStats : <div>No Stats</div>}
                </Col>
                <Col className={st.fullInfoStatsColumns}>
                    <Row className={st.fullInfoAllStatsTypes}>Abilities</Row>
                    <Row>
                        <Col>
                            {PokemonAbilities ? PokemonAbilities : <div>No Abilities</div>}
                        </Col>
                    </Row>
                </Col>
                <Col className={st.fullInfoStatsColumns}>
                    <Row className={st.fullInfoAllStatsTypes}>Held Items</Row>
                    <Row>
                        <Col>
                            {PokemonHeldItems ? PokemonHeldItems : <div>No Held Items</div>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}


export default AdditionalInfo;
