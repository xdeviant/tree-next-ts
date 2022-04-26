export type IData = {
    id: string;
    label: string;
    type?: string;
    selected?: Boolean;
    children?: IData[];
};

export type IDataItem = {
    id: string;
    label: string;
    type?: string;
    selected?: Boolean;
    children?: IDataItem[];
}