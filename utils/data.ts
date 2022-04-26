import { IData } from '../types/data';

export const data: IData[] = [
    {
        id: '1',
        label: 'images',
        type: 'folder',
        children: [
            {
                id: '2',
                label: 'cat.png',
            },
            {
                id: '3',
                label: 'Dogs',
                type: 'folder',
                children: [
                    {
                        id: '4',
                        label: 'hasky.png',
                    },
                    {
                        id: '5',
                        label: 'corgy.png',
                    }
                ]
            },
        ]
    },
    {
        id: '6',
        label: 'games',
        type: 'folder',
        children: [
            {
                id: '7',
                label: 'PathOfExile.exe',
            },
            {
                id: '8',
                label: 'HotA.exe',
            },
        ]
    }
];