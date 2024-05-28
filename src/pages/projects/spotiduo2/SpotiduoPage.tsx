import React from 'react'
import './SpotiduoPage.css'

const scrollToSection = (id: string) => {
    const header = document.querySelector('top');
    const element = document.getElementById(id);
    const offset = header ? header.clientHeight : 0; // Includes padding

    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - (offset + 100);
        window.scrollTo({ top, behavior: 'smooth' });
    }
}

export default function SpotiduoPage() {
    const problemImg = require('./images/problem.png')
    const competitorImg = require('./images/comp-logo.png')
    const part11Gif = require('./images/pt1.1.gif')
    const part12Gif = require('./images/pt1.2.gif')
    const part13Gif = require('./images/pt1.3.gif')
    const part2Gif = require('./images/pt2.gif')
    const part3Gif = require('./images/pt3.gif')
    const iter1Img = require('./images/iteration1.png')
    const iter2Img = require('./images/iteration2.png')
    const lofiImg = require('./images/lofi.png')
    const oauthGif = require('./images/oauth.gif')
    const decoImg = require('./images/deco.png')
    const multiImg = require('./images/multip.png')

  return (
    <div>
        <div className="top"></div>
        <div className="spoti-container">
            <div className="row">
                <div className="col ml-auto col-sm-12">

                    {/* Introduction */}
                    <div className="space-md side-padding-sm">
                        <div className="headline-content text-center">
                            <h1>Spotiduo</h1>
                            <h1 className="subtitle text-center">A music-based language learning platform</h1>
                        </div>

                        <div className="row d-flex align-content-center space-top proj-body justify-center text-center">
                            <div className="col-md-3">
                                <div className="text-small"><strong>role</strong></div>
                                <p>Front-End Developer</p>
                                <p>Product Designer</p>
                            </div>
                            <div className="col-md-3">
                                <div className="text-small"><strong>timeline</strong></div>
                                <p>Nov 2023 - Ongoing</p>
                            </div>
                            <div className="col-md-3">
                                <div className="text-small"><strong>team</strong></div>
                                <p>
                                    <a className="link" href="https://www.allenwang.co">Allen Wang</a>
                                </p>
                                <p>
                                    <a className="link" href="https://www.linkedin.com/in/andrew-z-chen/">Andrew Chen</a>
                                </p>
                                <p>
                                    <a className="link" href="https://www.linkedin.com/in/marcelmatsal/">Marcel Mateos Salles</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Image */}
                    {/* <figure>
                        <img src={lofiImg} alt="Spotiduo Problem Infograph" className="img-fluid space-bottom"></img>
                    </figure> */}

                    {/* Overview */}
                    <div className="row justify-content-start space-lg no-space-top">
                        <div className="col-lg-8 mx-auto text-left">
                            <h1 id="s1" className="section">Overview</h1>
                            <div className="proj-body">People often find the language learning process tedious and uninspiring. 
                            Traditional methods, such as memorizing vocabulary lists or conjugating verbs, can feel repetitive 
                            and disconnected from real-world contexts.</div>
                            <div className="proj-body">As a result, many learners struggle to stay motivated and engaged, 
                            viewing language learning as a chore rather than an enjoyable pursuit.</div>
                            <div className="proj-body">Recognizing this common sentiment, my team and I saw an opportunity to 
                            revolutionize the language learning experience. Instead of viewing it as a dull task to be endured, 
                            we aimed to <strong>transform it into an engaging and dynamic journey</strong>.</div>
                            <a onClick={() => scrollToSection('s5')}>
                                <button className="proj-btn">
                                    See the Final Product!
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Problem Image */}
                    <figure>
                        <img id="s2" src={problemImg} alt="Spotiduo Problem Infograph" className="img-fluid"></img>
                    </figure>

                    {/* Problem Statment */}

                    <div className="space-md text-left">
                        <div className="row d-flex proj-body justify-center">
                            <div className="col-md-3 text-center"><h3>Problem</h3></div>
                            <div className="col-md-6"><p>Many language learners find traditional methods of language acquisition to be boring and unmotivating, 
                                leading to <strong>low engagement and retention rates</strong>.</p></div>
                        </div>
                        <div className="row d-flex proj-body justify-center">
                            <div className="col-md-3 text-center"><h3>Objective</h3></div>
                            <div className="col-md-6"><p>To create a language learning platform that addresses the lack of engagement and motivation commonly 
                                associated with traditional methods, thereby increasing user participation and retention.</p></div>
                        </div>
                        <div className="row d-flex proj-body justify-center">
                            <div className="col-md-3 text-center"><h3>Outcome</h3></div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col">
                                        <h3 style={{marginBottom: 0}}>
                                            <i className="fas fa-user icon-sm" aria-hidden="false"></i>
                                            3000+
                                        </h3>
                                        <p>potential users</p>
                                    </div>
                                    <div className="col">
                                        <h3 style={{marginBottom: 0}}>
                                            +33%
                                        </h3>
                                        <p>engagement rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Research */}
                    <div className="row space-sm text-left">
                        <div className="col-lg-8 mx-auto">
                            <h1 id="s3" className="section">Research</h1>
                        </div>
                    </div>
                    <div className="row text-left">
                        {/* Interviews */}
                        <div className="col-lg-8 mx-auto">
                            <h2>Interviews</h2>
                            <p>During our research phase, we conducted interviews to gain insights into the problems 
                                language learners face with traditional methods. Here's a summary of the key issues 
                                voiced by participants:</p>
                            <div className="proj-body">
                                 <div className="row">
                                    <div className="col-md-6 space-sm side-padding-smallest">
                                        <h5>🥱 Tediousness and Lack of Enjoyment</h5>
                                        <p>Many learners found traditional methods like memorizing vocabulary lists and conjugating verbs tedious and unmotivating, 
                                            leading to a decline in their motivation to continue learning.</p>
                                    </div>
                                    <div className="col-md-6 space-sm side-padding-smallest">
                                        <h5>❌ Disconnected from Real-world Contexts</h5>
                                        <p>Participants found traditional methods disconnected from real-world contexts, struggling to see the relevance of 
                                            memorizing vocabulary and grammar without practical application.</p>
                                    </div>
                                    <div className="col-md-6 space-sm side-padding-smallest no-space-top">
                                        <h5>📉 Low Engagement and Retention Rates</h5>
                                        <p>Many learners reported quickly forgetting information they had memorized and feeling disheartened by their lack of progress.</p>
                                    </div>
                                    <div className="col-md-6 space-sm side-padding-smallest no-space-top">
                                        <h5>💼 Perception of Learning as a Chore</h5>
                                        <p>Many learners viewed language learning as a chore driven by external pressures like academic requirements or career goals, 
                                            rather than genuine interest or passion..</p>
                                    </div>
                                 </div>
                            </div>
                        </div>

                        {/* Market Research */}
                        <div className="col-lg-8 mx-auto">
                            <h2>Competitive Analysis</h2>
                            <p>We analyzed the drawbacks of existing language learning platforms to identify limitations that aren’t being addressed</p>
                            <figure>
                                <img src={competitorImg} alt="Spotiduo Competitors" className="img-fluid space-sm"></img>
                            </figure>
                            <div className="proj-body">
                                 <div className="row">
                                    <div className="col-md-6 space-sm side-padding-smallest no-space-top">
                                        <h5>❌ Limited Language Selection</h5>
                                        <p>The limited selection of courses may be a drawback for learners interested in less commonly taught languages or niche dialects.</p>
                                    </div>
                                    <div className="col-md-6 space-sm side-padding-smallest no-space-top">
                                        <h5>❌ Repetitive Exercises</h5>
                                        <p>Repetitive exercises can become monotonous and uninspiring, causing some learners to quickly lose interest and motivation.</p>
                                    </div>
                                 </div>
                            </div>
                        </div>

                        {/* Painpoints */}
                        <div className="col-lg-8 mx-auto space-sm">
                            <h2>User Painpoints</h2>
                            <p>Through our research, we identified a few user painpoints that we aim to address</p>
                            <div className="proj-body">
                                 <div className="row justify-center">
                                    <div className="col-lg-10 space-sm">
                                        <h5>🥱 Lack of Engagement and Motivation</h5>
                                        <p>Users want a learning experience that is engaging and helps them stay motivated when learning a new language</p>
                                    </div>
                                    <div className="col-lg-10 space-sm no-space-top">
                                        <h5>❌ Disconnected from Real-world Contexts</h5>
                                        <p>Users want to have a direct application of what they learned in a real world context</p>
                                    </div>
                                    <div className="col-lg-10 space-sm no-space-top">
                                        <h5>😞 Perception of Learning as a Chore</h5>
                                        <p>The learning experience should be an enjoyable pursuit that can be easily integrated into the user’s daily life</p>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Goals */}
                    <div className="row space-sm text-left">
                        <div className="col-lg-8 mx-auto">
                            <h1 id="s4" className="section">Project Goals</h1>
                        </div>
                    </div>
                    <div className="space-md text-left no-space-top">
                        <div className="row d-flex proj-body justify-center">
                            <div className="col-md-3 text-center"><h3>Solution:</h3></div>
                            <div className="col-md-6"><p>To address the user pain points, we came up with a music-based language learning solution. 
                                Based on different research papers {'('}
                                <a className="link" href="https://digitalcommons.murraystate.edu/cgi/viewcontent.cgi?article=1061&context=honorstheses">Bennet</a>{", "} 
                                <a className="link" href="https://www.researchgate.net/publication/334193554_The_Effects_of_Music_in_the_Foreign_Language_Learning_Classroom">Grimm</a>{"), "}
                                we wanted to create a more engaging language learning experience whilst seamlessly integrating language acquisition into the user’s daily lives through passive activities like music listening. 
                                </p></div>
                                
                        </div>
                    
                        <div className="row d-flex proj-body justify-center space-sm">
                            <div className="col-md-3 text-center"><h3>Goals:</h3></div>
                            <div className="col-md-6">
                                <div className="col">
                                    <div className="col background-box">
                                        <h5 style={{marginBottom: 0}}>
                                            1. Incentivize users to learn a new language
                                        </h5>
                                    </div>
                                    <div className="col background-box">
                                        <h5 style={{marginBottom: 0}}>
                                            2. Personalize the learning experience 
                                        </h5>
                                    </div>
                                    <div className="col background-box">
                                        <h5 style={{marginBottom: 0}}>
                                            3. Provide users with the opportunity to explore other options
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Product */}
                    <div className="row space-sm text-left">
                        <div className="col-lg-8 mx-auto">
                            <h1 id="s5" className="section">Final Product</h1>
                            <a onClick={() => scrollToSection('s6')}>
                                <button className="proj-btn">
                                    Click here to read about our process!
                                </button>
                            </a>
                        </div>
                        <figure>
                            <img src={part11Gif} alt="Final Product gif" className="img-fluid space-sm"></img>
                            <img src={part12Gif} alt="Final Product gif" className="img-fluid space-sm"></img>
                            <img src={part13Gif} alt="Final Product gif" className="img-fluid space-sm"></img>
                            <img src={part2Gif} alt="Final Product gif" className="img-fluid space-sm"></img>
                            <img src={part3Gif} alt="Final Product gif" className="img-fluid space-sm"></img>
                        </figure>
                        
                    </div>

                    {/* Process */}
                    <div className="row space-sm text-left">
                        <div className="col-lg-8 mx-auto">
                            <h1 id="s6" className="section">Process</h1>
                        </div>
                    </div>
                    <div className="col-lg-8 mx-auto no-space-top text-left">
                        <h2>Wireframing & Testing</h2>

                        {/* Iteration 1 */}
                        <h3>Iteration 1</h3>
                        <div className="proj-body">
                            With the project’s goal in mind, I wireframed the user flow and mapped out how the information would interact with the backend and be displayed to the user.
                        </div>
                        <div className="proj-body">
                            Initially, the user was required to enter specific metadata for their song preference, to which we would generate relevant song recommendations that they could 
                            play with. 
                        </div>
                        <figure>
                            <img src={iter1Img} alt="Iteration 1 Image" className="img-fluid space-sm"></img>
                        </figure>
                        <div className="proj-body">
                            The overall user feedback was that entering several metadata variables was too tedious and they would prefer playing with a song of their choice.
                        </div>
                        <div className="row d-flex proj-body justify-center">
                            <div className="col-md-10 background-box">
                                <h5 style={{marginBottom: 0}}>
                                    ❌ 1. Incentivize users to learn a new language
                                </h5>
                            </div>
                            <div className="col-md-10 background-box">
                                <h5 style={{marginBottom: 0}}>
                                    ✅ 2. Personalize the learning experience 
                                </h5>
                            </div>
                            <div className="col-md-10 background-box">
                                <h5 style={{marginBottom: 0}}>
                                    ✅ 3. Provide users with the opportunity to explore other options
                                </h5>
                            </div>
                        </div>
                        <div className="proj-body">
                            Therefore, we reconfigured the user flow to simplify the setup process and get the user involved as soon as possible.
                        </div>

                        {/* Iteration 2 */}
                        <h3 className="space-sm">Iteration 2</h3>
                        <figure>
                            <img src={iter2Img} alt="Iteration 2 Image" className="img-fluid space-sm no-space-top"></img>
                        </figure>
                        <div className="proj-body">
                            With the updated user flow, the feedback showed that this process was more intuitive. We were able to maintain the 
                            recommendation feature by handling the metadata configuration under the hood based on the user’s song choice.
                        </div>
                        <div className="row d-flex proj-body justify-center">
                            <div className="col-md-10 background-box">
                                <h5 style={{marginBottom: 0}}>
                                    ✅ 1. Incentivize users to learn a new language
                                </h5>
                            </div>
                            <div className="col-md-10 background-box">
                                <h5 style={{marginBottom: 0}}>
                                    ✅ 2. Personalize the learning experience 
                                </h5>
                            </div>
                            <div className="col-md-10 background-box">
                                <h5 style={{marginBottom: 0}}>
                                    ✅ 3. Provide users with the opportunity to explore other options
                                </h5>
                            </div>
                        </div>
                        <h3 className="space-sm">Finalized Userflow</h3>
                        <figure>
                            <img src={lofiImg} alt="Final Lofi Image" className="img-fluid"></img>
                        </figure>
                    </div>

                    <div className="col-lg-8 mx-auto space-lg no-space-bottom text-left">
                        <h2>Technical Implementation & Features</h2>
                        <div className="space-sm">
                            <div className="proj-body">
                                Our web app is powered by a React/TypeScript/CSS front-end, a custom back-end that handles a variety of API interactions 
                                {' ('}Microsoft Azure AI Translator, Spotify API, Musixmatch API{')'}, and a Supabase database. Check out our {' '}
                                <a className="link" href="https://github.com/chen-charlene/SpotiDuo">Github</a>!
                            </div>
                            <div className="proj-body">
                                Below are some features of our web app that troubleshoot technical obstacles and streamline the user experience!
                            </div>
                        </div>
                        
                    </div>

                    {/* Feature 1 */}
                    <div className="row d-flex proj-body justify-center">
                       <div className="col-lg-8 text-left">
                            <h3>Feature 1: Spotify OAuth</h3>
                            <figure>
                                <img src={oauthGif} alt="Oauth gif" className="img-fluid space-sm"></img>
                            </figure>
                            <div className="row d-flex proj-body justify-center">
                                <div className="proj-body col-lg-10">
                                    <strong>- Enhanced Security:</strong> We chose Spotify's PKCE Flow for secure login, which avoids storing sensitive client secrets 
                                    and protects against unauthorized access.
                                </div>
                                <div className="proj-body col-lg-10">
                                    <strong>- Personalized Experience:</strong> Users log in to SpotiDuo with their Spotify account, 
                                    syncing their music preferences for tailored recommendations.
                                </div>
                                <div className="proj-body col-lg-10">
                                    <strong>- Persistent Login:</strong> By using cookies to store access tokens, users stay logged in and don't have to reauthenticate frequently.
                                </div>
                            </div>
                       </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-md text-left no-space-bottom">
                        <div className="row d-flex proj-body justify-center">
                            <div className="col-lg-8 text-left">
                                <h3>Feature 2: Multi-API Data Integration</h3>
                            </div>        
                        </div>
                    </div>
                    <div className="row d-flex proj-body justify-center">
                        <div className="col-md-3 text-center"><h4>Challenge:</h4></div>
                        <div className="col-md-6 text-left"><p>No single API provides all the necessary data, leading to gaps in the information available to users.</p>
                        </div>
                    </div>
                    <div className="row d-flex proj-body justify-center">
                        <div className="col-md-3 text-center"><h4>Solution:</h4></div>
                        <div className="col-md-6 text-left"><p>SpotiDuo integrates multiple APIs to overcome these shortcomings:
                            <ul className="proj-body">
                                <li>
                                    <strong>Musixmatch API</strong>: Retrieves song lyrics in LRC format.
                                </li>
                                <li>
                                    <strong>Microsoft Azure AI Translator</strong>: Translates lyrics into the user's native language
                                </li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex proj-body justify-center">
                        <div className="col-md-3 text-center"><h4>Outcome:</h4></div>
                        <div className="col-md-6 text-left"><p>By combining data from different APIs, SpotiDuo ensures users receive relevant, comprehensive 
                            information. This approach fills gaps left by individual APIs, enhancing the overall user experience.</p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-md text-left no-space-bottom">
                        <div className="row d-flex proj-body justify-center">
                            <div className="col-lg-8 text-left">
                                <h3>Feature 3: Levenshtein Scoring System</h3>
                            </div>        
                        </div>
                    </div>
                    <div className="row d-flex proj-body justify-center">
                        <div className="col-md-3 text-center"><h4>Challenge:</h4></div>
                        <div className="col-md-6 text-left"><p> Initially, users had to get every character right to earn points, which was too strict for learners.</p>
                        </div>
                    </div>
                    <div className="row d-flex proj-body justify-center">
                        <div className="col-md-3 text-center"><h4>Solution:</h4></div>
                        <div className="col-md-6 text-left"><p>Implemented the Levenshtein algorithm, which measures the distance between two sequences, to award partial credit for near-correct answers.</p>
                        </div>
                    </div>
                    <div className="row d-flex proj-body justify-center">
                        <div className="col-md-3 text-center"><h4>Outcome:</h4></div>
                        <div className="col-md-6 text-left"><p>This approach provides a more forgiving scoring system, enhancing the learning experience by recognizing and rewarding near-correct answers.</p>
                        </div>
                    </div>

                    {/* Decorative Image */}
                    <figure>
                        <img src={decoImg} alt="Decorative image" className="img-fluid space-md"></img>
                    </figure>


                    {/* Next Steps */}
                    <div className="row space-sm text-left">
                        <div className="col-lg-8 mx-auto">
                            <h1 id="s7" className="section">Next Steps</h1>
                        </div>
                    </div>
                    
                    <div className="row text-left justify-center">
                        <div className="col-lg-8">
                            <h4>Currently Working on...</h4>
                        </div>
                        <ul className="proj-body col-lg-7">
                            <li>Implementing a global leaderboard</li>
                            <li>Implementing a multi-player game mode</li>
                            <figure>
                                <img src={multiImg} alt="multi player sketch" className="img-fluid space-top-sm"></img>
                            </figure>
                        </ul>
                    </div>

                    <div className="row text-left justify-center">
                        <div className="col-lg-8">
                            <h4>Takeaways...</h4>
                        </div>
                        <ul className="proj-body col-lg-7">
                            <li className="proj-body"><strong>Design with the User in Mind! </strong>
                                <ul>
                                    <li>Prioritizing user experience ensures the application is intuitive, engaging, and meets user needs effectively.</li>
                                </ul>
                            </li>
                            <li className="proj-body"><strong>Define Scope and Set Targets</strong>
                                <ul>
                                    <li>Drawing out the project scope (MVP) and setting clear targets help maintain focus and direction, ensuring efficient progress and resource management.</li>
                                </ul>
                            </li>
                            <li className="proj-body"><strong>Communication is Key</strong>
                                <ul>
                                    <li><strong>Frontend-Backend Coordination:</strong> Seamless communication between frontend and backend components is essential for data accuracy and real-time updates.</li>
                                    <li><strong>Team Collaboration:</strong> Clear and consistent communication within the team ensures everyone is aligned, facilitating smoother development and problem-solving processes.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
