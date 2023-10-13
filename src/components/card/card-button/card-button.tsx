import classNames from 'classnames';

import { Button } from '../../../ui/button/button';

import styles from './card-button.module.css';

type ICardButtonProps = {
  bookStatus: string | null;
  inUseUntil?: string;
};

export const CardButton = ({ bookStatus, inUseUntil }: ICardButtonProps) => {
  let buttonText;
  switch (bookStatus) {
    case 'available':
      buttonText = 'Забронировать';
      break;
    case 'booked':
      buttonText = 'Забронирована';
      break;
    case 'in use':
      buttonText = `Занята до ${inUseUntil}`;
      break;
    default:
      buttonText = 'Забронирована';
  }

  return (
    <div>
      <Button
        className={classNames(
          styles.button,
          { [styles.booked]: bookStatus === 'booked' },
          { [styles.inUse]: bookStatus === 'in use' }
        )}
        text={buttonText}
      />
    </div>
  );
};
