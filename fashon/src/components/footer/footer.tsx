import styles from'./footer.module.css';
const {footercontainer} = styles;
const Footer = () => {
  return (
    <div>
      <div className={footercontainer}>
      <p style={{color:"white"}}>&copy; 2024 Ecom. All rights reserved.</p>

      </div>
    </div>
  )
}

export default Footer
