import "../styles/navbar.scss"

const Navbar = () => {
  return (
    <div class="navbar">
        <div>
            <span class="logo-text">Rogers</span>
        </div>
        <div class="right">
          <div class="links">
              <p>Home</p>
              <p>Events</p>
              <p>Photos</p>
              <p>Message Board</p>
              <p>Family Members</p>
          </div>
          <div className="avatar">
            <img class="avatar-img" src="src/assets/images/unknown-avatar.jpg" alt="" />
          </div>
        </div>
    </div>
  )
}
export default Navbar