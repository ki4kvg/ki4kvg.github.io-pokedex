import st from "./PokemonCardDescription.module.css"

const PokemonCardDescription = ({p}: any) => {
    return (
        <div>
            <div className={st.descriptionItem}>Height: {p.height}</div>
            <div className={st.descriptionItem}>Weight: {p.weight}</div>
        </div>
    )
}

export default PokemonCardDescription;