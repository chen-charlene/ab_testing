import React from 'react'
import "./SpotiduoPage.css"

export default function SpotiduoPage() {

    const userJourney = require('./images/userjourney.png')
    const lofiImg = require('./images/lofi.png')
    const finalLofiImg = require('./images/final-lofi.png')
    const developmentImg = require('./images/development.png')
    const p1Gif = require('./images/spotiduo-p1.gif')
    const p2Gif = require('./images/spotiduo-p2.gif')
    const p3Gif = require('./images/spotiduo-p3.gif')


  return (
    <div className="spotiduo-page">
        <div className="wide-wrapper">
            <div className="header-section">
                <div className="header-container w-container">
                    <h1 className="heading hn">Spotiduo</h1>
                </div>
            </div>

            <div className="section">
                <div className="container w-container">
                    <div className="title-container"><h3>INTRODUCTION</h3></div>
                    <div className="body-text-container">
                        <h2>Spotiduo is a platform that adds a fun twist to language learning by blending the joy of music with the art of language acquisition. 
                            It crafts an interactive learning experience as the user plays, listens, and challenges their lyrical knowledge based on their favourite 
                            song or generated recommendations. </h2>
                    </div>
                    <div className="table-container">
                        <div className="table-element-container">
                            <div className="table-element-heading">
                                <h3>MY ROLE</h3>
                            </div>
                            <div className="table-element-body">
                                <h4>Product Designer, Front-end Developer</h4>
                            </div>
                        </div>
                        <div className="table-element-container" style={{textAlign:"right"}}>
                            <div className="table-element-heading">
                                <h3>TIMELINE</h3>
                            </div>
                            <div className="table-element-body">
                                <h4>October - December 2023</h4>
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
                        <h2>There is no language learning platform that incorporates learning with music, 
                            making it difficult for users to stay engaged and motivated, leading to <b>lower retention rates and less effective learning outcomes.</b></h2>
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
                        <h4 style={{fontSize: "20px", lineHeight: "32px"}}>Build a platform that allows the user to select a song in the language they want to learn and test their ability to 
                        fill in the blanks based on what they hear. Scores will be calculated based on their accuracy to inform their learning. Upon completion, the user will be recommended
                         similar songs to explore new music and expand their linguistic understanding. </h4>
                    </div>
                    <br/>
                    <div className="title-container"><h3><b>PROJECT GOALS:</b></h3></div>
                    <div className="table-container">
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}>🟢 <b>Connect to user's spotify account</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>Use Spotify OAuth to authorize and connect to the user's spotify account and ensure user session persistence.</h4>
                        </div>
                    </div>
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}>⚙️ <b>Allow user to configure game settings</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>Allow the user to configure settings for their native language, the learning language and the game's difficulty. Based on these settings, 
                                the game will be adjusted to display the corresponding data. 
                            </h4>
                        </div>
                    </div>
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}>ℹ️ <b>Offer real-time translations</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>Utilize APIs to offer synced translations to help the user better understand the meaning behind the lyrics they are seeing
                                and transcribing.
                            </h4>
                        </div>
                    </div>
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}>🎶 <b>Recommend new songs</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>Based on the input song from the user, generate new recommendations with similar metadata using the Spotify API. Process the
                                selection of songs so that the user can continue game play with the recommendations.
                            </h4>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="section" style={{paddingTop: "60px", paddingBottom: "60px"}}>
                <div className="w-container">
                    <div className="title-container"><h3><b>Lo-Fi Iterations</b></h3></div>
                    <div className="body-text-container">
                        <h2>
                            The initial user flow required the users to enter specific metadata they are interested in {"(e.g. danceability, energy)"} so that we can generate 
                            a song for them to learn from. However, upon user testing, we found out that most users would prefer to start with a song of their choice and expand
                            from there. Therefore, we restructured the user-flow to simplify the configuration process and handle the metadata under the hood so that the user's 
                            responsibility is minimized. 
                        </h2>
                    </div>
                </div>
                <div className="container image-container wider-container">
                    <img src={lofiImg} alt="Lofi sketches"/>
                </div>
            </div>

            <div className="section" style={{paddingTop: "0px", paddingBottom: "60px"}}>
                <div className="w-container">
                    <div className="title-container"><h3><b>Final User Flow</b></h3></div>
                    <div className="body-text-container">
                        <h2>
                            Based on ther user feedback, we finalized our flow and sketched out our supplementary pages for the 
                            overall website.
                        </h2>
                    </div>
                </div>
                <div className="container image-container wider-container">
                    <img src={finalLofiImg} alt="Final Lofi sketches"/>
                </div>
            </div>

            <div className="section" style={{paddingTop: "0px", paddingBottom: "50px"}}>
                <div className="w-container">
                    <div className="title-container"><h3><b>Final Design & Implementation</b></h3></div>
                    <div className="body-text-container">
                        <h2>
                            Working in a team of 4, we divided up the work into front-end and back-end. We discussed the API calls and 
                            the information that would be exchanged to ensure that the right data is fetched and displayed to the user. 
                            The code implmentation can be found {" "}
                            <a href="https://github.com/chen-charlene/SpotiDuo" style={{color: "#777"}}>here</a>.
                        </h2>
                    </div>
                </div>
                <div className="container gif-container-spoti wider-container">
                    <div className="gif-row">
                        <div className="gif-1-spoti">
                            <img src={p1Gif} alt="Step 1 demo"/>
                        </div>
                        <div className="gif-text-container-spoti">
                            <h2 style={{padding: 0}}>
                                User chooses the song they want and sets up the game settings based on their native
                                language, the language they are learning, and the game's difficulty.
                            </h2>
                        </div>
                    </div>
                    <div className="gif-row">
                        <div className="gif-text-container-spoti">
                            <h2 style={{padding: 0}}>
                                User fills in the blanks based on what they hear. The scores are updated and the correct answer is displayed
                                if the user gets it wrong.
                            </h2>
                        </div>
                        <div className="gif-1-spoti">
                            <img src={p2Gif} alt="Step 2 demo"/>
                        </div>
                    </div>
                    <div className="gif-row">
                        <div className="gif-1-spoti">
                            <img src={p3Gif} alt="Step 3 demo"/>
                        </div>
                        <div className="gif-text-container-spoti">
                            <h2 style={{padding: 0}}>
                                Based on the song the user was playing with, the website generates recommendations that the 
                                user can continue playing with.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="w-container">
                    <div className="title-container"><h3><b>USER FEEDBACK:</b></h3></div>
                    <div className="table-container">
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}>🟢 <b>Fun & Innovative approach to learning</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4> - "I learn songs naturally by listening to them, by combining this with language learning, it is an Innovative
                                way to combine the two"</h4>
                            <br></br>
                            <h4> - "This is a very fun and cool platform and it feels more interesting than just translating vocabulary or sentences"</h4>
                        </div>
                    </div>
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3 style={{color: 'black'}}>🟢 <b>Interface Feedback</b></h3>
                        </div>
                        <div className="table-element-body">
                            <h4>The interface is fun to interact with and intuitive to use, but {" "}
                                <b>one thing I would change is to make the navigation on the home page more clear</b> since
                                people might be confused about where to go.
                            </h4>
                        </div>
                    </div>
                    <div className="body-text-container">
                        <h2>
                            We continued to adjust the platform to make the tool more accessible, such as adding error messages when information 
                            is not entered, or adding instructions upon hover to make the navigation easier to understand. 
                        </h2>
                    </div>
                </div>
                <div className="title-container" style={{paddingTop: "60px"}}><h3><b>FUTURE DEVELOPMENTS</b></h3></div>
                    <div className="body-text-container">
                        <h2>To further refine this product, we have looked into new features such as a global leaderboard and a multi-player mode 
                            to encourage engagement from friends and family. An example of how this can be implemented is shown below, and we will
                            continue to explore this idea!
                        </h2>
                    </div>
                </div>
                <div className="w-container container image-container wider-container">
                    <img src={developmentImg} alt="Development sketches"/>
                </div>
            </div>


            <div className="section" style={{paddingTop: "70px", paddingBottom: "200px"}}>
                <div className="w-container">
                    <div className="title-container"><h3><b>REFLECTION</b></h3></div>
                    <div className="body-text-container">
                        <h2>
                            The process of identifying a niche, developing a solution, testing the product and iteratively 
                            refining the interface allowed me to sharpen my design thinking approach and engage in problem solving. 
                            From a technical side, I was able to deepen my understanding of APIs and front-end development skills. Overall, 
                            this project was a very rewarding experience with a high impact on its users as they discover new music and acquire
                            new languages!
                        </h2>
                    </div>
                </div>
                
            </div>


        </div>    
    </div>

  )
}
