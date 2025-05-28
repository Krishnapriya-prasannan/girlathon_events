import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer row" style={{ margin: "0px" }}>
      <div className="Footer-Top">
        <a href="#">
          <img
  src="/images/GDSCfooter.png"
  alt="GDSC logo"
  
/>
          <span>DSC MACE</span>
        </a>
        <p>Connect with Us</p>
        <div className="social">
          <a href="https://x.com/gdsc_mace?s=20" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.instagram.com/dsc_mace/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/gdsc-mace/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="Footer-Bottom">
        <p>
          &#169; Copyright DSC MACE. All Rights Reserved.
          <br />
          Designed by{" "}
          <a href="https://github.com/abhinav-18max/girlathon-portal" target="_blank" rel="noopener noreferrer" style={{ cursor: "none" }}>
            Team Girlathon
          </a>
        </p>
      </div>
    </div>
  );
}
