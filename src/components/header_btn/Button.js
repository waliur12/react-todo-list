import PropTypes from 'prop-types'

// const clickMe = (e)=>{
// console.log(e);
// }

const Button = ({color,text,clickMe}) => {
  return (
    // <div>Button</div>
<button  className="btn" onClick={clickMe} style={{ backgroundColor:color }}>{text}</button>  

)
}


Button.defaultProps={
    color:'steelblue',
}

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    clickMe:PropTypes.func,

}
export default Button

// import React from 'react'

// export const Button = () => {
//   return (
//     <div>Button</div>
//   )
// }
