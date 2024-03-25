import React from 'react'
import './BagelPage.css';
import '../styles.css';

// import originalDesignImage from './images/original-design.png';

export default function BagelPage() {
  return (
    <body className="bagel-page">
    <div className="wide-wrapper">
        <div className="homepage-section">
        </div>
        <div className="header-section">
            <div className="header-container w-container">
                <h1 className="heading hn">Bagel Gourmet Redesign</h1>
            </div>
        </div>

        <div className="section">
            <div className="container w-container">
                <div className="title-container"><h3>INTRODUCTION</h3></div>
                <div className="body-text-container">
                    <h2>In response to the need for a fresher digital presence, I embarked on a redesign project for a local gourmet cafe's website on Thayer Street. 
                    The site was chosen as it feels outdated and my goal was to <b>modernize the site, making information more accessible and improving overall 
                    readability for visitors</b>.</h2>
                </div>
                <div className="table-container">
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3>MY ROLE</h3>
                        </div>
                        <div className="table-element-body">
                            <h4>Responsible for conceptualization, design, and implementation of a redesigned website.</h4>
                        </div>
                    </div>
                    <div className="table-element-container" style={{textAlign: 'right'}}>
                        <div className="table-element-heading">
                            <h3>TIMELINE</h3>
                        </div>
                        <div className="table-element-body">
                            <h4>February ~ March 2024</h4>
                        </div>
                    </div>
                    <div className="table-element-container">
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="section">
            <div className="image-container">
                <img src={require('.//images/original-design.png')} alt="Original website designs"/>
                <div className="title-container" style={{textAlign: 'right'}}><h3><b>Website Link: http://bagelgourmetcafe.com/</b></h3></div>
            </div>
            <div className="container w-container">
                <div className="title-container"><h3><b>PROBLEM STATEMENT</b></h3></div>
                <div className="body-text-container">
                    <h2>The lack of visual hierarchy, inconsistent navigation flow, and overwhelming presentation makes the 
                        user experience on the website difficult to follow and inefficient. <b>The goal is to streamline the 
                        user flow and present the necessary information in a more accessible manner.</b></h2>
                </div>
                <br></br>
                <div className="title-container"><h3><b>BREAKDOWN OF THE PROBLEM:</b></h3></div>
                <div className="table-container">
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}>🧭 <b>Inconsistent Navigation Options</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>The navigation bar along the top is hard to read and can be easily misinterpreted as labels. 
                                Another set of hyperlinks are also placed at the bottom - inconsistent user flow. </h4>
                        </div>
                    </div>
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}>ℹ️ <b>Information Overload</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>A lack of visual hierarchy causes disorganized layout of information and images, which can 
                                be confusing for the user to form a memorable impression of the restaurant.</h4>
                        </div>
                    </div>
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}>❌ <b>Unresponsive Design</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>The text box containing restaurant-specific information overflows on laptop and tablet devices. 
                                The purpose of the negative space is also unclear and visually unappealing.</h4>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="title-container"><h3><b>WAVE ACCESSIBILITY ISSUES:</b></h3></div>
                <div className="table-container">
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}><b>“Missing or Uninformative Page Title”</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>All texts displayed on the website are done through images - 
                                <b>no explicit text</b> - inaccessible for screenreaders. 
                            </h4>
                        </div>
                    </div>
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}><b>“Null or empty alt text”</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>18 instances of missing alt text. Especially since website is heavily dependent
                                on images, alt text should be included to ensure communication even when images 
                                aren't loading.
                            </h4>
                        </div>
                    </div>
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}><b>“Very small text”</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>5 instances of tiny text were detected on the navigation buttons, which decreases
                                the visibility and memorability of the website.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section">
            <div className="container w-container">
                <div className="title-container padding"><h3><b>VISUAL REDESIGN</b></h3></div>
                <div className="body-text-container padding">
                    <h4>The redesign process started with 9 speed sketches that captured potential visual layouts of the webpage.
                        The final sketch was made by compiling my favourite features from the initial sketches and modifying them
                        to be compatible with each other. 
                    </h4>
                </div>
                <div className="image-container" style={{paddingBottom: 0}}>
                    <img src={require('.//images/sketches.png')} alt="Initial sketches image"></img>
                </div>
            </div>
        </div>

        <div className="section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="w-container" style={{display: 'flex', flexDirection:'row'}}>
                <div className="image-container">
                    <img src={require('.//images/bagel-gourmet-image.png')} alt="Desktop wireframe image" style={{width: '300px'}}></img>
                </div>
                <div className="body-text-container"><h3 style={{fontSize: '18px'}}>Based on the exterior design and overall aesthetic of the restaurant, 
                    a UI style guide was created. I also wanted to preserve the brick wall and architectural textures in the
                    final design.
                </h3></div>
            </div>
            
            <div className="image-container" style={{width: '600px', paddingBottom:0}}>
                <div className="title-container"><h3><b>UI STYLE GUIDE:</b></h3></div>
                <img src={require('.//images/style-guide.png')} alt="Style guide image"></img>
            </div>
        </div>

        <div className="section">
            <div className="container w-container">
                <div className="title-container padding"><h3><b>LO-FI & HI-FI WIREFRAMING</b></h3></div>
                <div className="body-text-container padding">
                    <h4> In order for the redesigned website to be responsive to a variety of screen sizes, design prototypes
                        were made for large, medium, and small devices. The main issues when resizing ocurred when elements flowed
                        outside of the screensize and when text sizes didn't change dynamically. Therefore, <b>@media screen</b> was helpful
                        in ensuring that the website design was responsive to any adjustments. 
                    </h4>
                </div>
                <div className="image-container w-container">
                    <img src={require('.//images/desktop-wireframe.png')}alt="Desktop wireframe image"></img>
                </div>
                <div className="image-container w-container">
                    <img src={require('.//images/tablet-wireframe.png')} alt="Tablet wireframe image"></img>
                </div>
                <div className="image-container w-container">
                    <img src={require('.//images/mobile-wireframe.png')} alt="Mobile wireframe image"></img>
                </div>
            </div>
        </div>

        <div className="section">
            <div className="w-container">
                <div className="title-container">
                    <a href="https://chen-charlene.github.io/bagelgourmet/"><h3 style={{color: '#333', fontWeight: 600}}>THE FINAL REDESIGNED WEBSITE</h3></a>
                </div>
                
                <div className="body-text-container">
                    <h2>The final redesigned version of the website aims to target the accessibility concerns that weren't addressed
                        in the original version. In addition, the implementation of dynamic resizing ensures optimal viewing and usability 
                        across all platforms, catering to a diverse range of users. By prioritizing <b>accessibility and responsiveness</b>, 
                        the redesigned website offers a seamless and inclusive browsing experience, enhancing engagement and satisfaction for all visitors.
                    </h2>
                </div>
            </div>

            <div className="gif-container">
                <div id="desktop-gif" className="image-container">
                    <img src={require('.//images/desktop.png')} alt="Desktop wireframe gif"></img>
                </div>
                <div id="tablet-gif" className="image-container">
                    <img src={require('.//images/tablet.gif')} alt="Tablet wireframe gif"></img>
                </div>
                <div id="mobile-gif" className="image-container">
                    <img src={require('.//images/mobile.gif')} alt="Mobile wireframe gif"></img>
                </div>
            </div>

            <div className="container w-container" style={{padding:'20px'}}>
                <div className="title-container padding"><h3><b>PERSONAL REFLECTION</b></h3></div>
                <div className="body-text-container padding">
                    <h4> The project allowed me to gain a deeper understanding and appreciation for the importance of inclusive design. It was interesting
                        to learn through experience that a lot of thought is needed to account for the slightest details in the product that can drastically
                        improve the user experience. 
                    </h4>
                </div>
            </div>
            
        </div>
    </div>    
    </body>
  )
}







// import React, { useState, useEffect } from 'react';
// // import htmlContent from './index.html';
// var html =require('./index.html');

// class BagelPage extends React.Component {
//   render(){
//      return (
//         <iframe src={html }></iframe> 
//      );
//   }
// }
// export default BagelPage;

// // export default function BagelPage() {
// //     // const [htmlContent, setHtmlContent] = useState('');

// //     // useEffect(() => {
// //     //     fetch('/Users/charlenechen/Desktop/spring24/cs1300/portfolio/src/pages/projects/bagel_gourmet_redesign/index.html')
// //     //     .then(response => {
// //     //       console.log(response);
// //     //       response.text()
// //     //     })
// //     //     // .then(data => setHtmlContent(data))
// //     //     // .catch(error => console.error('Error fetching HTML:', error));
// //     // }, [])


// //   return (
// //     <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
// //     // <div>Bagel PAGE</div>
// //   )
// // }
