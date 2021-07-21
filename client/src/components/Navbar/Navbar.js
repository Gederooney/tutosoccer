import React from "react";
// import "../../css/navbar.scss";
import Logo from "../../assets/images/Logo";

const Navbar = () => {
	return (
		<>
			<nav
				class="navbar navbar-expand-lg  navbar-dark bg-dark"
				aria-label="Main navigation">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<Logo /> Tutosoccer
					</a>
					<button
						className="navbar-toggler p-0 border-0"
						type="button"
						id="navbarSideCollapse"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="navbar-collapse offcanvas-collapse"
						id="navbarsExampleDefault">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#soccer">
									Soccer
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#NBA">
									nba
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#soccer">
									Tenis
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div className="nav-scroller bg-body shadow-sm">
				<nav className="nav nav-underline" aria-label="Secondary navigation">
					<a className="nav-link active" aria-current="page" href="#">
						Dashboard
					</a>
					<a className="nav-link" href="/soccer">
						Scoresboard
					</a>
					<a className="nav-link" href="#">
						Scores
					</a>
					<a className="nav-link" href="#">
						Schedule
					</a>
					<a className="nav-link" href="#">
						Transfers
					</a>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
