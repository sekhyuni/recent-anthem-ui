import tw from 'twin.macro';

import { MutableRefObject } from 'react';

import { ReactComponent as ArrowDownIcon } from '~assets/svg/icon-arrow-down.svg';
import Dropdown from '~components/commons/Dropdown/Dropdown';
import Time from './Time';

export interface ITimeArea {
  time: string;
  objOfRef: {
    [key: string]: MutableRefObject<HTMLDivElement | HTMLButtonElement | null>;
  };
  isOpenDropdown: boolean;
  setIsOpenDropdown: (isOpenDropdown: boolean) => void;
  listOfCanSelectTime: string[];
  handleChangeTime: (item: string) => void;
  isLoading: boolean;
}

const TimeArea = ({
  time,
  objOfRef,
  isOpenDropdown,
  setIsOpenDropdown,
  listOfCanSelectTime,
  handleChangeTime,
  isLoading,
}: ITimeArea) => {
  return (
    <div
      id='time-area'
      css={[tw`flex flex-row justify-center py-[10px] text-2xl`]}
    >
      {isLoading ? (
        <span css={[tw`h-[32px]`]}></span>
      ) : (
        <div css={[tw`relative`]}>
          <div id='time-wrapper'>
            <Time time={time} />
            <button
              ref={objOfRef.buttonRef as MutableRefObject<HTMLButtonElement>}
              onClick={() => {
                setIsOpenDropdown(!isOpenDropdown);
              }}
            >
              <ArrowDownIcon />
            </button>
          </div>
          {isOpenDropdown && (
            <Dropdown
              ref={objOfRef.dropdownRef as MutableRefObject<HTMLDivElement>}
              listOfItem={listOfCanSelectTime}
              setItem={handleChangeTime}
              setIsOpenDropdown={setIsOpenDropdown}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TimeArea;
