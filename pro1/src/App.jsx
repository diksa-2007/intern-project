import './App.css'

function App() {
  return (
    <>

      {/* Navbar */}
      <header>

        <nav className="navbar">

          <div className="logo">
            Smart Mall Hub
          </div>

          <ul className="nav-links">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#features">Features</a>
            </li>

            <li>
              <a href="#dashboard">Dashboard</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

          <div className="auth-buttons">

            <a href="#" className="btn btn-light">
              Sign In
            </a>

            <a href="#" className="btn">
              Sign Up
            </a>

          </div>

        </nav>

      </header>


      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <h1>
            Smart Mall Shop Management System
          </h1>

          <p>
            A smart and professional platform designed for mall owners
            to manage stores, monitor activities, track records and
            improve shopping management through one digital system.
          </p>

          <div className="hero-buttons">

            <a href="#features" className="btn">
              Explore Features
            </a>

            <a href="#dashboard" className="btn btn-light">
              View Dashboard
            </a>

          </div>

        </div>


        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1200&auto=format&fit=crop"
            alt="Mall"
          />

        </div>

      </section>


      {/* About */}
      <section className="about" id="about">

        <div className="about-content">

          <h2>
            About Smart Mall Hub
          </h2>

          <p>
            Smart Mall Hub is a modern mall management platform created
            specially for mall owners to manage all stores and operations
            from one secure and professional website.
          </p>

          <p>
            This system helps owners maintain records, monitor activities,
            manage shop details and improve overall mall administration
            using a smart digital solution.
          </p>

        </div>

      </section>


      {/* Features */}
      <section className="features" id="features">

        <h2 className="section-title">
          Key Features
        </h2>

        <div className="feature-container">


          <div className="feature-card">

            <h3>
              Centralized Shop Management
            </h3>

            <p>
              Manage all mall shops, records and store details from one platform.
            </p>

          </div>
          <div className="feature-card">

            <h3>
              Tenant Management
            </h3>

            <p>
              Maintain shop owner and tenant information securely and efficiently.
            </p>

          </div>
          <div className="feature-card">

            <h3>
              Smart Monitoring System
            </h3>

            <p>
              Monitor mall activities and track operations in real time.
            </p>

          </div>
          <div className="feature-card">

            <h3>
              Revenue Analytics
            </h3>

            <p>
              Analyse revenue reports and business performance easily.
            </p>

          </div>


          <div className="feature-card">

            <h3>
              Secure Data Management
            </h3>

            <p>
              Protect important mall data using secure management systems.
            </p>

          </div>


          <div className="feature-card">

            <h3>
              Smart Notification System
            </h3>

            <p>
               Send important updates, announcements and alerts to shop owners instantly.
            </p>

          </div>

        </div>

      </section>


      {/* Dashboard */}
      <section className="dashboard" id="dashboard">

        <h2 className="section-title">
          DashBoard
        </h2>

        <div className="dashboard-container">


          <div className="dashboard-card">

            <h3>
              500+
            </h3>

            <p>
              Registered Mall Owners
            </p>

          </div>


          <div className="dashboard-card">

            <h3>
              1200+
            </h3>

            <p>
              Managed Shops
            </p>

          </div>


          <div className="dashboard-card">

            <h3>
              99%
            </h3>

            <p>
              Secure Data Protection
            </p>

          </div>


          <div className="dashboard-card">

            <h3>
              24/7
            </h3>

            <p>
              Smart Monitoring Support
            </p>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section className="contact" id="contact">

        <h2 className="section-title">
          Contact Us
        </h2>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Enter Your Name"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
          />

          <textarea
            rows="5"
            placeholder="Enter Your Message"
          ></textarea>
          <button
            type="submit"
            className="btn"
          >
            Send Message
          </button>

        </form>
      </section>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Smart Mall Hub | Next Gen Web Development Internship
        </p>

      </footer>

    </>
  )
}

export default App

