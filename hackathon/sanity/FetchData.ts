import React from 'react'
import { client } from './lib/client'

export default async function FetchData() {
    const data =  await fetch(`https://ghxuy6zh.api.sanity.io/v2023-08-27/data/query/production?query=*%5B_type%3D%3D%27products%27%5D`,
    {cache:'no-cache',}
    ) 
  return data;
}

