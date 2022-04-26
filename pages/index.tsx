import React from 'react';
import type { NextPage } from 'next';
import { Tree } from '../components/Tree';
import { data } from '../utils/data';

const Home: NextPage = () => {
  return (
    <Tree data={data} />
  )
}

export default Home;
