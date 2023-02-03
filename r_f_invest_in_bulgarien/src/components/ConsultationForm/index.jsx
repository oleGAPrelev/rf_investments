import React from 'react';
import {useForm} from 'react-hook-form';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import s from './index.module.css';

export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm({mode: 'onBlur'});
  
  const formHandleSubmit = (data) => {
    fetch('http://localhost:3002/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => (response.json()))
      .then((response) => {
        if (response.status === 'success') {
          alert('Message Sent.');
        } else if (response.status === 'fail') {
          alert('Message failed to send.')
        }
      });
    reset();
  }
  
  return (
    <form className={s.consultation_form} onSubmit={handleSubmit(formHandleSubmit)}>
      <div className={s.daten_block}>
        <label>
          <p>Vorname, Nachname</p>
          <Input {...register('name', {required: true})}/>
          {errors.name && <span className={s.error}>Dieses Feld ist erforderlich</span>}
        </label>
        
        <label>
          <p>Telefonnummer</p>
          <Input {...register('phone', {required: true})}/>
          {errors.phone && <span className={s.error}>Dieses Feld ist erforderlich</span>}
        </label>
      </div>
      <Button type={'submit'}>Kontaktiere Uns</Button>
    </form>);
}
