import tw from 'twin.macro';

export interface ITimeProps {
  time: string;
}

const Time = ({ time }: ITimeProps) => {
  return (
    <>
      <span>
        {`${time.slice(0, 4)}.${time.slice(4, 6)}.${time.slice(6, 8)}`}
      </span>
      &nbsp;
      <span css={[tw`text-sky-300`]}>{`${time.slice(8, 10)}:00`}</span>
    </>
  );
};

export default Time;
