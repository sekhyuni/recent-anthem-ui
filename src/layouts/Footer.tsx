import tw from 'twin.macro';

export interface IFooterProps extends React.ComponentProps<'footer'> {}

const Footer = () => {
  return (
    <footer css={[tw`flex flex-row justify-center`]}>This is Footer</footer>
  );
};

export default Footer;