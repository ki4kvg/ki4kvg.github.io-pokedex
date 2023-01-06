import {Avatar, Card} from "antd";
import Meta from "antd/es/card/Meta";
import {useNavigate} from "react-router-dom";
import st from "./PokemonCard.module.css"
import PokemonCardDescription from "./PokemonCardDescription/PokemonCardDescription";
import {useEffect, useState} from "react";

const PokemonCard = ({p}: any) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const onChange = () => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    };

    useEffect(() => {
        onChange();
    }, [])

    return (
        <Card loading={loading}
              className={st.card}
              onClick={() => navigate(`/pokemon/${p.name}`)}
              hoverable={true}>
            <Meta
                className={st.cardMeta}
                avatar={p.sprites.other.home.front_default === null ? <Avatar
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"}/> :
                    <Avatar src={p.sprites.other.home.front_default}/>}
                description={<PokemonCardDescription p={p}/>}
                title={p.name}
            />
        </Card>
    )
}

export default PokemonCard;
