import styles from './nav.module.css';

const Nav: React.FC = () => {
  return (
    <>
      <nav className ="main-nav">
        {/* <!-- ***** Logo Start ***** --> */}
        <a href="index.html" className ="logo">
          <img src="assets/images/logo.png"/>
        </a>
        {/* <!-- ***** Logo End ***** --> */}
        {/* <!-- ***** Menu Start ***** --> */}
        <ul className ="nav">
          <li className ="scroll-to-section"><a href="#top" className ="active">Home</a></li>
          <li className ="scroll-to-section"><a href="#men">Men's</a></li>
          <li className ="scroll-to-section"><a href="#women">Women's</a></li>
          <li className ="scroll-to-section"><a href="#kids">Kid's</a></li>
          <li className ="submenu">
            <a href="javascript:;">Pages</a>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="single-product.html">Single Product</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </li>
          <li className ="submenu">
            <a href="javascript:;">Features</a>
            <ul>
              <li><a href="#">Features Page 1</a></li>
              <li><a href="#">Features Page 2</a></li>
              <li><a href="#">Features Page 3</a></li>
              <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
            </ul>
          </li>
          <li className ="scroll-to-section"><a href="#explore">Explore</a></li>
        </ul>
        <a className ='menu-trigger'>
          <span>Menu</span>
        </a>
        {/* <!-- ***** Menu End ***** --> */}
      </nav>
    </>
  )
}

export default Nav;