const SectionHeader = ({ title, subttile }) => {
  return (
    <div className="text-center mb-4 w-full max-w-4xl p-3 m-auto">
      <h1 className="text-2xl font-bold uppercase">{title}</h1>
      <p className=" text-sm">{subttile}</p>
    </div>
  )
}

export default SectionHeader
