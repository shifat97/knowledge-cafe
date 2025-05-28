const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl md:text-[40px] font-medium">Knowledge Cafe</h1>
      <img
        className="rounded-full"
        width={60}
        height={60}
        src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
