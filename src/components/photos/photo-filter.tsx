import { IComponentBaseProps } from "@/src/types";
import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

export interface IPhotoFilterProps extends IComponentBaseProps {
  value: string;
  onTextChange?: (text: string) => void;
}

const PhotoFilter: FC<IPhotoFilterProps> = ({ value, onTextChange }) => {
  return (
    <div className="flex items-center w-full gap-2">
      <div className="">Search</div>
      <TextField size="small" rows={1} value={value} onChange={(e) => onTextChange?.(e.target.value)} />
    </div>
  );
};

PhotoFilter.displayName = "PhotoFilter";

export default PhotoFilter;
