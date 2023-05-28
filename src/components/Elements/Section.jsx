
const Section = ({ children, className }) => {
  return (
    <>
      <section className={`container ${className}`} >
        {children}
      </section>
    </>
  )
}

export default Section
