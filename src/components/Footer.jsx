import React from "react";

function Footer() {
	return (
		<div>
			<footer
				className="text-center text-lg-start bg-white text-muted"
				style={{
					width: "100%",
					height: "205px",
					position: "absolute",
					bottom: "10px",
				}}>
				{" "}
				<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
					<div className="me-5 d-none d-lg-block">
						<span>Conecta con nosotros en nuestrar redes sociales :</span>
					</div>

					<div>
						<a
							className="btn text-white btn-floating m-1"
							style={{ background: "#3b5998" }}
							href="https://www.facebook.com/cesar.retizramirez"
							role="button">
							<i className="fab fa-facebook-f">Facebook</i>
						</a>
						<a
							className="btn text-white btn-floating m-1"
							style={{ background: "#55acee" }}
							href="#!"
							role="button">
							<i className="fab fa-twitter">Twitter</i>
						</a>

						<a
							className="btn text-white btn-floating m-1"
							style={{ background: "#dd4b39" }}
							href="#!"
							role="button">
							<i className="fab fa-google">Google</i>
						</a>

						<a
							className="btn text-white btn-floating m-1"
							style={{ background: "#ac2bac" }}
							href="#!"
							role="button">
							<i className="fab fa-instagram">Instagram</i>
						</a>

						<a
							className="btn text-white btn-floating m-1"
							style={{ background: "#0082ca" }}
							href="#!"
							role="button">
							<i className="fab fa-linkedin-in">Linkedin</i>
						</a>

						<a
							className="btn text-white btn-floating m-1"
							style={{ background: "#333333" }}
							href="https://github.com/CRetizRamirez"
							role="button">
							<i className="fab fa-github">Github</i>
						</a>
					</div>
				</section>
				<section className="">
					<div className="container text-center text-md-start mt-5">
						<div className="row mt-3">
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									<i className="fas fa-gem me-3 text-secondary"></i>DesoRet
								</h6>
								<p>
									Nos dedicamos a diseñar y desarrollar sitios y aplicaciones
									web.
								</p>
							</div>

							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									Tecnologías que usamos
								</h6>
								<p>
									<a
										href="https://developer.mozilla.org/es/docs/Glossary/HTML5"
										className="text-reset">
										HTML
									</a>
								</p>
								<p>
									<a
										href="https://developer.mozilla.org/es/docs/Web/CSS"
										className="text-reset">
										CSS
									</a>
								</p>
								<p>
									<a
										href="https://developer.mozilla.org/es/docs/Web/JavaScript"
										className="text-reset">
										JavaScript
									</a>
								</p>
								<p>
									<a href="https://legacy.reactjs.org/" className="text-reset">
										React
									</a>
								</p>
							</div>
							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Sitios web</h6>
								<p>
									<a href="https://pccbienesraices.com/" className="text-reset">
										PCC Bienes Raices
									</a>
								</p>
								<p>
									<a
										href="https://bodegas-aqua.web.app/"
										className="text-reset">
										Aquacolors
									</a>
								</p>
								<p>
									<a href="/" className="text-reset">
										Otro sitio web
									</a>
								</p>
								<p>
									<a href="/" className="text-reset">
										Otro sitio web
									</a>
								</p>
							</div>
							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
								<p>
									<i className="fas fa-home me-3 text-secondary"></i> MÉXICO,
									CDMX 04383, MX
								</p>
								<p>
									<i className="fas fa-envelope me-3 text-secondary"></i>
									cretiz.dsr@gmail.com
								</p>
								<p>
									<i className="fas fa-phone me-3 text-secondary"></i> 55
									41815747
								</p>
								<p>
									<i className="fas fa-print me-3 text-secondary"></i> 55
									41815747
								</p>
							</div>
						</div>
					</div>
				</section>
				<div
					className="text-center p-4"
					style={{ background: "rgba(0, 0, 0, 0.25)" }}>
					© 2023 Copyright, Powered by
					<a className="text-reset fw-bold" href="https://desoret.com/">
						_desoRet
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
