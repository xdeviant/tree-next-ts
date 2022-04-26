import React from 'react';
import { IData } from '../../types/data';
import { Branch } from '../Branch';
import { Props } from './types';

export const Tree = ({ data }: Props) => {
	return (
		<>
			{ data.map((item: IData) => <Branch key={item.id} item={item} lvl={0} />) }
		</>
	);
}

export default Tree;