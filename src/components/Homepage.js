import React, { useState } from 'react';
import success from './../images/two-person-handshake-with-each-other-smiling.png';
import aims from './../images/Aims.jpg';
import logo from './../images/logo.png';

function Homepage() {
	const [modalDisplay, setModalDisplay] = useState("hidden");

	function onBurgerMenuClicked(){
		document.querySelector("#modal").style.animationName = "slideIn"
		setModalDisplay("");
	}

	function onModalOverlayClicked(){
		document.querySelector("#modal").style.animationName = "slideOut"
		setTimeout(() => {
			setModalDisplay("hidden");
		}, "180");
	}

	function onMenuItemClicked(tag){
	    if (tag == '#home') {
		    window.scrollTo({
		        top: document.querySelector(tag).offsetTop - 200,
		        left: 0,
		        behavior: 'smooth'
	      	})
	    } else if (tag == '#aboutus') {
	    	window.scrollTo({
		        top: document.querySelector(tag).offsetTop- 100,
		        left: 0,
		        behavior: 'smooth'
	    	})
	    } else if (tag == '#ourservices') {
		    window.scrollTo({
		        top: document.querySelector(tag).offsetTop - 100,
		        left: 0,
		        behavior: 'smooth'
		    })
	    } else if (tag == '#casestudies') {
		    window.scrollTo({
		        top: document.querySelector(tag).offsetTop - 100,
		        left: 0,
		        behavior: 'smooth'
		    })
	    }
	}

	return(
		<>
			<div className="min-[1100px]:px-[40px] px-[20px] py-[10px] w-[1200px] max-[1100px]:w-[80%] max-[800px]:w-[90%] max-[600px]:w-[100%] mx-[auto]">
				{/*Modal*/}
				<div 
					id="modalOverlay" 
					className={"w-[100%] bg-[#7f808080] fixed top-[0px] left-[0px] h-[100%] " + modalDisplay} 
					onClick={onModalOverlayClicked}>

					<div 
						style={{
							animationName: "slideIn",
							animationDuration: "0.2s"
						}}
						id="modal" 
						className={"w-[260px] bg-[#FFFFFF] fixed top-[0px] left-[0px] h-[100%] " + modalDisplay}>

						<div id="modalContent" className="p-[20px]">
							<div className="flex items-center mb-[40px]">
								<svg width="50" height="60" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.000305176 10.0115C0.000305176 4.7032 4.30351 0.399994 9.61179 0.399994H23.0679V19.2385C23.0679 24.5468 18.7647 28.85 13.4564 28.85H0.000305176V10.0115Z" fill="#1B1642"/>
								</svg>
								<span className="text-[#FFFFFF] ml-[-38px] font-bold text-[35px]">A</span>
								<span className="text-[30px] font-bold ml-[15px]">ims.</span>
							</div>
							<div className="text-[16px] font-medium">
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
								<div className="mb-[15px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div>
								<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
									<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
										Contact Us
									</button>
								</a>
							</div>
						</div>

					</div>

				</div>

				{/*Header*/}
				<div id="header" className="sticky top-[0px] bg-[#ffffff] py-[10px] sm:flex items-center justify-between">
					<div className="w-[200px] max-sm:mx-auto max-sm:mb-[20px]">
						<img src={logo} />
					</div>
					{/* <div className="border-[#2F6AD9] border-[2px] border-solid p-[5px] rounded-[5px] min-[1000px]:hidden cursor-pointer" onClick={onBurgerMenuClicked}>
						<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" stroke-width="0"/>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
							<g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> </g>
						</svg>
					</div> */}

					<div className="flex items-center text-[16px] font-medium">
						{/* <div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div> */}
						<a className="max-sm:mx-auto" href="https://calendly.com/angelinvestormarketingservices" target="_blank">
							<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
								Contact Us
							</button>
						</a>
					</div>
				</div>

				{/*fold 1*/}
				<div className="flex items-center">
					<div id="home" className="my-[100px] min-[1100px]:w-[50%]">
						<div className="max-[1000px]:text-[38px] text-[48px] text-[#1B1642] font-bold">Optimize Your Manufacturing Process with <span className="text-[#2F6AD9]">Chennai Automation Systems.</span></div>
						<div className="text-[16px] leading-[32px] text-[#677788] my-[30px]">
							At Chennai Automation Systems, we empower manufacturers to enhance efficiency and productivity with our advanced automation solutions. From CNC technology to full-scale production automation, we are committed to supporting every phase of your manufacturing journey.
						</div>
						<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
							<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff] max-[700px]:mx-auto block">
								Contact Us
							</button>
						</a>
					</div>
					<div className="w-[50%] min-[1100px]:block hidden">
						<img src={aims} />
					</div>
				</div>

				{/*fold 2*/}
				<div id="aboutus" className="text-center">
					<div className="text-[25px] font-bold">About Chennai Automation Systems</div>
					<div className="text-[#677788] text-[16px] leading-[32px] my-[30px] max-w-[1000px] mx-auto">Chennai Automation Systems excels in delivering innovative solutions to enhance manufacturing efficiency. With decades of experience, we are passionate about transforming industrial processes through advanced technology and automation.</div>
					<div className="grid min-[1101px]:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-[20px] justify-center">
						<div className="col-span-2 rounded-[10px] p-[20px] border-solid border-[#eaeaea] border-[1px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="flex justify-center">
								<svg xmlns="http://www.w3.org/2000/svg"  width="78" height="51">
									<image id="img_0" x="2" y="1" width="50" height="50" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzJGNkFEOSIgY2xhc3M9ImJpIGJpLWJ1aWxkaW5nIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxwYXRoIGQ9Ik00IDIuNWEuNS41IDAgMCAxIC41LS41aDFhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41aC0xYS41LjUgMCAwIDEtLjUtLjV6bTMgMGEuNS41IDAgMCAxIC41LS41aDFhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41aC0xYS41LjUgMCAwIDEtLjUtLjV6bTMuNS0uNWEuNS41IDAgMCAwLS41LjV2MWEuNS41IDAgMCAwIC41LjVoMWEuNS41IDAgMCAwIC41LS41di0xYS41LjUgMCAwIDAtLjUtLjV6TTQgNS41YS41LjUgMCAwIDEgLjUtLjVoMWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTFhLjUuNSAwIDAgMS0uNS0uNXpNNy41IDVhLjUuNSAwIDAgMC0uNS41djFhLjUuNSAwIDAgMCAuNS41aDFhLjUuNSAwIDAgMCAuNS0uNXYtMWEuNS41IDAgMCAwLS41LS41em0yLjUuNWEuNS41IDAgMCAxIC41LS41aDFhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41aC0xYS41LjUgMCAwIDEtLjUtLjV6TTQuNSA4YS41LjUgMCAwIDAtLjUuNXYxYS41LjUgMCAwIDAgLjUuNWgxYS41LjUgMCAwIDAgLjUtLjV2LTFhLjUuNSAwIDAgMC0uNS0uNXptMi41LjVhLjUuNSAwIDAgMSAuNS0uNWgxYS41LjUgMCAwIDEgLjUuNXYxYS41LjUgMCAwIDEtLjUuNWgtMWEuNS41IDAgMCAxLS41LS41em0zLjUtLjVhLjUuNSAwIDAgMC0uNS41djFhLjUuNSAwIDAgMCAuNS41aDFhLjUuNSAwIDAgMCAuNS0uNXYtMWEuNS41IDAgMCAwLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0yIDFhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxdjE0YTEgMSAwIDAgMS0xIDFIM2ExIDEgMCAwIDEtMS0xem0xMSAwSDN2MTRoM3YtMi41YS41LjUgMCAwIDEgLjUtLjVoM2EuNS41IDAgMCAxIC41LjVWMTVoM3oiLz4KPC9zdmc+" opacity="1"  />
									<image id="img_1" x="28" y="0" width="50" height="50" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzJGNkFEOSIgY2xhc3M9ImJpIGJpLWdlYXItZmlsbCIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS40MDUgMS4wNWMtLjQxMy0xLjQtMi4zOTctMS40LTIuODEgMGwtLjEuMzRhMS40NjQgMS40NjQgMCAwIDEtMi4xMDUuODcybC0uMzEtLjE3Yy0xLjI4My0uNjk4LTIuNjg2LjcwNS0xLjk4NyAxLjk4N2wuMTY5LjMxMWMuNDQ2LjgyLjAyMyAxLjg0MS0uODcyIDIuMTA1bC0uMzQuMWMtMS40LjQxMy0xLjQgMi4zOTcgMCAyLjgxbC4zNC4xYTEuNDY0IDEuNDY0IDAgMCAxIC44NzIgMi4xMDVsLS4xNy4zMWMtLjY5OCAxLjI4My43MDUgMi42ODYgMS45ODcgMS45ODdsLjMxMS0uMTY5YTEuNDY0IDEuNDY0IDAgMCAxIDIuMTA1Ljg3MmwuMS4zNGMuNDEzIDEuNCAyLjM5NyAxLjQgMi44MSAwbC4xLS4zNGExLjQ2NCAxLjQ2NCAwIDAgMSAyLjEwNS0uODcybC4zMS4xN2MxLjI4My42OTggMi42ODYtLjcwNSAxLjk4Ny0xLjk4N2wtLjE2OS0uMzExYTEuNDY0IDEuNDY0IDAgMCAxIC44NzItMi4xMDVsLjM0LS4xYzEuNC0uNDEzIDEuNC0yLjM5NyAwLTIuODFsLS4zNC0uMWExLjQ2NCAxLjQ2NCAwIDAgMS0uODcyLTIuMTA1bC4xNy0uMzFjLjY5OC0xLjI4My0uNzA1LTIuNjg2LTEuOTg3LTEuOTg3bC0uMzExLjE2OWExLjQ2NCAxLjQ2NCAwIDAgMS0yLjEwNS0uODcyek04IDEwLjkzYTIuOTI5IDIuOTI5IDAgMSAxIDAtNS44NiAyLjkyOSAyLjkyOSAwIDAgMSAwIDUuODU4eiIvPgo8L3N2Zz4=" opacity="1"  />
								</svg>
							</div>
							<div className="text-[18px] font-semibold leading-[28px] text-[#1E2022] mt-[20px]">Building Manufacturing Excellence</div>
							<div className="text-[16px] text-[#677788] mt-[20px]">We specialize in providing cutting-edge solutions to elevate manufacturing capabilities. Our expertise spans across various automation and engineering services, ensuring that your operations are optimized for maximum productivity and efficiency.</div>
						</div>
						<div className="col-span-2 rounded-[10px] p-[20px] border-solid border-[#eaeaea] border-[1px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="flex justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-bar-chart-steps" viewBox="0 0 16 16">
									<path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
								</svg>
							</div>
							<div className="text-[18px] font-semibold leading-[28px] text-[#1E2022] mt-[20px]">Our Approach</div>
							<div className="text-[16px] text-[#677788] mt-[20px]">From CNC machine retrofits to complete industrial automation, Chennai Automation Systems is committed to ensuring that your manufacturing processes are modernized and efficient. Our tailored solutions help you achieve operational excellence and significant cost savings.</div>
						</div>
						<div className="col-span-2 max-[1100px]:col-start-2 max-[767px]:col-start-1 rounded-[10px] p-[20px] border-solid border-[#eaeaea] border-[1px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="flex justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#377DFF" class="bi bi-people-fill" viewBox="0 0 16 16">
									<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
								</svg>
							</div>
							<div className="text-[18px] font-semibold leading-[28px] text-[#1E2022] mt-[20px]">Diverse Expertise</div>
							<div className="text-[16px] text-[#677788] mt-[20px]">Our expertise covers a wide range of sectors, including heavy engineering, IoT, and CNC machinery. This broad knowledge base allows us to deliver unique insights and customized solutions for every manufacturing challenge, no matter the industry.</div>
						</div>
					</div>
				</div>

				{/*fold 3*/}
				<div id="ourservices" className="text-center">
					<div className="text-[32px] font-bold  my-[50px]">Our Services</div>
					<div className="grid min-[1100px]:grid-cols-3 min-[700px]:grid-cols-2 grid-cols-1 gap-[20px]">
						<div className="p-[20px] text-center rounded-[10px]">
							<svg className="mx-auto" version="1.1" id="Layer_1" viewBox="0 0 512 512" width="50px" height="50px" fill="#000000">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <rect x="10.956" y="313.521" fill="#eff0f6" width="415.772" height="142.425"/> <rect x="10.956" y="264.22" fill="#eff0f6" width="87.646" height="49.301"/> <g> <rect x="147.903" y="94.405" fill="#eff0f6" width="43.823" height="43.823"/> <rect x="147.903" y="182.052" fill="#eff0f6" width="43.823" height="43.823"/> </g> <rect x="333.604" y="116.317" fill="#eff0f6" width="93.124" height="87.646"/> <path fill="#eff0f6" d="M282.869,176.286l50.735,27.673v-87.646l-50.735,27.673c-5.87,3.201-9.522,9.354-9.522,16.04v0.219 C273.347,166.932,277,173.084,282.869,176.286z"/> <rect x="377.427" y="203.963" fill="#387cff" width="49.301" height="109.558"/> <rect x="199.034" y="264.22" fill="#eff0f6" width="104.08" height="49.301"/> <rect x="10.956" y="56.06" fill="#387cff" width="87.646" height="208.16"/> <polygon fill="#eff0f6" points="147.903,225.872 98.602,236.827 98.602,83.446 147.903,94.402 "/> <g> <path fill="#387cff" d="M501.044,101.888h-32.137c-6.05,0-10.956,4.906-10.956,10.956v36.337h-20.268v-32.867 c0-6.05-4.906-10.956-10.956-10.956h-93.124c-1.901,0-3.689,0.485-5.247,1.338l0,0l-50.734,27.674 c-6.075,3.313-10.648,8.6-13.132,14.812h-41.723c-6.051,0-10.956,4.906-10.956,10.956s4.905,10.956,10.956,10.956h41.723 c2.484,6.212,7.057,11.498,13.132,14.812h-0.001l50.735,27.674l0,0c1.558,0.851,3.346,1.338,5.247,1.338h32.867v87.646h-52.405 v-38.345c0-6.05-4.906-10.956-10.956-10.956H199.03c-6.051,0-10.956,4.906-10.956,10.956v38.345h-78.517v-56.947l39.547-8.788 h42.621c6.051,0,10.956-4.906,10.956-10.956v-43.823c0-6.05-4.905-10.956-10.956-10.956h-32.867v-21.912h32.867 c6.051,0,10.956-4.906,10.956-10.956V94.404c0-6.05-4.905-10.956-10.956-10.956h-42.621l-39.547-8.791V56.057 c0-6.05-4.905-10.956-10.956-10.956H10.956C4.905,45.101,0,50.007,0,56.057v399.886c0,6.05,4.905,10.956,10.956,10.956h415.772 c6.05,0,10.956-4.906,10.956-10.956v-284.85h20.268v36.337c0,6.05,4.906,10.956,10.956,10.956c6.05,0,10.956-4.906,10.956-10.956 V123.8h21.181c6.05,0,10.956-4.906,10.956-10.956C512,106.794,507.094,101.888,501.044,101.888z M288.115,166.667 C288.114,166.667,288.114,166.667,288.115,166.667c-2.352-1.283-3.813-3.742-3.813-6.421v-0.218c0-2.679,1.46-5.138,3.813-6.421 l34.533-18.836v50.735L288.115,166.667z M344.559,127.27h71.213v65.735h-71.213V127.27z M388.383,214.916h27.389v87.646h-27.389 V214.916z M209.986,275.173h82.168v27.389h-82.168L209.986,275.173L209.986,275.173z M21.912,275.173h65.735v27.389H21.912V275.173 z M180.77,193.004v21.912h-21.912v-21.912H180.77z M180.77,127.27h-21.912v-21.912h21.912V127.27z M136.947,103.19v113.893 l-27.389,6.087V97.103L136.947,103.19z M21.912,67.013h65.735v186.248H21.912V67.013z M21.912,444.987v-65.735h54.414 c6.051,0,10.956-4.906,10.956-10.956c0-6.05-4.905-10.956-10.956-10.956H21.912v-32.867h393.861v65.735h-55.51 c-6.05,0-10.956,4.906-10.956,10.956c0,6.05,4.906,10.956,10.956,10.956h55.51v32.867H21.912z"/> <path fill="#387cff" d="M121.061,357.341h-1.096c-6.051,0-10.956,4.906-10.956,10.956c0,6.05,4.905,10.956,10.956,10.956 h1.096c6.051,0,10.956-4.906,10.956-10.956C132.017,362.247,127.112,357.341,121.061,357.341z"/> <path fill="#387cff" d="M321.005,390.208h-1.096c-6.05,0-10.956,4.906-10.956,10.956c0,6.05,4.906,10.956,10.956,10.956 h1.096c6.05,0,10.956-4.906,10.956-10.956C331.96,395.114,327.054,390.208,321.005,390.208z"/> <path fill="#387cff" d="M161.598,357.341c-2.881,0-5.708,1.171-7.746,3.21c-2.038,2.038-3.21,4.864-3.21,7.746 s1.172,5.708,3.21,7.745c2.038,2.038,4.864,3.211,7.746,3.211s5.708-1.172,7.746-3.211c2.038-2.037,3.21-4.863,3.21-7.745 s-1.172-5.708-3.21-7.746C167.306,358.513,164.479,357.341,161.598,357.341z"/> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">CNC Retrofits & Reconditioning</div>
							<div className="text-[#677788]">Upgrading and modernizing CNC machinery to boost performance and extend operational life, ensuring reliability and maximum productivity.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" version="1.1" id="Capa_1" viewBox="0 0 460 460" width="50px" height="50px" fill="#387cff">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <g id="XMLID_1844_"> <path id="XMLID_1845_" fill="#387cff" d="M115,355c-11.046,0-20-8.954-20-20c0-11.046,8.954-20,20-20v-90H65v205h50V355z"/> <path id="XMLID_1846_" fill="#387cff" d="M115,315c5.064,0,9.675,1.897,13.198,5H165v-95l95.263-55v-30 c-16.573,0-30.003-13.43-30.003-30c0-11.105,6.036-20.792,15.003-25.979V50H65v175h50V315z"/> <path id="XMLID_1847_" fill="#387cff" d="M165,350h-36.802c-3.524,3.103-8.134,5-13.198,5v75h50V350z"/> <rect id="XMLID_1848_" x="275.263" fill="#387cff" width="119.737" height="50"/> <rect id="XMLID_1849_" x="65" fill="#387cff" width="180.263" height="50"/> <rect id="XMLID_1850_" x="290.263" y="170" fill="#387cff" width="74.737" height="30"/> <rect id="XMLID_1851_" x="305.263" y="200" fill="#387cff" width="44.737" height="30"/> <rect id="XMLID_1852_" x="312.631" y="230" fill="#387cff" width="30" height="60"/> <path id="XMLID_1853_" fill="#387cff" d="M275.263,84.023c8.964,5.188,15,14.874,15,25.977c0,16.569-13.432,30-30,30v30H395 V50H275.263V84.023z"/> <path id="XMLID_1854_" fill="#387cff" d="M245.263,84.021C249.676,81.468,254.795,80,260.26,80 c5.469,0,10.589,1.469,15.003,4.023V0h-30V84.021z"/> <path id="XMLID_1855_" fill="#FFFFFF" d="M290.263,110c0-11.102-6.036-20.789-15-25.977c-4.414-2.554-9.534-4.023-15-4.023 c16.568,0.001,29.997,13.43,29.997,30s-13.429,29.999-29.999,30C276.831,140,290.263,126.569,290.263,110z"/> <path id="XMLID_1856_" fill="#FFFFFF" d="M260.26,80c-5.465,0-10.584,1.468-14.997,4.021 C236.296,89.208,230.26,98.895,230.26,110c0,16.57,13.43,30,30,30V80z"/> <path id="XMLID_1857_" fill="#387cff" d="M290.26,110c0-16.57-13.429-29.999-29.999-30c-0.001,0-0.001,60-0.001,60 C276.831,139.999,290.26,126.57,290.26,110z"/> <path id="XMLID_1858_" fill="#387cff" d="M135,335c0,5.982-2.64,11.335-6.802,15H395v-30H128.198 C132.36,323.665,135,329.018,135,335z"/> <rect id="XMLID_1859_" x="35" y="430" fill="#387cff" width="390" height="30"/> <rect id="XMLID_1860_" x="257.5" y="400" fill="#387cff" width="45" height="30"/> <path id="XMLID_1861_" fill="#FFFFFF" d="M135,335c0-5.982-2.64-11.335-6.802-15c-3.524-3.103-8.134-5-13.198-5 c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20c5.064,0,9.675-1.897,13.198-5C132.36,346.335,135,340.982,135,335z"/> <rect id="XMLID_1862_" x="165" y="350" fill="#387cff" width="115" height="50"/> <rect id="XMLID_1863_" x="280" y="350" fill="#387cff" width="115" height="50"/> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Heavy Engineering Machining</div>
							<div className="text-[#677788]">Producing high-precision components for critical industries, using advanced facilities to handle large-scale and complex projects with exceptional quality.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" width="50px" height="50px" viewBox="0 0 16 16" version="1.1" fill="#387cff">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <path fill="#387cff" d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"/> <path fill="#387cff" d="M11.7 16v0c-0.8 0-1.6-0.2-2.3-0.7l-6.2-3.3c-0.5-0.4-0.9-0.6-1.3-1-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.3 1.9-4.5c1.2-1.2 2.8-1.9 4.5-1.9s3.3 0.7 4.6 1.9c0.4 0.4 0.6 0.7 1 1.2l3.5 6.4c1 1.7 0.7 3.8-0.7 5.2-0.9 0.9-1.9 1.3-3.1 1.3zM6.4 1c-1.4 0-2.8 0.6-3.8 1.6s-1.6 2.4-1.6 3.8c0 1.5 0.6 2.8 1.6 3.8 0.3 0.3 0.6 0.5 1.1 0.8l6.3 3.4c0.6 0.4 1.2 0.5 1.8 0.5v0c0.9 0 1.7-0.3 2.3-1 1.1-1.1 1.3-2.7 0.5-4l-3.5-6.4c-0.3-0.4-0.5-0.7-0.8-1-1.1-0.9-2.4-1.5-3.9-1.5z"/> <path fill="#387cff" d="M11 7v-1l-1.4-0.5c-0.1-0.2-0.1-0.3-0.2-0.5l0.6-1.3-0.7-0.7-1.3 0.6c-0.2-0.1-0.3-0.1-0.5-0.2l-0.5-1.4h-1l-0.5 1.4c-0.2 0.1-0.3 0.1-0.5 0.2l-1.3-0.6-0.7 0.7 0.6 1.3c-0.1 0.2-0.1 0.3-0.2 0.5l-1.4 0.5v1l1.4 0.5c0.1 0.2 0.1 0.3 0.2 0.5l-0.6 1.3 0.7 0.7 1.3-0.6c0.2 0.1 0.3 0.2 0.5 0.2l0.5 1.4h1l0.5-1.4c0.2-0.1 0.3-0.1 0.5-0.2l1.3 0.6 0.7-0.7-0.6-1.3c0.1-0.2 0.2-0.3 0.2-0.5l1.4-0.5zM6.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"/> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Industrial Automation</div>
							<div className="text-[#677788]">Implementing advanced automation solutions to optimize production processes, improve efficiency, and reduce operational costs, seamlessly integrating with existing systems.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" width="50px" height="50px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-iot" fill="none">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_525_178)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.38947 2.01068C8.72799 0.764157 10.5254 0 12.5 0C14.9937 0 17.2023 1.21764 18.5648 3.08692C21.6485 3.59544 24 6.2726 24 9.5C24 13.0899 21.0898 16 17.5 16H15V19C15 19.5523 15.4477 20 16 20H18.1707C18.5825 18.8348 19.6938 18 21 18C22.6569 18 24 19.3431 24 21C24 22.6569 22.6569 24 21 24C19.6938 24 18.5825 23.1652 18.1707 22H16C14.3431 22 13 20.6569 13 19V16H11V19C11 20.6569 9.65685 22 8 22H5.82929C5.41746 23.1652 4.30622 24 3 24C1.34315 24 0 22.6569 0 21C0 19.3431 1.34315 18 3 18C4.30622 18 5.41746 18.8348 5.82929 20H8C8.55229 20 9 19.5523 9 19V16H7C3.13401 16 0 12.866 0 9C0 5.13401 3.13401 2 7 2C7.1306 2 7.26046 2.00359 7.38947 2.01068ZM5.98958 9.38299C5.59905 8.99247 5.59905 8.3593 5.98958 7.96878C6.77888 7.17948 7.71591 6.55338 8.74718 6.12621C9.77844 5.69905 10.8837 5.47919 12 5.47919C13.1162 5.47919 14.2215 5.69905 15.2528 6.12621C16.2841 6.55337 17.2211 7.17948 18.0104 7.96878C18.4009 8.3593 18.4009 8.99247 18.0104 9.38299C17.6199 9.77352 16.9867 9.77352 16.5962 9.38299C15.9926 8.77941 15.276 8.30062 14.4874 7.97397C13.6988 7.64731 12.8536 7.47919 12 7.47919C11.1464 7.47919 10.3012 7.64731 9.51254 7.97397C8.72393 8.30062 8.00737 8.77941 7.40379 9.38299C7.01327 9.77352 6.3801 9.77352 5.98958 9.38299ZM8.5 11.9142C8.10948 11.5237 8.10948 10.8905 8.5 10.5C8.95963 10.0404 9.50528 9.67577 10.1058 9.42702C10.7063 9.17828 11.35 9.05025 12 9.05025C12.65 9.05025 13.2936 9.17827 13.8942 9.42702C14.4947 9.67577 15.0403 10.0404 15.5 10.5C15.8905 10.8905 15.8905 11.5237 15.5 11.9142C15.1094 12.3047 14.4763 12.3047 14.0858 11.9142C13.8118 11.6403 13.4867 11.423 13.1288 11.2748C12.7709 11.1265 12.3874 11.0502 12 11.0502C11.6126 11.0502 11.2291 11.1265 10.8712 11.2748C10.5133 11.423 10.1881 11.6403 9.91422 11.9142C9.52369 12.3047 8.89053 12.3047 8.5 11.9142Z" fill="#387cff"/> </g> <defs> <clipPath id="clip0_525_178"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">IoT Solutions</div>
							<div className="text-[#677788]">Bringing manufacturing into the digital age with IoT services, enabling real-time monitoring, data analytics, and improved decision-making for operational efficiency.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" version="1.1" id="designs" width="60px" height="60px" viewBox="0 0 32 32" fill="#387cff">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <path class="scienceandfiction_twee" d="M7,6.5v11H6.001v-11h1H7z M8.001,6.5v11H9v-11H8.001z M10.001,6.5v11H11v-11H10.001z M12.001,6.5v11H13v-11H12.001z M14,6.5v11h1v-11H14z M17,6.5h-1v11h1V6.5L17,6.5z M19,6.5h-1v11h1V6.5L19,6.5z"/> <path class="scienceandfiction_een" d="M9.5,21C8.672,21,8,21.672,8,22.5S8.672,24,9.5,24s1.5-0.672,1.5-1.5S10.328,21,9.5,21z M9.5,23C9.224,23,9,22.776,9,22.5S9.224,22,9.5,22s0.5,0.224,0.5,0.5S9.776,23,9.5,23z M21.5,21c-0.828,0-1.5,0.672-1.5,1.5 s0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5S22.328,21,21.5,21z M21.5,23c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5 S21.776,23,21.5,23z M25,10h-4V6H4v11H3v5h3.05C6.027,22.165,6,22.329,6,22.5C6,24.433,7.567,26,9.5,26s3.5-1.567,3.5-3.5 c0-0.171-0.027-0.335-0.05-0.5h5.101C18.027,22.165,18,22.329,18,22.5c0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5 c0-0.171-0.027-0.335-0.05-0.5H28v-6L25,10z M5,7h15v10H5V7z M9.5,25C8.122,25,7,23.879,7,22.5S8.122,20,9.5,20s2.5,1.121,2.5,2.5 S10.878,25,9.5,25z M21.5,25c-1.378,0-2.5-1.121-2.5-2.5s1.122-2.5,2.5-2.5s2.5,1.121,2.5,2.5S22.878,25,21.5,25z M27,21h-2.35 c-0.563-1.179-1.756-2-3.15-2s-2.587,0.821-3.15,2H12.65c-0.563-1.179-1.756-2-3.15-2s-2.587,0.821-3.15,2H4v-3h17v-7h1v6h3v2h2V21z M27,18h-1v-1h1V18z M23,16v-5h1.434L27,16H23z"/> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium mb-[30px] mt-[20px]">Machinery Import & Export</div>
							<div className="text-[#677788]">Facilitating the smooth import and export of high-quality machinery, leveraging global networks to provide efficient solutions for acquiring or selling equipment.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" width="50px" height="50px" viewBox="0 0 30 30" version="1.1" fill="#000000">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set" transform="translate(-569.000000, -308.000000)" fill="#027ffe"> <path d="M594.884,322.281 C592.585,324.575 589.129,324.958 586.406,323.494 L574.556,335.322 C573.754,336.122 572.454,336.122 571.651,335.322 C570.85,334.521 570.85,333.225 571.651,332.424 L583.503,320.596 C582.038,317.88 582.422,314.433 584.72,312.139 C586.098,310.764 587.896,310.11 589.701,310.088 C587.81,312.096 587.835,315.248 589.802,317.211 C591.768,319.173 594.926,319.198 596.938,317.311 C596.916,319.112 596.262,320.906 594.884,322.281 L594.884,322.281 Z M598.159,313.37 C597.653,313.938 596.813,314.661 595.609,315.762 C594.334,317.034 592.529,317.034 591.254,315.762 C589.978,314.488 589.978,312.688 591.254,311.415 C592.429,310.242 593.692,308.853 593.672,308.847 C590.257,307.274 586.082,307.882 583.268,310.69 C580.703,313.249 579.972,316.935 581.051,320.146 L570.2,330.976 C568.596,332.576 568.596,335.171 570.2,336.771 C571.804,338.371 574.404,338.371 576.008,336.771 L586.858,325.942 C590.078,327.021 593.771,326.289 596.336,323.73 C599.146,320.925 599.73,316.775 598.159,313.37 L598.159,313.37 Z" id="tools"> </path> </g> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">CNC Machinery Spares</div>
							<div className="text-[#677788]">Providing a comprehensive range of spares for CNC systems, ensuring access to critical components for maintenance and repair, reducing downtime and maintaining efficiency.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" height="60px" width="60px" version="1.1" id="_x32_" viewBox="0 0 512 512" fill="#377DFF" stroke="#377DFF">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <g> <path class="st0" d="M255.366,141.046c-7.4,3.583-14.732,8.548-21.533,15.357c-34.091,34.098-65.081,65.088-65.081,65.088 l0.013,0.02c-0.185,0.186-0.371,0.338-0.557,0.53c-8.824,8.831-9.174,22.909-1.025,32.146c0.323,0.371,0.668,0.736,1.025,1.086 c9.161,9.174,24.036,9.196,33.232,0l35.797-35.797c6.176,2.263,12.248,3.583,18.074,4.243c7.937,0.88,15.392,0.55,22.022-0.385 c16.162-2.29,14.47-1.623,23.844-4.704c9.353-3.068,19.862-9.354,19.862-9.354l6.362,6.355 c0.701,0.681,16.919,16.925,25.192,25.185c1.465,1.471,2.709,2.682,3.542,3.549c0.956,0.997,2.022,1.719,2.682,2.682l41.278,41.279 c11.898-13.35,25.488-33.232,23.81-56.058L320.763,129.14C320.763,129.14,285.062,126.589,255.366,141.046z"/> <path class="st0" d="M261.115,394.362c-9.134-9.147-23.961-9.147-33.101,0l-6.794,6.794c9.119-9.132,9.112-23.926-0.021-33.066 c-9.14-9.126-23.947-9.126-33.087,0.007c9.14-9.133,9.14-23.94,0-33.087c-9.133-9.148-23.947-9.133-33.087,0 c9.14-9.133,9.14-23.947,0-33.095c-9.134-9.132-23.947-9.132-33.088,0.014l-20.46,20.453c-9.14,9.147-9.14,23.947,0,33.094 c9.133,9.134,23.941,9.134,33.08,0c-9.14,9.134-9.14,23.947,0,33.087c9.147,9.133,23.954,9.133,33.094,0 c-9.14,9.133-9.14,23.941,0,33.088c9.14,9.133,23.947,9.133,33.088,0l6.802-6.809c-9.119,9.147-9.113,23.94,0.02,33.081 c9.14,9.132,23.947,9.132,33.088,0l20.467-20.468C270.248,418.302,270.248,403.495,261.115,394.362z"/> <path class="st0" d="M507.987,178.28L387.543,57.822c-5.351-5.337-14.002-5.337-19.339,0l-38.631,38.63 c-5.337,5.337-5.337,13.989,0,19.333l120.458,120.451c5.33,5.35,13.996,5.35,19.326,0l38.63-38.638 C513.338,192.276,513.338,183.624,507.987,178.28z M473.655,204.992c-5.75,5.736-15.048,5.736-20.777,0 c-5.735-5.743-5.735-15.041,0-20.777c5.729-5.736,15.027-5.736,20.777,0C479.391,189.951,479.384,199.249,473.655,204.992z"/> <path class="st0" d="M182.417,99.864l-38.624-38.63c-5.336-5.337-13.995-5.337-19.332,0L4.003,181.691 c-5.337,5.323-5.337,13.989,0,19.319l38.631,38.644c5.33,5.331,14.002,5.331,19.325,0l120.458-120.458 C187.761,113.859,187.761,105.207,182.417,99.864z M59.118,208.403c-5.736,5.729-15.04,5.729-20.777,0 c-5.735-5.742-5.735-15.041,0-20.777c5.736-5.735,15.041-5.735,20.777,0C64.854,193.362,64.854,202.66,59.118,208.403z"/> <path class="st0" d="M397.528,312.809l-7.468-7.482l-72.509-72.509l-4.883,2.166l-5.316,1.919l-0.384,0.117 c-0.936,0.296-9.684,2.971-26.932,5.412c-9.12,1.273-18.156,1.431-26.904,0.434c-3.459-0.385-6.898-0.95-10.296-1.692 l-27.757,27.744c-16.678,16.678-43.836,16.678-60.514,0c-0.585-0.591-1.149-1.19-1.671-1.781l-0.179-0.2 c-10.529-11.939-13.204-28.28-8.252-42.461l10.673-16.609l-0.02-0.02l65.081-65.074c2.647-2.641,5.426-5.103,8.314-7.428 c-20.281-3.982-37.296-2.806-37.296-2.806L88.093,235.679c-1.389,18.988,11.651,39.799,20.928,51.952 c16.692-15.963,43.239-15.756,59.641,0.654c6.107,6.1,9.952,13.617,11.574,21.498c7.895,1.637,15.406,5.475,21.513,11.582 c6.107,6.114,9.952,13.631,11.575,21.519c7.888,1.623,15.412,5.46,21.513,11.568c4.078,4.078,7.152,8.783,9.222,13.817 c11.1-0.137,22.242,4.016,30.688,12.455c16.65,16.636,16.643,43.733,0,60.363l-6.809,6.822l3.411,3.412 c9.148,9.147,23.954,9.147,33.095,0c9.14-9.134,9.14-23.947,0-33.088l6.808,6.83c9.147,9.133,23.947,9.133,33.087,0 c9.14-9.147,9.147-23.954,0-33.101c9.147,9.147,23.947,9.147,33.087,0c9.134-9.126,9.154-23.94,0-33.088 c9.154,9.148,23.954,9.148,33.088,0c9.147-9.132,9.147-23.947,0-33.08L397.528,312.809z"/> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Marketing & Sales</div>
							<div className="text-[#677788]">Guiding through the complexities of machinery and CNC product sales, offering strategic marketing services to connect with the right products and achieve business success.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" fill="#387cff" height="60px" width="60px" version="1.1" id="Layer_1" viewBox="0 0 512.001 512.001">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="204.497,205.165 159.03,205.165 159.03,256.44 215.255,256.44 "/> </g> </g> <g> <g> <polygon points="438.621,124.697 438.621,157.523 408.204,157.523 408.204,124.697 367.934,124.697 367.934,224.887 478.89,224.887 478.89,124.697 "/> </g> </g> <g> <g> <path d="M509.307,355.494H478.89v-100.19h-40.269v32.825h-30.417v-32.825h-40.269v100.19H338.78V94.28V75.202h-30.417v280.292 h-14.291V270.07l-29.214-139.242H84.691V256.44H0v129.47h20.265c8.938-20.763,29.592-35.339,53.593-35.339 c24.001,0,44.655,14.577,53.593,35.339h39.17c8.938-20.763,29.592-35.339,53.593-35.339c24.001,0,44.655,14.577,53.593,35.339 h5.056h15.209h43.447h171.79h2.693v-30.417H509.307z M128.613,286.858V174.748h100.583l23.521,112.109H128.613z"/> </g> </g> <g> <g> <circle cx="73.858" cy="408.896" r="27.903"/> </g> </g> <g> <g> <circle cx="220.21" cy="408.896" r="27.903"/> </g> </g> </g>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Machine Relocation Services</div>
							<div className="text-[#677788]">we offer comprehensive relocation services for everything ranging from heavy machinery to complete production lines making your relocation activity a seamless experience.</div>
						</div>
						<div className="p-[20px] rounded-[10px]">
							<svg className="mx-auto" fill="#387cff" width="50px" height="50px" viewBox="0 0 50 50">
								<path d="M39 2.03125C38.738281 2.0625 38.503906 2.199219 38.34375 2.40625L35.34375 6.21875C34.78125 5.488281 33.898438 5 32.90625 5L30.09375 5C28.394531 5 27 6.394531 27 8.09375L27 15.90625C27 17.605469 28.394531 19 30.09375 19L32.90625 19C33.898438 19 34.78125 18.511719 35.34375 17.78125L38.34375 21.59375C38.636719 21.960938 39.148438 22.066406 39.5625 21.84375L49.46875 16.4375C49.882813 16.214844 50.074219 15.730469 49.929688 15.285156C49.78125 14.835938 49.339844 14.5625 48.875 14.625C48.753906 14.644531 48.636719 14.6875 48.53125 14.75L39.375 19.78125L36 15.5L36 8.53125L39.375 4.25L48.53125 9.25C48.835938 9.457031 49.230469 9.472656 49.550781 9.292969C49.871094 9.113281 50.0625 8.769531 50.042969 8.402344C50.027344 8.035156 49.804688 7.710938 49.46875 7.5625L39.5625 2.15625C39.390625 2.058594 39.195313 2.015625 39 2.03125 Z M 9 3C4.039063 3 0 7.039063 0 12C0 16.960938 4.039063 21 9 21C13.960938 21 18 16.960938 18 12C18 7.039063 13.960938 3 9 3 Z M 18.6875 7C19.480469 8.519531 20 10.171875 20 12C20 13.828125 19.480469 16.480469 18.6875 18L24.96875 18C24.894531 17.652344 24.90625 16.367188 24.90625 16L24.90625 8C24.90625 7.632813 24.894531 7.347656 24.96875 7 Z M 9 7.34375C11.558594 7.34375 13.65625 9.441406 13.65625 12C13.65625 14.558594 11.558594 16.65625 9 16.65625C6.441406 16.65625 4.34375 14.558594 4.34375 12C4.34375 9.441406 6.441406 7.34375 9 7.34375 Z M 17.8125 18.5625C15.804688 21.242188 12.601563 23 9 23C7.773438 23 6.601563 22.777344 5.5 22.40625L14.28125 38.96875L29.34375 38.96875 Z M 6.875 41C5.253906 41 4 42.316406 4 44L4 49C4 49.582031 4.417969 50 5 50L39 50C39.582031 50 40 49.582031 40 49L40 44C40 42.316406 38.746094 41 37.125 41Z"/>
							</svg>
							<div className="text-[20px] text-[#1E2022] font-medium mb-[30px] mt-[40px]">Machine Tending Robots</div>
							<div className="text-[#677788]">we offer turn key solutions for applications such as machine tending, gantry systems , fettling for various industries rangong from foundries to automobile plants.</div>
						</div>
					</div>
				</div>

				{/*fold 4*/}
				<div id="casestudies" className="">
					<div className="flex items-start my-[70px] items-center">
						<div className="">
							<div className="text-[32px] text-[#1B1642] font-bold">Our Impact</div>
							<div className="text-[16px] text-[#677788] mt-[20px]">
								At Chennai Automation Systems, we believe in creating lasting impact through cutting-edge solutions that transform manufacturing processes.Over the past three decades, we have empowered industries to achieve new levels of operational excellence by delivering superior automation and CNC machining services. 
								<br />
								<br />
								Our commitment to quality, innovation, and customer satisfaction has helped businesses enhance their production capabilities, minimize downtime, and optimize efficiency.Our impact is measured by the success of our clients. We are proud to be a trusted partner for industries striving for excellence, innovation, and sustainable growth.
							</div>
						</div>
						<img className="w-[50%] h-[25%] rounded-[20px] ml-[40px] max-[1000px]:hidden" src={success} alt="Success Stories"/>
					</div>
					<div className="grid min-[700px]:grid-cols-2 grid-cols-1 mt-[50px] gap-[30px] text-center">
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>Comprehensive Solutions</span>
								{/*<span className='text-[40px]'>+</span>
								<div className='text-[20px]'>Years of Legal Experience</div>*/}
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">We offer complete services, from machinery upgrades to automation, covering all manufacturing needs under one roof.</div>
						</div>
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>Innovation and Technology</span>
								{/*<span className='text-[40px]'>+</span>
								<div className='text-[20px]'>Documents Notarized</div>*/}
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">Our advanced solutions and partnerships keep clients ahead with the latest technology, driving improvements and competitiveness.</div>
						</div>
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>Quality and Precision</span>
								{/*<span className='text-[40px]'>+</span>
								<div className='text-[20px]'>Trusted Clients</div>*/}
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">We deliver high-quality, precise results, ensuring reliability and efficiency in every project.</div>
						</div>
						<div className="border-solid border-[#eaeaea] border-[1px] p-[20px] rounded-[10px] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)]">
							<div className="text-[#377DFF] text-[32px] mb-[20px]">
								<span>Client-Centric Services</span>
								{/* <span className='text-[40px]'>+</span> */}
								{/* <div className='text-[20px]'>Years of Legal Experience</div> */}
							</div>
							<div className="text-[16px] text-[#677788] leading-[30px]">Tailored support to meet specific client needs, helping achieve operational goals and boost productivity.</div>
						</div>
					</div>
				</div>

				{/*fold 5*/}
				<div className="text-center mt-[100px]">
					<div className="font-bold text-[32px]">Ready to Enhance Your Manufacturing?</div>
					<div className="text-[16px] font-medium text-[#677788] my-[30px]">Contact us to explore how Chennai Automation Systems can transform your operations with our expert solutions.</div>
					<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
						<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
							Contact Us
						</button>
					</a>
				</div>

			</div>
			{/* <hr className="my-[30px] w-[100%] border-[#67778870] border-[1px] border-solid"/>
			<div className="px-[20px] py-[10px] w-[1200px] max-[1100px]:w-[80%] max-[800px]:w-[90%] max-[600px]:w-[100%] mx-[auto]">
				<div className="flex items-center text-[16px] font-medium justify-end">
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
					<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div>
					<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
						<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
							Contact Us
						</button>
					</a>
				</div>
			</div> */}
		</>
	)
}

export default Homepage;
