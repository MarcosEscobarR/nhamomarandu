import React, {useReducer} from 'react'

import mapaReducer from "./mapaReducer"
import mapaContext from "./mapaContex";

import { VERIFICA_REGISTRO } from "../../type";
const MapaState = props => {
    const initialState = {
        coordenadasDefault :{
            lat: "-25.2966809",
            long: "-57.6681299",

        }, 
        coordenadas: {
            lat: "-25.2728675",
            long: "-57.5666722",
            lugar: "Centro Cultural Paraguayo-Americano",
            hora: "de 8:00 a 12: 00"
        },
        enRegistro: true,
    }

    const [state, dispatch] = useReducer(mapaReducer, initialState)

    //funciones
    const verificaLugar = (estado) => {
        dispatch({
            type: VERIFICA_REGISTRO,
            payload: estado
        })
    }

    return (
        <mapaContext.Provider
            value = {{
                coordenadasDefault: state.coordenadasDefault,
                coordenadas: state.coordenadas,
                enRegistro: state.enRegistro,

                verificaLugar,
            }}
        >
            {props.children}
        </mapaContext.Provider>
    )
}

export default MapaState