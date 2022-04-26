import { IDataItem } from "../../types/data"

export type Props = {
    item: IDataItem,
    hasChildren?: Boolean,
    lvl: number,
    handler: () => void,
    selected?: Boolean,
}
