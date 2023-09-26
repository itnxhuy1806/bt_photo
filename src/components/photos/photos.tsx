import { FC, ReactNode, createContext, useState } from "react";
import { IComponentBaseProps } from "@/src/types";
import classNames from "classnames";
import PhotoFilter from "./photo-filter";
import PhotoList from "./photo-list";
import PhotoItem from "./photo-item";

interface IPhotos {
  Filter: typeof PhotoFilter;
  List: typeof PhotoList;
  Item: typeof PhotoItem;
}

export interface IPhotosProps extends IComponentBaseProps {
  children?: ReactNode[];
}

const Photos: FC<IPhotosProps> & IPhotos = ({ className, children }) => {
  return <div className={classNames(className)}>{children}</div>;
};

Photos.displayName = "Photos";
Photos.Filter = PhotoFilter;
Photos.List = PhotoList;
Photos.Item = PhotoItem;

export default Photos;
