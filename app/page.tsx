'use client'
import Image from 'next/image';
import {JSX, useState} from "react";
import {Metadata} from "next";
import Htag from "@/components/Htag/Htag";
import Button from "@/components/Button/Button";
import P from '@/components/P/P'
import Logo from '../public/vercel.svg'
import Tag from "@/components/Tag/Tag";
import Rating from "@/components/Rating/Rating";

// export async function generateMetadata(): Promise<Metadata> {
//   //...operation with backend
//   return {
//     title: "ComputedTitle"
//   }
// }

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag="h1">
        Текст
      </Htag>
      <Button appearance={'primary'} arrow={"down"}>Узнать подробнее</Button>
      <Button appearance={'ghost'} arrow={'down'}>Кнопка</Button>
      <P size={'l'}>Большой</P>
      <P size={'m'}>Средний</P>
      <P size={'s'}>Маленький</P>
      <Tag size={'s'}>Ghost</Tag>
      <Tag size={'m'} color={'red'} href={'cats'}>Red</Tag>
      <Tag size={'s'} color={'green'}>Green</Tag>
      <Tag size={'m'} color={'primary'}>primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </div>
  );
}
