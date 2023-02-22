import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import icoSearch from '../../assets/img/ico-search.svg';
import icoCloseSearch from '../../assets/img/ico-close-search.svg';

import styles from './search.module.css';
import { useWindowDimensions } from '../../hooks/use-window-dimensions';

export const Search = () => {
  const isMobile = useWindowDimensions().width < 768;
  const [mobileSearchActive, setMobileSearchActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target) return;
    const input = event.target as HTMLInputElement;
    const searchText = input.value || '';

    setSearchParams({ search: searchText });
  };

  const toggleMobileSearch = () => setMobileSearchActive((prevState) => !prevState);

  return (
    <div className={classNames(styles.container, { [styles.mobileContainer]: isMobile && mobileSearchActive })}>
      {isMobile ? (
        <button
          className={classNames(styles.buttonMobile)}
          type='button'
          data-test-id='button-search-open'
          onClick={() => {
            setMobileSearchActive(true);
          }}
        >
          <img src={icoSearch} alt='' className='ico' />
        </button>
      ) : (
        <img src={icoSearch} alt='' className='ico' />
      )}
      <input
        onChange={handleSearchInputChange}
        className={classNames(styles.input, {
          [styles.inputMobile]: (!mobileSearchActive && isMobile) || !isMobile,
          [styles.notVisible]: !mobileSearchActive && isMobile,
        })}
        placeholder='Поиск книги или автора…'
        data-test-id='input-search'
      />
      <button
        className={classNames(styles.buttonCloseSearch, {
          [styles.notVisible]: (!mobileSearchActive && isMobile) || !isMobile,
        })}
        type='button'
        data-test-id='button-search-close'
        onClick={() => {
          setMobileSearchActive(false);
        }}
      >
        <img src={icoCloseSearch} alt='' className='ico' />
      </button>
    </div>
  );
};
