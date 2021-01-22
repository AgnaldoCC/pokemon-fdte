import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import closeIcon from '../assets/images/close.png';
import Pokeball from "../assets/images/pokeball.png";
import Shield from "../assets/images/shield.png";
import Sword from "../assets/images/sword.png";
import Speed from "../assets/images/speed.png";
import EditIcon from "../assets/images/editIcon.png";
import Confirm from "../assets/images/checkIcon.png";

import TextInput from "./TextInput";

import translations from "../assets/utils/translations.json";

import { capturePokemon, changePokemonName, releasePokemon } from "../store/actions/map";
import { useDispatch } from 'react-redux';

const InfoModal = ({ closeModal, currentPokemon, currentPokemonPosition, isOpen, isCaptured }) => {

    const dispatch = useDispatch();

    const [editingName, setEditingName] = useState(false);
    const [pokemonName, setPokemonName] = useState("")

    const stats = isCaptured && [
        { name: "Defesa", value: currentPokemon.stats[2].base_stat, icon: Shield },
        { name: "Ataque", value: currentPokemon.stats[1].base_stat, icon: Sword },
        { name: "Defesa Especial", value: currentPokemon.stats[4].base_stat, icon: Shield },
        { name: "Ataque Especial", value: currentPokemon.stats[3].base_stat, icon: Sword },
        { name: "Velocidade", value: currentPokemon.stats[5].base_stat, icon: Speed }
    ]

    useEffect(() => {
        setPokemonName(currentPokemon.name)
    }, [currentPokemon.name])

    return (
        <>
            {isOpen &&
                <div className="modal">
                    <div className="modal__content">
                        <img className="modal__close" src={closeIcon} alt="Fechar" onClick={() => closeModal()} />
                        <div className="modal__top" />
                        <div className={`modal__body ${isCaptured ? "modal__body--captured" : ""}`}>
                            <div className="modal__image">
                                <img className="modal__pokemonImage" alt="Pokemon Image" src={currentPokemon.sprites.front_default} />
                            </div>
                            <div className="modal__name">
                                {!editingName &&
                                    <>
                                        <p className="modal__name--name">{pokemonName}</p>
                                        <img className="modal__name--icon" alt="Change Name" src={EditIcon} onClick={() => setEditingName(true)} />
                                    </>
                                }
                                {editingName &&
                                    <>
                                        <TextInput className="modal__name--input" name="Pokemon Name" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
                                        <div className="modal__name--buttonIcon modal__name--confirm" onClick={(e) => {
                                            dispatch(changePokemonName(pokemonName, currentPokemonPosition))
                                            setEditingName(false)
                                        }}>
                                            <img alt="Confirm icon" src={Confirm} />
                                        </div>
                                        <div className="modal__name--buttonIcon modal__name--close" onClick={() => {
                                            setEditingName(false);
                                            setPokemonName(currentPokemon.name)

                                        }}>
                                            <img alt="Cancel icon" src={closeIcon} />
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="modal__stats">
                                <div className="modal__stat modal__stat--hp">
                                    <p className="modal__stat--title">HP</p>
                                    <p className="modal__stat--value">{currentPokemon.stats[0].base_stat}/{currentPokemon.stats[0].base_stat}</p>
                                </div>
                                <div className="modal__stat modal__stat--height">
                                    <p className="modal__stat--title">Altura</p>
                                    <p className="modal__stat--value">{currentPokemon.height} m</p>
                                </div>
                                <div className="modal__stat modal__stat--weight">
                                    <p className="modal__stat--title">Peso</p>
                                    <p className="modal__stat--value">{currentPokemon.weight} kg</p>
                                </div>
                            </div>
                            <div className="modal__line">
                                <div className="modal__line--line" />
                                <label className="modal__line--label">Tipo</label>
                            </div>
                            <div className="modal__types">
                                {currentPokemon.types.map((e, i) => {
                                    return <label key={i} className={`modal__types--type modal__types--type--${e.type.name}`} style={{ marginRight: i % 2 === 0 ? "10px" : "0", background: translations[e.type.name].color }}>{translations[e.type.name].name}</label>
                                })}
                            </div>
                            <div className="modal__line">
                                <div className="modal__line--line" />
                                <label className="modal__line--label">Habilidades</label>
                            </div>
                            <div className="modal__abilities">
                                {currentPokemon.abilities.map((e, i) => {
                                    return <label key={i} className="modal__abilities--ability">{`${e.ability.name}${i < currentPokemon.abilities.length - 1 ? ", " : ""}`} </label>
                                })}
                            </div>
                            {!isCaptured &&
                                <div className="modal__pokeball" onClick={() => dispatch(capturePokemon(currentPokemon))}>
                                    <img className="modal__pokeball--img" alt="Pokeball" src={Pokeball} />
                                </div>
                            }

                            {isCaptured &&
                                <div className="modal__statistics">
                                    <div className="modal__line">
                                        <div className="modal__line--line" />
                                        <label className="modal__line--label">Estatísticas</label>
                                    </div>
                                    {stats.map((e, i) => {
                                        return (
                                            <div key={i} className="modal__statistics--row">
                                                <img className="modal__statistics--row--icon" alt="Stat icon" src={e.icon} />
                                                <label className="modal__statistics--row--name">{e.name}</label>
                                                <label className="modal__statistics--row--value">{e.value}</label>
                                            </div>
                                        )
                                    })}
                                    <button className="modal__statistics--button" onClick={() => dispatch(releasePokemon(currentPokemonPosition))}>Liberar Pokemon</button>
                                </div>

                            }

                        </div>
                    </div>
                </div>

            }
        </>
    );
}


InfoModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};

export default InfoModal;
