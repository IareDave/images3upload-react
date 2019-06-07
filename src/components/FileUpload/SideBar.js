import React from 'react'
// import './sidebar.css'

class SideBar extends React.Component {
  constructor (props) {
    super()

    this.state = {

    }
  }

  render () {
    return (
      <div>
        <div className="page-wrapper chiller-theme toggled">
          <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
            <i className="fas fa-bars"></i>
          </a>
          <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
              <div className="sidebar-brand">
                <a href="#">pro sidebar</a>
                <div id="close-sidebar">
                  <i className="fas fa-times"></i>
                </div>
              </div>
              <div className="sidebar-header">
                <div className="user-pic">
                  <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                    alt="User picture"/>
                </div>
                <div className="user-info">
                  <span className="user-name">Jhon
                    <strong>Smith</strong>
                  </span>
                  <span className="user-role">Administrator</span>
                  <span className="user-status">
                    <i className="fa fa-circle"></i>
                    <span>Online</span>
                  </span>
                </div>
              </div>
              <div className="sidebar-search">
                <div>
                  <div className="input-group">
                    <input type="text" className="form-control search-menu" placeholder="Search...">
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </div>
                    </input>
                  </div>
                </div>
              </div>
              <div className="sidebar-menu">
                <ul>
                  <li className="header-menu">
                    <span>General</span>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="fa fa-tachometer-alt"></i>
                      <span>Dashboard</span>
                      <span className="badge badge-pill badge-warning">New</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Dashboard 1
                            <span className="badge badge-pill badge-success">Pro</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">Dashboard 2</a>
                        </li>
                        <li>
                          <a href="#">Dashboard 3</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="fa fa-shopping-cart"></i>
                      <span>E-commerce</span>
                      <span className="badge badge-pill badge-danger">3</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Products

                          </a>
                        </li>
                        <li>
                          <a href="#">Orders</a>
                        </li>
                        <li>
                          <a href="#">Credit cart</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="far fa-gem"></i>
                      <span>Components</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">General</a>
                        </li>
                        <li>
                          <a href="#">Panels</a>
                        </li>
                        <li>
                          <a href="#">Tables</a>
                        </li>
                        <li>
                          <a href="#">Icons</a>
                        </li>
                        <li>
                          <a href="#">Forms</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="fa fa-chart-line"></i>
                      <span>Charts</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Pie chart</a>
                        </li>
                        <li>
                          <a href="#">Line chart</a>
                        </li>
                        <li>
                          <a href="#">Bar chart</a>
                        </li>
                        <li>
                          <a href="#">Histogram</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="fa fa-globe"></i>
                      <span>Maps</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Google maps</a>
                        </li>
                        <li>
                          <a href="#">Open street map</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="header-menu">
                    <span>Extra</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-book"></i>
                      <span>Documentation</span>
                      <span className="badge badge-pill badge-primary">Beta</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-calendar"></i>
                      <span>Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-folder"></i>
                      <span>Examples</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-footer">
              <a href="#">
                <i className="fa fa-bell"></i>
                <span className="badge badge-pill badge-warning notification">3</span>
              </a>
              <a href="#">
                <i className="fa fa-envelope"></i>
                <span className="badge badge-pill badge-success notification">7</span>
              </a>
              <a href="#">
                <i className="fa fa-cog"></i>
                <span className="badge-sonar"></span>
              </a>
              <a href="#">
                <i className="fa fa-power-off"></i>
              </a>
            </div>
          </nav>
          <main className="page-content">
            <div className="container-fluid">
              <h2>Pro Sidebar</h2>
              <hr>
                <div className="row">
                  <div className="form-group col-md-12">
                    <p>This is a responsive sidebar template with dropdown menu based on bootstrap 4 framework.</p>
                    <p> You can find the complete code on <a href="https://github.com/azouaoui-med/pro-sidebar-template" rel="noopener noreferrer" target="_blank">
              Github</a>, it contains more themes and background image option</p>
                  </div>
                  <div className="form-group col-md-12">
                    <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=large"
                      frameBorder="0" scrolling="0" width="140px" height="30px"></iframe>
                    <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=large"
                      frameBorder="0" scrolling="0" width="140px" height="30px"></iframe>
                  </div>
                </div>
                <h5>More templates</h5>
              </hr>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="card rounded-0 p-0 shadow-sm">
                    <img src="https://user-images.githubusercontent.com/25878302/58369568-a49b2480-7efc-11e9-9ca9-2be44afacda1.png" className="card-img-top rounded-0" alt="Angular pro sidebar" />
                    <div className="card-body text-center">
                      <h6 className="card-title">Angular Pro Sidebar</h6>
                      <a href="https://github.com/azouaoui-med/angular-pro-sidebar" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-sm">Github</a>
                      <a href="https://azouaoui-med.github.io/angular-pro-sidebar/demo/" rel="noopener noreferrer" target="_blank" className="btn btn-success btn-sm">Preview</a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="card rounded-0 p-0 shadow-sm">
                    <img src="https://user-images.githubusercontent.com/25878302/58369258-33f20900-7ef8-11e9-8ff3-b277cb7ed7b4.PNG" className="card-img-top rounded-0" alt="Angular pro sidebar" />
                    <div className="card-body text-center">
                      <h6 className="card-title">Angular Dashboard</h6>
                      <a href="https://github.com/azouaoui-med/lightning-admin-angular" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-sm">Github</a>
                      <a href="https://azouaoui-med.github.io/lightning-admin-angular/demo/" rel="noopener noreferrer" target="_blank" className="btn btn-success btn-sm">Preview</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    )
  }
}

export default SideBar
