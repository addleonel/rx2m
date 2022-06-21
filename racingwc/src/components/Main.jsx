import React , { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "../assets/styles/Main.scss";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import buttonURL from "../utils.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// products
import ProductItem from "./ProductItem";
import { llantas, sistemaArrastre } from "../productsList.js";

const Main = () => {
	const contactURL = buttonURL;
	const [showp, setShowp] = useState(5);
	const sliderState = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: showp,
		slidesToScroll: 1
	}

	useEffect(()=>{	
		window.addEventListener('load', () => {
			if (window.innerWidth <= 450) {
				setShowp(1);
			}
		});
	}, []);

	useEffect(()=>{	
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 1160) {
				setShowp(4);
			}
		});
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 923) {
				setShowp(3);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 710) {
				setShowp(2);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 450) {
				setShowp(1);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth > 1160) {
				setShowp(5);
			}
		});
	}, []);

	const listLlantas =  llantas.slice(0, 7).map((link) =>{
        return( 
            <React.Fragment>
				<div>
					<ProductItem 
						key={link.id}
						name={link.name}
						image={link.image}
						price={link.price}
						in_=""
					/>
				</div>
            </React.Fragment>
        )
    });

    const listSistemaArrastre =  sistemaArrastre.slice(0, 7).map((link) =>{
        return( 
            <React.Fragment>
				<div>
					<ProductItem 
						key={link.id}
						name={link.name}
						image={link.image}
						price={link.price}
						in_=""
					/>
				</div>
            </React.Fragment>
        )
    });

    const listSistemaElectrico =  llantas.slice(0, 7).map((link) =>{
        return( 
            <React.Fragment>
                <div>
					<ProductItem 
						key={link.id}
						name={link.name}
						image={link.image}
						price={link.price}
						in_=""
					/>
				</div>
            </React.Fragment>
        )
    });

    const listSistemaMotor =  llantas.slice(0, 7).map((link) =>{
        return( 
            <React.Fragment>
                <div>
					<ProductItem 
						key={link.id}
						name={link.name}
						image={link.image}
						price={link.price}
						in_=""
					/>
				</div>
            </React.Fragment>
        )
    });


    const listLuces =  llantas.slice(0, 7).map((link) =>{
        return( 
            <React.Fragment>
                <div>
					<ProductItem 
						key={link.id}
						name={link.name}
						image={link.image}
						price={link.price}
						in_=""
					/>
				</div>
            </React.Fragment>
        )
    });

    const listAccesorioMotor =  llantas.slice(0, 7).map((link) =>{
        return( 
            <React.Fragment>
                <div>
					<ProductItem 
						key={link.id}
						name={link.name}
						image={link.image}
						price={link.price}
						in_=""
					/>
				</div>
            </React.Fragment>
        )
    });

    const listAccesorioPiloto =  llantas.slice(0, 7).map((link) =>{
        return( 
            <React.Fragment>
                <div>
					<ProductItem 
						key={link.id}
						name={link.name}
						image={link.image}
						price={link.price}
						in_=""
					/>
				</div>
            </React.Fragment>
        )
    });

    const listSistemaFrenos =  llantas.slice(0, 7).map((link) =>{
        return( 
            <React.Fragment>
                <div>
					<ProductItem 
						key={link.id}
						name={link.name}
						image={link.image}
						price={link.price}
						in_=""
					/>
				</div>
            </React.Fragment>
        )
    });
	return (
		<React.Fragment>
			<section className="section-m section-1">
				<Container>
					<div className="section-1-content">
						<div className="portal-phrase">
							<h1 className="portal-title">
							Compra Repuestos Multimarcas en General
							</h1>
							<p className="portal-subtitle">
								Servicio técnico especializado en motocicletas y motores menores
								
							</p>
							<button 
                                className="principal__message-button"
                                onClick={() => window.location.href = contactURL}
                            >
                                Contactanos ahora
                            </button>
						</div>
						<div className="portal-media">
							<img className="portal-image pimage-1" src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/271830144_3039380062980739_2031031125507542809_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tE9hmojjzjkAX-xvlEl&tn=3RXRreKQDGxF6YYQ&_nc_ht=scontent-lim1-1.xx&oh=00_AT96MpbLcXMMsjJ-8LLTq7Kj5D_yIfZh-0etspTbI6i74A&oe=62B657E2" alt="" />
							<img className="portal-image pimage-2"src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/272263958_3042277879357624_3408080719838212641_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x5P6I9m8fQwAX_TAq0e&tn=3RXRreKQDGxF6YYQ&_nc_ht=scontent-lim1-1.xx&oh=00_AT9KjUXMfQWKGAqLUM0HPxH7rzcMuGU3Sw7_og5xLdLx1A&oe=62B64B83" alt="" />
							
							<video id="mp4_src" className="portal-video" src="https://accezby-media-develop.nyc3.digitaloceanspaces.com/video/video1.mp4" autoPlay muted loop></video>
						</div>
					</div>
				</Container>
			</section>
			<section className="section-m section-2">
				<Container fluid="xxl">
					<h2 className="category">Llantas</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							{listLlantas}
						</Slider>
						<HashLink style={{textDecoration: "none"}} to="/products/#llantas">Ver más</HashLink>
					</div>
					<h2 className="category">Sistema de arrastre</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							{listSistemaArrastre}
						</Slider>
						<HashLink style={{textDecoration: "none"}} to="/products/#sistema-arrastre">Ver más</HashLink>
					</div>
					<h2 className="category">Sistema Electrico</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							{listSistemaElectrico}
						</Slider>
						<HashLink style={{textDecoration: "none"}}to="/products/#sistema-electrico">Ver más</HashLink>
					</div>
					<h2 className="category">Sistema de Motor</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							{listSistemaMotor}
						</Slider>
						<HashLink style={{textDecoration: "none"}}to="/products/#sistema-electrico">Ver más</HashLink>
					</div>
					<h2 className="category">Luces</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							{listLuces}
						</Slider>
						<HashLink style={{textDecoration: "none"}}to="/products/#luces">Ver más</HashLink>
					</div>
					<h2 className="category">Accesorios para Motor</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							{listAccesorioMotor}
						</Slider>
						<HashLink style={{textDecoration: "none"}}to="/products/#accesorios-motor">Ver más</HashLink>
					</div>
					<h2 className="category">Accesorios para Piloto</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							{listAccesorioPiloto}
						</Slider>
						<HashLink style={{textDecoration: "none"}}to="/products/#accesorios-piloto">Ver más</HashLink>
					</div>
					<h2 className="category">Sistemas de frenos</h2>
					<div className="c-container">
						<Slider {...sliderState}>
							{listSistemaFrenos}
						</Slider>
						<HashLink style={{textDecoration: "none"}}to="/products/#sistemas-frenos">Ver más</HashLink>
					</div>
				</Container>
			</section>
		</React.Fragment>
  );
}

export default Main;