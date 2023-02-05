import tw from 'twin.macro';

export interface IFooterProps extends React.ComponentProps<'footer'> {}

const Footer = (): JSX.Element => {
  return (
    <footer css={[tw`flex flex-row justify-center h-[100px]`]}>
      This is Footer
    </footer>
  );
};

export default Footer;
