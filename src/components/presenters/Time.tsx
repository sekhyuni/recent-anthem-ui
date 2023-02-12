import tw from 'twin.macro';

export interface ITimeProps {
  crawlingTime: string;
}

const Time = ({ crawlingTime }: ITimeProps) => {
  return (
    <>
      <span>
        {`${crawlingTime.slice(0, 4)}.${crawlingTime.slice(
          4,
          6
        )}.${crawlingTime.slice(6, 8)}`}
      </span>
      &nbsp;
      <span css={[tw`text-sky-300`]}>{`${crawlingTime.slice(8, 10)}:00`}</span>
    </>
  );
};

export default Time;
