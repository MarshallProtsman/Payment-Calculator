// BEST PRECTICE: FILE SHOULD BE NAME OF ACTUAL HTML ELEMENT
const OxfuFooterTemplate = document.createElement("template");

//prettier-ignore
const footerStyle =//css
	`
.oxfu-footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items:center;
	background: #022169;
	color: #ffffff;
	padding: 40px;
	border-top: solid 20px #F1A904;
	max-height: 4em;
	position: relative;
	${(deviceMode == "kiosk") ? `max-height: 30px` : ``}
	}



.footer-item {
	justify-content: space-evenly;
	width: 100vw;
	background-color: purple;

	color: #f2a900;
}

.copyright {
	font-size: .8em;

}

.footer-links {
	list-style-type: none;
	padding: 0;
	color: white;
}


.footer-image {
	width: 80px;
	transform: translate(0, -50px)
}

.flex-row {
	display: flex;
	width: 70%;
	justify-content: space-around;
}
`;
//prettier-ignore
const kioskFooterStyle = //css
`
.oxfu-footer {
	max-height: 30px;
}
`
//prettier-ignore
OxfuFooterTemplate.innerHTML = //html
`
		<style>
			${footerStyle}
			/* ${(deviceMode == "kiosk") ? kioskFooterStyle : ``} */
		</style>

		<div class="oxfu-footer">

		${(deviceMode !== "kiosk")
		? //html
		`
		<div class="flex-row">
			<ul class="footer-links">
				<li><a>Left Footer Link</a></li>
				<li><a>Left Footer Link</a></li>
				<li><a>Left Footer Link</a></li>
			</ul>
			<img
			class="footer-image"
			src="../src/assets/images/eu-logo-footer.svg"
			alt="Emory Logo footer"
		/>
			<ul class="footer-links">
				<li><a>Right Footer Link</a></li>
				<li><a>Right Footer Link</a></li>
				<li><a>Right Footer Link</a></li>
			</ul>`
			:
			``}
		</div>
			<p class="copyright">Copyright © Oxford College - Emory University</p>
		</div>
`;
class OxfuFooter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(OxfuFooterTemplate.content.cloneNode(true));
  }
}

window.customElements.define("oxfu-footer", OxfuFooter);
