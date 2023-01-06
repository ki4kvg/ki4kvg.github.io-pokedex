export type SpritesType = {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
    other: OtherSpritesType
}

export type CarouselType = {
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
}

export type PreviewImageType = {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
}

export type OtherSpritesType = {
    home: {
        front_default: string | null
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
    }
}

export type AbilitiesType = {
    ability: {
        name: string
    }
}

export type HeldItemsType = {
    item: {
        name: string
    }
}

export type StatsType = {
    base_stat: number
    stat: {
        name: string
    }
}

export type TypesType = {
    type: {
        name: string
    }
}

export type PokemonBaseStatsType = {
    name: string
    val: number
}

export type pokemonType = {
    id: number
    abilities: Array<AbilitiesType>,
    height: number,
    held_items: Array<HeldItemsType>,
    name: string | undefined,
    sprites: SpritesType,
    stats: Array<StatsType>
    types: Array<TypesType>
    weight: number
}

export type defaultStateType = {
    pokemon: pokemonType | null,
    pokemonShortInfo: Array<pokemonType>,
    pokemonTypes: Array<string>,
    pokemonsByTypesList: Array<string>,
    error: string | unknown
    isLoading: boolean
    isLastRequest: boolean
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export type pokemonInfoType = {
    pokemonInfo: pokemonType | null
}

export type bodyType = {
    typeName: string,
    lastIndexCheck: boolean,
}

export type TypesRequestType = {
    name: string
}

export type PokemonRequestType = {
    pokemon: {
        name: string
    }
}

export type EventType = {
    target: {
        checked: boolean
    }
}

export type PokemonAdditionalInfoType = {
    pokemonInfo: pokemonType | null
}

export type SiderComponentType = {
    checkedList: Array<string>,
    setCheckedList: (a: Array<string>) => void
    paginatorCheck: () => void
}

export type DrawerComponentType = {
    checkedList: Array<string>,
    setCheckedList: (a: Array<string>) => void
    paginatorCheck: () => void
    visible: boolean
    setVisible: (a: boolean) => void
}

export type PaginatorType = {
    total: number,
    limit: number,
    offset: number,
    current: number,
    onChange: (a: number, b: number) => void,
}