import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {getPokemonInfoAction} from "../../store/actions/pokemonActions";
import Preloader from "../../components/Preloader/Preloader";
import PokemonMainInfo from "../../components/PokemonInfoComponents/PokemonMainInfo/PokemonMainInfo";
import {Layout, Row} from "antd";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";
import st from "./PokemonInfo.module.css"
import AdditionalInfo from "../../components/PokemonInfoComponents/PokemonAdditionalInfo/PokemonAdditionalInfo";
import {openNotification} from "../../components/Notification/Notification";

const {Content} = Layout;

const PokemonDetail = () => {

    const dispatch = useAppDispatch();
    const {name} = useParams();


    const pokemonInfo = useAppSelector(state => state.pokemonReducer.pokemon);
    const {error, isLoading} = useAppSelector(state => state.pokemonReducer);

    useEffect(() => {

        dispatch(getPokemonInfoAction(name));
    }, [name])

    if (error) {
        openNotification('Pokemon Detail Info', `Something went wrong: ${error}`, 'error')
    }
    if (isLoading) {
        return (
            <Layout.Content>
                <Preloader/>
            </Layout.Content>
        )
    }
    return (
        <Layout>
            <Content>
                <Row className={st.mainRow}>
                    <PokemonMainInfo pokemonInfo={pokemonInfo}/>
                    <AdditionalInfo pokemonInfo={pokemonInfo}/>
                </Row>
            </Content>
        </Layout>
    )
}

export default PokemonDetail;