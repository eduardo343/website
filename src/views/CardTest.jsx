import React from 'react';
import CardBG from '../components/CardBG';

export default function CardTest() {
  return (
    <>
      <div class='container mx-auto justify-center content-center grid grid-cols-2 grid-rows-3 '>
        <CardBG
          imgVector='https://www.freeiconspng.com/thumbs/laptop-icon/laptop-icon-5.png'
          title='Ruby on Rails'
          subtitle='[web_developer]'
          textContent='Crear y mantener aplicaciones web es el puesto de trabajo más demandado hoy en día en la industria tech —y uno de los mejor pagados. Ruby On Rails es el software de código abierto más cómodo para escribir good, clean code: está centrado en tu satisfacción y en una productividad sostenible.'
          textContentOptional='Imagina todo lo que puedes construir con Ruby on Rails ¡y todas las oportunidades que puedes alcanzar dominándolo!'
          textLink='Explora el programa'
        />
      </div>
    </>
  );
}
