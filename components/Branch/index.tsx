import React, { useState } from 'react';
import { Node } from '../Node';
import { Props } from './types';

export const Branch = ({ item, lvl }: Props) => {
	const [selected, setSelected] = useState(item.selected ?? false);
	const hasChildren = item.children && item.children.length !== 0;

	const handleSelect = () => {
		setSelected((prev: any) => !prev);
	};

	const renderBranches = () => { 
		if (hasChildren) {
			const newLvl = lvl + 1;
		
			return (item as any).children.map((child: any) => {
				return <Branch key={child.id} item={child} lvl={newLvl} />
			});
		}

		return null;
	};

	return (
		<>
			<Node
				item={item}
				handler={handleSelect}
				selected={selected}
				hasChildren={hasChildren}
				lvl={lvl}
			/>

			{ selected && renderBranches() }
		</>
	);
};
