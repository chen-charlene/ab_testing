import React from 'react'
import "./RemyPage.css"

export default function RemyPage() {
    const amazonHeart = require("./images/amazon-heart.png")
    const amazon = require("./images/amazon.png")
    const check = require("./images/check.png")
    const cross = require("./images/cross.png")
    const remygif1 = require("./images/remy-gif-1.gif")
    const remygif2 = require("./images/remy-gif-2.gif")
    const remygif3 = require("./images/remy-gif-3.gif")
    const simplyHeart = require("./images/simply-heart.png")
    const simplyRep = require("./images/simply-recipes.png")
    const sketch = require("./images/sketch.png")
    const uberEats = require("./images/uber-eats.png")
    const uberHeart = require("./images/uber-heart.png")
    const userJourney = require("./images/user-journey.png")


  return (
    <div className="remy-page">
        <div className="wide-wrapper">
            <div className="header-section">
                <div className="header-container w-container">
                    <h1 className="heading hn">Remy's Playground</h1>
                </div>
            </div>

            <div className="section">
                <div className="container w-container">
                    <div className="title-container"><h3>INTRODUCTION</h3></div>
                    <div className="body-text-container">
                        <h2>This project aims to create a user-friendly recipe favoriting and ingredient aggregation website, catering to individuals eager to enhance their culinary skills. 
                            By <b>seamlessly organizing favorite recipes and compiling necessary ingredients</b>, 
                            Remy's Playground provides a comprehensive resource for aspiring cooks seeking culinary inspiration and convenience.</h2>
                    </div>
                    <div className="table-container">
                        <div className="table-element-container">
                            <div className="table-element-heading">
                                <h3>MY ROLE</h3>
                            </div>
                            <div className="table-element-body">
                                <h4>Responsible for the conceptualization, design, and implementation of a recipe aggregator platform for aspiring chefs.</h4>
                            </div>
                        </div>
                        <div className="table-element-container" style={{textAlign:"right"}}>
                            <div className="table-element-heading">
                                <h3>TIMELINE</h3>
                            </div>
                            <div className="table-element-body">
                                <h4>Spring 2024</h4>
                            </div>
                        </div>
                        <div className="table-element-container">
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className="section">
                <div className="container w-container">
                    <div className="title-container"><h3><b>PROBLEM STATEMENT</b></h3></div>
                    <div className="body-text-container">
                        <h2>There is no all-in-one platform for compiling cooking recipes to a shopping list, making the barrier to learning cooking higher than it has to be</h2>
                    </div>
                    <br/>
                    <div className="title-container"><h3><b>BREAKDOWN OF THE PROBLEM:</b></h3></div>
                </div>
                <div className="container image-container wider-container">
                    <img src={userJourney} alt="User Journey"/>
                </div>
                <div className="w-container">
                    <div className="title-container padding"><h3><b>SOLUTION</b></h3></div>
                    <div className="body-text-container padding">
                        <h4 style={{fontSize: "20px", lineHeight: "32px"}}>Build a platform that allows the user to browse, save, and aggregate a shopping list based on recipes 
                            they are interested in. Implement filtering & sorting capabilities to allow personalized results and handle changes dynamically without extra work from the user.
                        </h4>
                    </div>
                    <br/>
                    <div className="body-text-container padding">
                        <h4  style={{fontSize: "20px", lineHeight: "32px"}}>To build a more inclusive user-experience when interacting with the platform, 
                            I conducted a <b>Competitor Analysis for food platforms with a “favouriting” feature</b> (
                            <a href="https://www.ubereats.com" style={{color: "#777"}} >UberEats</a>,
                            <a href="https://www.amazon.com" style={{color: "#777"}}>Amazon</a>,
                            <a href="https://www.simplyrecipes.com" style={{color: "#777"}}>Simply Recipes</a>).
                        </h4>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container w-container">
                    <div className="title-container"><h3><b>COMPETITOR ANALYSIS</b></h3></div>
                    <div className="table-container">
                        <table className="ca-table">
                            <thead>
                                <tr className="ca-tr">
                                    <th className="ca-th factor-col">Factors</th>
                                    <th className="ca-th">
                                        <img src={uberEats} style={{height: "100px", width:"auto"}}/>
                                    </th>
                                    <th className="ca-th">
                                        <img src={amazon} style={{height: "100px", width:"auto"}}/>
                                    </th>
                                    <th className="ca-th">
                                        <img src={simplyRep} style={{height: "70px", width:"auto"}}/>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="ca-tbody">
                                <tr className="ca-tr">
                                    <td className="ca-td factor-col">Sort & Filter options provided?</td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={cross} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={check} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={check} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                </tr>
                                <tr className="ca-tr">
                                    <td className="ca-td factor-col" style={{fontWeight:300, textIndent: "20px", fontSize:"17px"}}>Sorting Capabilities</td>
                                    <td className="ca-td content-col">*default to display restaurant availability</td>
                                    <td className="ca-td content-col">- recently added <br/> - price</td>
                                    <td className="ca-td content-col">- newest <br/> - alphabetical</td>
                                </tr>
                                <tr className="ca-tr">
                                    <td className="ca-td factor-col" style={{fontWeight:300, textIndent: "20px", fontSize:"17px"}}>Filtering Capabilities</td>
                                    <td className="ca-td content-col"  style={{textAlign:"center"}}>--</td>
                                    <td className="ca-td content-col">- purchased <br/> - not purchased <br/> - price dropped</td>
                                    <td className="ca-td content-col"  style={{textAlign:"center"}}>--</td>
                                </tr>
                                <tr className="ca-tr">
                                    <td className="ca-td factor-col">Favouriting option is visible upon initial interaction?</td>
                                    <td className="ca-td"  style={{textAlign:"center"}}>
                                        <img src={check} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                    <td className="ca-td"  style={{textAlign:"center"}}>
                                        <img src={cross} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={cross} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                </tr>
                                <tr className="ca-tr">
                                    <td className="ca-td factor-col">Require user account in order to save?</td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={check} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={check} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={cross} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                </tr>
                                <tr className="ca-tr">
                                    <td className="ca-td factor-col">Visual representation of the “favourite” button</td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={uberHeart} style={{height: "70px", width: "auto"}}/>
                                    </td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={amazonHeart} style={{height: "70px", width: "auto"}}/>
                                    </td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={simplyHeart} style={{height: "70px", width: "auto"}}/>
                                    </td>
                                </tr>
                                <tr className="ca-tr">
                                    <td className="ca-td factor-col">Consistent format & visual symbols between favouriting & favourites list?</td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={check} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={cross} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                    <td className="ca-td" style={{textAlign:"center"}}>
                                        <img src={check} style={{height: "50px", width: "auto"}}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="title-container" style={{paddingTop: "30px"}}><h3>SUMMARY</h3></div>

                    <div className="table-container">
                        <div className="table-element-container">
                            <div className="table-element-heading">
                                <h3 style={{color: "black"}}><b>Uber Eats: </b></h3>
                            </div>
                            <div className="table-element-body">
                                <h4><b>Pros:</b> Easy, accessible, & consistent layout that allows a streamlined user experience from browsing, to “hearting”, to accessing the hearted restaurants.
                                    <br/>
                                    <b>Cons: </b>Lack of sort & filter which makes it hard to navigate the hearted list.</h4>
                            </div>
                        </div>
                        <div className="table-element-container">
                            <div className="table-element-heading">
                                <h3 style={{color: "black"}}><b>Amazon:</b></h3>
                            </div>
                            <div className="table-element-body">
                                <h4><b>Pros:</b> Advanced filtering & sorting options which allows ease of browsing.
                                    <br/>
                                    <b>Cons: </b>Inconsistent “favouriting” experience since hearted items turn into “saves”.</h4>
                            </div>
                        </div>
                        <div className="table-element-container">
                            <div className="table-element-heading">
                                <h3 style={{color: "black"}}><b>Simply Recipe</b></h3>
                            </div>
                            <div className="table-element-body">
                                <h4><b>Pros:</b>Simple sorting options which allow ease of navigation without overcrowding the interface & consistent association of “heart”.
                                    <br/>
                                    <b>Cons: </b>Hard to find the “save it” button</h4>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div style={{backgroundColor:"#F5F5F5", borderRadius: "25px", padding:"10px"}}>
                        <div className="title-container padding"><h3><b>PROJECT GOALS</b></h3></div>
                        <div className="body-text-container padding">
                            <h4  style={{fontSize: "20px", lineHeight:"32px"}}>Tackle the pain points displayed by competitors by integrating the following features:
                                <br/>
                                - Simple sorting (by recipe difficulty and time) & filtering options (alphabetical) to elevate the browsing experience
                                <br/>
                                - Consistent “hearting” experience
                                <br/>
                                - Accessible “heart” button that is intuitive to use
                                <br/>
                                - Aggregated list that compiles the list of ingredients and calculates the total price
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="title-container padding w-container"><h3><b>Lo-Fi protoype</b></h3></div>
                <div className="image-container w-container">
                    <img src={sketch}/>
                </div>

                <div className="gif-container">
                    <img className="gif-1" src={remygif1}/>
                    <div className="gif-text-container">
                        <h4 style={{fontSize: "25px", lineHeight:"30px"}}>
                            <span style={{color: "black"}}>One-Pager</span>
                            <br/>
                            = Minimizes unnecessary navigation 
                            <br/>
                            = User can see updates instantly
                        </h4>
                    </div>
                </div>
                <div className="gif-container">
                    <div className="gif-text-container">
                        <h4 style={{fontSize: "25px", lineHeight:"30px"}}>
                            <span style={{color: "black"}}>Aggregated shopping list with dynamic updates</span>
                        </h4>
                    </div>
                    <img className="gif-1" src={remygif3} style={{maxHeight: "500px", width: "auto"}}/>
                </div>
                <div className="gif-container">
                    <img className="gif-1" src={remygif2} style={{maxHeight: "600px", width: "auto"}}/>
                    <div className="gif-text-container">
                        <h4 style={{fontSize: "25px", lineHeight:"30px"}}>
                            <span  style={{color: "black"}}>Quick & easy modifications of “hearted” recipes</span>
                        </h4>
                        <a href="https://remys-playground-1qxpn4dr8-charlene-chens-projects.vercel.app/">
                            <button className="nav-button">
                                <h4  style={{color: "white", fontSize: "25px"}}>Visit Page -{">"} </h4>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="section" style={{paddingTop: "150px", paddingBottom: "200px"}}>
                <div className="w-container">
                    <div className="title-container"><h3><b>REFLECTION</b></h3></div>
                    <div className="body-text-container">
                        <h2>
                            Crafting the recipe ingredient aggregator website allowed me to refine front-end skills and address user concerns by leveraging competitor weaknesses. 
                            Iterative design and user feedback guided the implementation of intuitive features, ensuring a seamless browsing experience.</h2>
                    </div>
                </div>
                
            </div>


        </div>    
    </div>

  )
}
