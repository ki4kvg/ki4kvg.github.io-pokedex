import {Checkbox, Divider, Row} from "antd";
import st from "./CategoriesRadioGroup.module.css"
import React, {FC, useEffect, useState} from "react";
import {getPokemonByTypeAction} from "../../store/actions/pokemonActions";
import {EventType, SiderComponentType} from "../../types/tsTypes";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";

const CheckboxGroup = Checkbox.Group;

const CategoriesRadioGroup: FC<SiderComponentType> = ({checkedList, setCheckedList}) => {

    const dispatch = useAppDispatch();

    const PokemonTypes = useAppSelector(state => state.pokemonReducer.pokemonTypes);

    const [checkAll, setCheckAll] = useState(true);

    const onChangeTypes = (list: Array<any>) => {
        setCheckedList(list);
        setCheckAll(list.length === PokemonTypes.length);
    };

    const onCheckAllChange = (e: EventType) => {
        setCheckedList(e.target.checked ? PokemonTypes : []);
        setCheckAll(e.target.checked);
    };

    useEffect(() => {
        checkedList?.map((t: string, index, array) => {
            dispatch(getPokemonByTypeAction({typeName: t, lastIndexCheck: array.length - 1 === index}));
        })
    }, [checkedList])

    useEffect(() => {
        setCheckedList(PokemonTypes);
    }, [PokemonTypes])

    return (
        <Row className={st.checkboxGroup}>
            <Checkbox className={st.checkboxAll}
                      onChange={onCheckAllChange}
                      checked={checkAll}>
                Check all
            </Checkbox><Divider/>
            <CheckboxGroup className={st.checkbox}
                           options={PokemonTypes}
                           value={checkedList}
                           onChange={onChangeTypes}/>
        </Row>
    )
}

export default CategoriesRadioGroup;