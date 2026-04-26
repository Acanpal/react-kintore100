import styles from "./Button.module.css";

export function Button (props) {
  
  const type = props.type;
  const children = props.children;

  function handleClick() {
    alert("onclick!")
  }

  return (
    <button className={styles.button} type={type} onClick={handleClick}> 
    {/* classNameと書く、stylesもpopsみたいに扱う、styles.クラス名でok */}
      {children}
    </button>
  )
}

export default Button;