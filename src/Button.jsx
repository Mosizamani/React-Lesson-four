
function Button ({ onClick, children }) {
  return (
    <div onClick={onClick}>
        <button onClick={onClick}>
        {children}
        </button>
    </div>
  )
}

export default Button

