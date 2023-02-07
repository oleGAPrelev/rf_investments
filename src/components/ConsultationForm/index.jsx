import React from 'react';
import {useForm} from 'react-hook-form';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import s from './index.module.css';
export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    reset
  } = useForm({mode: 'onChange'});
  
  const formHandleSubmit = (data) => {
    // fetch('http://localhost:3002/send', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then((response) => (response.json()))
    //   .then((response) => {
    //     if (response.status === 'success') {
    //       alert('Message Sent.');
    //     } else if (response.status === 'fail') {
    //       alert('Message failed to send.')
    //     }
    //   });
    console.log(data);
    reset();
  }
  
  return (
    <form className={s.consultation_form} onSubmit={handleSubmit(formHandleSubmit)}>
      <div className={s.daten_block}>
        <label>
          <p>Vorname, Nachname</p>
          <Input {...register('name', {
            required: 'Dieses Feld ist erforderlich',
            pattern: {
              value: /^[A-Za-z\s]+$/i,
              message: 'Nur Buchstaben sind erlaubt'
            }
          })}/>
          {errors?.name && <><br /><span className={s.error}>{errors?.name?.message || 'Fehler!'}</span></>}
        </label>
        
        <label>
          <p>Telefonnummer</p>
          <Input {...register('phone', {
            required: 'Dieses Feld ist erforderlich',
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^[0-9\+\(\)\-\s]+$/,
              message: 'Nur Zahlen, +, -, (, ), und Leerzeichen sind erlaubt'
            }
          })}/>
          {errors?.phone && <><br /><span className={s.error}>{errors?.phone?.message || 'Fehler!'}</span></>}
        </label>
      </div>
      <Button disabled={!isValid} type={'submit'}>Kontaktiere Uns</Button>
    </form>);
}
