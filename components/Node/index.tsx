import React from 'react';
import * as Styled from './styled';
import { Props } from './types';

export const Node = ({ item, hasChildren, lvl, handler }: Props) => {
	return (
		<Styled.Inner lvl={lvl}>
			{hasChildren && (
				<>
					<Styled.SVGFolder onClick={handler} />
				</>
            )}
			{item.type !== 'folder' && <Styled.SVGDocument />}
			{item.label}
		</Styled.Inner>
	);
};
