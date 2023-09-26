import { IComponentBaseProps } from "@/src/types";
import classNames from "classnames";
import { FC } from "react";

export interface ITitleProps extends IComponentBaseProps {
  title?: string;
}

const Title: FC<ITitleProps> = ({ className, title }) => {
  return <h1 className={classNames(className, "text-3xl font-bold")}>{title}</h1>;
};

Title.displayName = "Title";

export default Title;
