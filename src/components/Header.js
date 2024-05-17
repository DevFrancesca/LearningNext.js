

const Header = (props) => {
  return (
    <div className="header">
      <h2>{props.state}</h2>
      <p>{props.number}</p>
    </div>
  )
}

export default Header
