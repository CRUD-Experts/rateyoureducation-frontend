const Feature = ({ icon, title, summary }) => {
  return (
    <div className="flex items-center gap-5">
      <div className=" w-14 h-18 flex-2">
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <div className="flex-1">
        <h2 className="font-bold uppercase">{title}</h2>
        <p className=" text-xs font-light">{summary}</p>
      </div>
    </div>
  );
};

export default Feature;
