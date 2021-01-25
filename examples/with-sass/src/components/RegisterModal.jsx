import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import closeIcon from '../assets/images/close.png';
import Camera from "../assets/images/camera.png";
import CameraPlus from "../assets/images/cameraPlus.png";
import Shield from "../assets/images/shield.png";
import Sword from "../assets/images/sword.png";
import Speed from "../assets/images/speed.png";

import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import Dropdown from "./Dropdown";
import Button from "./Button";

import { capturePokemon, toggleModalRegister } from "../store/actions/map";
import { useDispatch } from 'react-redux';

import translations from "../assets/utils/translations.json";

const RegisterModal = ({ closeModal }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const [types, setTypes] = useState([]);

    const removeType = (index) => {
        setTypes(types.filter((e, i) => i !== index));
    }

    const [image, setImage] = useState(null);

    const handleChangeImage = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    }

    function onSubmit(data) {

        const selectedTypes = types.map((e, i) => {
            return { slot: i + 1, type: { name: e } }
        })

        const filledAbilities = [data.H1, data.H2, data.H3, data.H4].map((e, i) => {
            if (e !== "") {
                return { ability: { name: e, slot: i + 1 } }
            } else {
                return { ability: { name: "", slot: i + 1 } };
            }
        }).filter(elem => elem.ability.name );

        const randomId = Math.floor(Math.random() * (1000 - 807)) + 807;

        const pokemon = {
            name: data.Nome,
            id: randomId,
            height: data.Altura,
            weight: data.Peso,
            abilities: filledAbilities,
            types: selectedTypes,
            stats: [
                { base_stat: data.HP, stat: { name: "hp" } },
                { base_stat: data.Ataque, stat: { name: "attack" } },
                { base_stat: data.Defesa, stat: { name: "defense" } },
                { base_stat: data.AtaqueEspecial, stat: { name: "special-attack" } },
                { base_stat: data.DefesaEspecial, stat: { name: "special-defense" } },
                { base_stat: data.Velocidade, stat: { name: "speed" } }
            ],
            sprites: {
                front_default: image
            }
        }

        console.log(filledAbilities)

        dispatch(capturePokemon(pokemon));
        dispatch(toggleModalRegister());
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <img className="modal__close" src={closeIcon} alt="Fechar" onClick={() => {
                    closeModal();
                }} />
                <div className="modal__top" />
                <div className={`modal__body modal__body--register`}>
                    <div className="modal__image">
                        <input type="file" className="modal__image modal__image--input" onChange={(e) => handleChangeImage(e)} />
                        {image &&
                            <>
                                <label className="modal__previewImage--remove" onClick={() => setImage(null)}>X</label>
                                <img className="modal__previewImage" alt="Preview" src={image} />
                            </>
                        }
                        {!image &&
                            <>
                                <img className="modal__cameraImage" alt="Camera" src={Camera} />
                                <img className="modal__cameraImage modal__cameraImage--plus" alt="Camera Plus" src={CameraPlus} />
                            </>
                        }
                    </div>
                    <div className="modal__form">
                        <form>
                            <TextInput className="modal__form--text" label="Nome" name="Nome" placeholder="Nome" register={register()} />
                            <NumberInput className="modal__form--number" label="HP" placeholder="HP" name="HP" register={register()} />
                            <NumberInput className="modal__form--number" label="Peso" placeholder="Peso" suffix="Kg" name="Peso" register={register()} />
                            <NumberInput className="modal__form--number" label="Altura" placeholder="Altura" suffix="Cm" name="Altura" register={register()} />
                            <div className="modal__line">
                                <div className="modal__line--line" />
                                <label className="modal__line--label">Tipo</label>
                            </div>
                            <Dropdown options={translations} removeType={removeType} types={types} setTypes={setTypes} />
                            <div className="modal__line">
                                <div className="modal__line--line" />
                                <label className="modal__line--label">Habilidades</label>
                            </div>
                            <TextInput className="modal__form--text" placeholder="Habilidade 1" name="H1" register={register()} />
                            <TextInput className="modal__form--text" placeholder="Habilidade 2" name="H2" register={register()} />
                            <TextInput className="modal__form--text" placeholder="Habilidade 3" name="H3" register={register()} />
                            <TextInput className="modal__form--text" placeholder="Habilidade 4" name="H4" register={register()} />
                            <div className="modal__line">
                                <div className="modal__line--line" />
                                <label className="modal__line--label">Estatísticas</label>
                            </div>
                            <NumberInput className="modal__form--number modal__form--number--statistics" label="Defesa" placeholder="00" icon={Shield} name="Defesa" register={register()} />
                            <NumberInput className="modal__form--number modal__form--number--statistics" label="Ataque" placeholder="00" icon={Sword} name="Ataque" register={register()} />
                            <NumberInput className="modal__form--number modal__form--number--statistics" label="Defesa Especial" placeholder="00" icon={Shield} name="DefesaEspecial" register={register()} />
                            <NumberInput className="modal__form--number modal__form--number--statistics" label="Ataque Especial" placeholder="00" icon={Sword} name="AtaqueEspecial" register={register()} />
                            <NumberInput className="modal__form--number modal__form--number--statistics" label="Velocidade" placeholder="00" icon={Speed} name="Velocidade" register={register()} />
                            <Button text="Criar Pokemon" onClick={handleSubmit(onSubmit)} type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
