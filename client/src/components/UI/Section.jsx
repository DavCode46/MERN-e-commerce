import FiltersTab from '@ui/FiltersTab'

const Section = ({title, children, tab}) => {
  return (
    <div className='flex flex-col m-auto'>
        <h2 className="text-2xl font-bold mb-8 mt-5">{title}</h2>
        {tab ?  <FiltersTab /> : null}
        {children}
    </div>
  )
}

export default Section