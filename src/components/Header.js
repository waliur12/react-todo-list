
import PropTypes from 'prop-types';
import  Button  from './header_btn/Button';


const myClickFunc = (e)=>{
console.log(e);
}

const Header = (props) => {
  return (
    <header className="header">
        <h1>Task Tracker {props.title}</h1>
        <Button color='green' text='Add' clickMe={myClickFunc}/>
    </header>
  )
}

// default props if empty from componants

// Header.defaultProps={
//     title:'hello app',
// }
Header.propTypes={
    title:PropTypes.string.isRequired,
}

export default Header