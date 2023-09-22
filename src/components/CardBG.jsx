import React from 'react';

export default function CardBG(props) {
  return (
    <div class='container grid grid-rows-1 bg-BC-white p-8 rounded-lg self-center items-center content-center w-auto h-auto'>
      <div class='grid grid-cols-2'>
        <img src={props.imgVector} alt='Brightcoders Logo' class='pl-20 pr-10' />
        <div class='container items-center justify-center self-center '>
          <div>
            <text class='text-2xl text-BC-blue font-bold font-body'>{props.title}</text>
          </div>
          <div>
            <text class='text-2xl text-BC-purple font-body'>{props.subtitle}</text>
          </div>
        </div>
      </div>
      <div class='grid grid-rows-3 self-center items-center content-center mt-10'>
        <div>
          <text class='text-sm font-body'>{props.textContent}</text>
        </div>
        <div>
          <text class='text-sm font-bold font-body'>{props.textContentOptional}</text>
        </div>
        <div>
          <text class='text-BC-blue text-sm underline font-body'>{props.textLink}</text>
        </div>
      </div>
    </div>
  );
}
