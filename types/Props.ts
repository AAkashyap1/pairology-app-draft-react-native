import { FC } from "react";

export interface Question {
  label: string,
  options: { name: string, link?: string }[],
  leftExtreme: string,
  rightExtreme: string,
  link: string,
  linkText: string,
  hideTitle: boolean,
} 


export interface Props {
  label: string,
  options: { name: string, link?: string }[],
  leftExtreme: string,
  rightExtreme: string,
  link: string,
  linkText: string,
  hideTitle: boolean,
  component: FC<Question>,
}