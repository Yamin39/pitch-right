const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-5 justify-between px-5 pt-[2rem] pb-12">
      <div>
        <p className="max-w-[24.313rem] md:text-lg leading-8 mt-3">
          Professional sales support for SMEs, tailored to <br /> boost your business growth.
        </p>
      </div>
      <div>
        <p className="max-w-[24.313rem] md:text-lg md:text-right leading-8 mt-3">
          <a href="tel:+0208 603 7118" className="hover:underline">
            T: 0208 603 7118
          </a>
          <a href="mailto:sales@pitchright.co.uk" className="ml-4 hover:underline">
            E: sales@pitchright.co.uk
          </a>
          <br />© Pitch Right Ltd. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
