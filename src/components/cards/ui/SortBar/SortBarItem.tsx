import { FC, ReactNode } from 'react';
import classes from './SortBar.module.css';

interface Props {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
}

export const SortBarItem: FC<Props> = ({ children, isActive, onClick }) => {
  return <button onClick={onClick} className={[classes.btn, isActive ? classes.active : ''].join(' ')}>{children}</button>;
};
