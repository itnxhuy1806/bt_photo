import { IComponentBaseProps } from "@/src/types";
import classNames from "classnames";
import { FC } from "react";

export interface IPhotoItem {
  text: string;
  src?: string;
}

export interface IPhotoItemProps extends IComponentBaseProps {
  order?: number;
  item: IPhotoItem;
}

const PhotoItem: FC<IPhotoItemProps> = ({ className, order, item }) => {
  return (
    <div className={classNames("flex gap-1 py-1", className)}>
      <div className="">{order}</div>
      <div className="">-</div>
      <div className="">{item.text}</div>
    </div>
  );
};

PhotoItem.displayName = "PhotoItem";

export default PhotoItem;
