import classNames from 'classnames';

import styles from './button.module.css';

type IButtonProps = {
  className: string;
  text?: string;
  icoUrl?: string;
};

export const Button = ({ className, text, icoUrl }: IButtonProps) => (
  <button type='button' className={classNames(className, [styles.button])}>
    {text ? text : ''}
    {icoUrl ? <img src={icoUrl} alt='' /> : ''}
  </button>
);
