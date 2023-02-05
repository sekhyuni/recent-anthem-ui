import tw, { TwStyle } from 'twin.macro';

import { useRef, ComponentProps, Dispatch, SetStateAction } from 'react';

import { ReactComponent as ArrowLeftIcon } from '~assets/svg/icon-arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '~assets/svg/icon-arrow-right.svg';

export interface IPaginationProps extends ComponentProps<'div'> {
  /** page number */
  currentPage: number;
  /** set page number */
  setCurrentPage: Dispatch<SetStateAction<number>>;
  /** total row count */
  total: number;
  /** row count per page */
  limit: number;
  /** page length (default : 5) */
  lengthOfPage?: number;
  /** add TwStyle to component root */
  twCSS?: TwStyle;
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  total,
  limit,
  lengthOfPage = 5,
  twCSS,
  ...rest
}: IPaginationProps): JSX.Element => {
  const countOfAllPages: number = Math.ceil(total / limit);

  const pageStartIdx = useRef<number>(1);
  const pageEndIdx = useRef<number>(lengthOfPage);

  return (
    <div
      css={[tw`flex flex-row justify-center items-center h-[32px]`, twCSS]}
      {...rest}
    >
      <button
        css={[
          tw`flex flex-row items-center w-[32px] h-[32px] p-[10px] mr-[4px]`,
        ]}
        disabled={currentPage === 1}
        onClick={() => {
          if (currentPage === pageStartIdx.current) {
            pageStartIdx.current--;
            pageEndIdx.current--;
          }

          setCurrentPage((prev: number): number => prev - 1);
        }}
      >
        <ArrowLeftIcon fillOpacity={currentPage === 1 ? '0.3' : '1'} />
      </button>
      {Array(countOfAllPages)
        .fill('')
        .map((_, idx): JSX.Element | undefined => {
          if (
            idx >= pageStartIdx.current - 1 &&
            idx <= pageEndIdx.current - 1
          ) {
            return (
              <button
                css={[
                  tw`w-[32px] h-[32px] py-[8px] mr-[4px] rounded-[3px] text-[12px] leading-[16px] font-medium text-[#696f8c]`,
                  currentPage === idx + 1 &&
                    tw`bg-sky-200 font-semibold text-black`,
                ]}
                key={idx + 1}
                onClick={() => {
                  setCurrentPage(idx + 1);
                }}
              >
                {idx + 1}
              </button>
            );
          }
        })}
      <button
        css={[tw`flex flex-row items-center w-[32px] h-[32px] p-[10px]`]}
        disabled={currentPage === countOfAllPages}
        onClick={() => {
          if (currentPage === pageEndIdx.current) {
            pageStartIdx.current++;
            pageEndIdx.current++;
          }

          setCurrentPage((prev: number): number => prev + 1);
        }}
      >
        <ArrowRightIcon
          fillOpacity={currentPage === countOfAllPages ? '0.3' : '1'}
        />
      </button>
    </div>
  );
};

export default Pagination;
