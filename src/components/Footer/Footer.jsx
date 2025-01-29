import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 footer sm:footer-horizontal footer-center  text-black">
 <div>
 <a href="/" className="btn btn-ghost text-xl">Gadget Heaven</a>
 <p className="mt-2">Leading the way in cutting-edge technology and innovation.</p>
 </div>
 <hr className=' w-5xl mx-auto' />
      <div className="footer sm:footer-horizontal text-base-content p-5">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
 
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>

  </nav>
</div>
    </footer>
  );
}

export default Footer;
