import { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CarService } from '../../../../services/car.service'
import ErrorMessage from './ErrorMessage'
import { useCreateCar } from './useCreateCar'
import { ICarData } from '../../../../types/car.interface'

const clearData = {
    name: '', price: '', image: ''
}
const CreateCarForm = () => {

    const {register, handleSubmit, reset, formState:{errors}} = useForm<ICarData>({
        mode: 'onChange'
    })

    const {createCar} = useCreateCar(reset)

    return <form className={styles.form} onSubmit={handleSubmit(createCar)}>
        <input 
            {...register ('name', {required: 'Name required'})}
            placeholder="Name" 
            />
        <ErrorMessage error={errors?.name?.message} />
        <input placeholder="Price" 
             {...register ('price', {required: true})}/>
        <input placeholder="Image" 
             {...register ('image', {required: true})}/>
        <button className='btn' >Create</button>
    </form>
}

export default CreateCarForm