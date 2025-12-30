
const OPTION_NAMES = [
  {id: 1, name:'Popular'},
  {id: 2, name:'Price: low to high'},
  {id: 3, name:'Price: high to low'},
  {id: 4, name:'Top rated first'},
];

const ARROW_SIZE = {
  WIDTH: '7',
  HEUGHT: '4'
};


const FormSorting = () => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by&nbsp;</span>
    <span className="places__sorting-type" tabIndex={0}>
      Popular
      <svg className="places__sorting-arrow" width={ARROW_SIZE.WIDTH} height={ARROW_SIZE.HEUGHT}>
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {
        OPTION_NAMES.map((item) => (
          <li
            key={item.id}
            tabIndex={0}
            // временное решение
            className={`places__option ${item.id === 1 ? 'places__option--active' : ''}`}
          >
            {item.name}
          </li>
        ))
      }
    </ul>
  </form>
);


export default FormSorting;
