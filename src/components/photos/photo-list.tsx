import { FC } from "react";
import Item from "./photo-item";
import { IComponentBaseProps } from "@/src/types";
import classNames from "classnames";

export interface IPhotoListProps extends IComponentBaseProps {
  items: Parameters<typeof Item>[0]["item"][];
}

const PhotoList: FC<IPhotoListProps> = ({ items, className }) => {
  return (
    <div className={classNames(className)}>
      {items.map((item, index) => (
        <Item key={index} order={index + 1} item={item} />
      ))}
    </div>
  );
};

PhotoList.displayName = "PhotoList";

export default PhotoList;
