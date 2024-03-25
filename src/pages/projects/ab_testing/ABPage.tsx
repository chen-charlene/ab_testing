import React from 'react'
import './ABPage.css';
import '../styles.css'


export default function ABPage() {
  return (
    <body className="abtesting-page">
    <div className="wide-wrapper">
        <div className="homepage-section">
        </div>
        <div className="header-section">
            <div className="header-container w-container">
                <h1 className="heading hn">MEDx A/B Testing</h1>
            </div>
        </div>

        <div className="section">
            <div className="container w-container" style={{paddingBottom:0}}>
                <div className="title-container"><h3>INTRODUCTION</h3></div>
                <div className="body-text-container">
                    <h2>In an attempt to evaluate the effectiveness of MEDx's appointment management page, an A/B test is 
                        conducted to advise potential visual updates in hopes of achieving a smoother user experience when 
                        navigating the page.
                    </h2>
                </div>
                <div className="table-container">
                    <div className="table-element-container">
                        <div className="table-element-heading">
                            <h3>MY ROLE</h3>
                        </div>
                        <div className="table-element-body">
                            <h4>Responsible for proposing and implementing new designs & conducting A/B testing.</h4>
                        </div>
                    </div>
                    <div className="table-element-container" style={{textAlign:'right'}}>
                        <div className="table-element-heading">
                            <h3>TIMELINE</h3>
                        </div>
                        <div className="table-element-body">
                            <h4>March 2024</h4>
                        </div>
                    </div>
                    <div className="table-element-container">
                        
                    </div>
                </div>
            </div>
        </div>
    
        <div className="section">
            <div className="container w-container">
                <div className="title-container"><h3><b>THE DESIGNS:</b></h3></div>
                <div className="ab-image-container padding" style={{paddingLeft:0, paddingRight: 0}}>
                    <img src={require('.//images/version-A.png')} alt="Version A image"/>
                    <img src={require('.//images/version-B.png')} alt="Version B image"/>
                </div>
                <div className="title-container"><h3><b>MODIFIED FEATURES</b></h3></div>
                <div className="body-text-container">
                    <h2>
                        <li>
                            More distinguishable styling on the appointment buttons
                        </li>
                        <li>
                            Added a background colour on the dates
                        </li>
                        <li>
                            Black and bolded font on the “name” and “location”
                        </li>
                    </h2>
                </div>
                <br/>
                <div className="body-text-container" style={{backgroundColor:'#D8E8FD', paddingLeft: '10px', paddingRight:'10px', borderRadius:'10px'}}>
                    <h2><b>User Task:</b>
                        <br/>
                        Schedule an appointment with Adam Ng, MD at Morristown Medical Center on April 23, 2024
                    </h2>
                </div>
                <br/>
                <div className="title-container"><h3 style={{color: 'black'}}><b>HYPOTHESIS FOR EACH METRIC</b></h3></div>


                <div className="table-container">
                    <div className="table-element-container full-width">
                        
                        <div className="table-subcomponent">
                            <div className="accent-bar"></div>
                            <div>
                                <div className="table-element-heading">
                                    <h3 style={{color: 'black'}}><b>❌ Misclick Rate</b></h3>
                                    <h3><b>Definition:</b>the frequency with which users click something else on the page before finding the correct button for the task</h3>
                                </div>
                                <div className="grey-table-container">
                                    <div className="grey-box">
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Null Hypothesis</b></h3></div>
                                        <div className="table-element-body"><h3>The misclick rate in version A is the same as the misclick rate in version B</h3></div>
                                    </div>
                                    <div className="grey-box">
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Alternative Hypothesis</b></h3></div>
                                        <div className="table-element-body"><h3>The misclick rate in version B is lower than the misclick rate in version A because the 
                                            “See Appointment” & “Schedule Appointment” buttons are different colours.</h3></div>
                                    </div>
                                </div>
                                <div className="table-element-heading">
                                    <h3><b>Prediction:</b> We will end up rejecting the null hypothesis because version B’s buttons are more visually accessible and easier to differentiate, leading to lower misclicks.</h3>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="table-subcomponent">
                            <div className="accent-bar"></div>
                            <div>
                                <div className="table-element-heading">
                                    <h3 style={{color: 'black'}}><b>⏳ Time on Page</b></h3>
                                    <h3><b>Definition:</b>the time spent on the webpage for each user group before completing the task</h3>
                                </div>
                                <div className="grey-table-container">
                                    <div className="grey-box">
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Null Hypothesis</b></h3></div>
                                        <div className="table-element-body"><h3>The time spent on version A is the same as the time spent on version B</h3></div>
                                    </div>
                                    <div className="grey-box">
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Alternative Hypothesis</b></h3></div>
                                        <div className="table-element-body"><h3>The time spent on version B is lower than the time spent on version 
                                            A because the additional colour blocks help highlight different important information, leading to faster navigation times.</h3></div>
                                    </div>
                                </div>
                                <div className="table-element-heading">
                                    <h3><b>Prediction:</b> We will end up rejecting the null hypothesis because version B’s layout is more differentiable, allowing the user to understand and access necessary information faster. </h3>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="table-subcomponent">
                            <div className="accent-bar"></div>
                            <div>
                                <div className="table-element-heading">
                                    <h3 style={{color: 'black'}}><b>👆🏻 Number of Clicks</b></h3>
                                    <h3><b>Definition:</b>Total number of clicks made by each user group</h3>
                                </div>
                                <div className="grey-table-container">
                                    <div className="grey-box">
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Null Hypothesis</b></h3></div>
                                        <div className="table-element-body"><h3>The number of clicks in version A is the same as the number of clicks in version B</h3></div>
                                    </div>
                                    <div className="grey-box">
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Alternative Hypothesis</b></h3></div>
                                        <div className="table-element-body"><h3>The number of clicks in version B is lower than the number of clicks in version A because the buttons are highlighted and differentiated, 
                                            allowing the user to complete their task with minimal clicks.</h3></div>
                                    </div>
                                </div>
                                <div className="table-element-heading">
                                    <h3><b>Prediction:</b> We will end up rejecting the null hypothesis because version B’s “Schedule Appointment” button is more visible, allowing the user to target it more quickly without having to click around to figure out the navigations.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
        <div className="section">
            <div className="container w-container" style={{paddingTop: 0}}>
                <div className="title-container"><h3><b>Running Statistical Tests on the data</b>
                    <br/>
                    Example CSV data:
                </h3></div>
                <div className="body-text-container" style={{backgroundColor:'rgb(221, 221, 221)', paddingLeft: '15%', paddingRight:'10px', borderRadius:'10px'}} >
                    <h3 style={{fontSize: '18px'}}>
                        {'{'}
                        <br/> 
                        <div style={{marginLeft: '15px'}}>
                            <b>time_on_page</b>: total time in milliseconds;
                            <br/>
                            <b>num_clicks</b>: the number of times user clicked on the screen;
                            <br/>
                            <b>did_misclick</b>: boolean flag for user clicking a button external to the task;
                        </div>
                        {'}'}
                    </h3>
                </div>

                <div className="table-container">
                    <div className="table-element-container full-width">

                        <div className="table-subcomponent">
                            <div className="accent-bar"></div>
                            <div style={{padding:'10px'}}>
                                <div className="table-element-heading">
                                    <h3 style={{color: 'black'}}><b>❌ Misclick Rate</b></h3>
                                    <h3>A Chi-Square test was conducted on the dataset as we are evaluating categorical data. From the data, 
                                        version A had 7 misclicks out of 34 and version B had 1 misclick out of 28. After performing a Chi-Square test, the resulting values are:</h3>
                                </div>
                                <div className="grey-box-full">
                                    <div>Degrees of Freedom: 1</div>
                                    <div>Chi-square (χ2): 3.956</div>
                                    <div>p-value: 0.0466</div>
                                </div>
                                <div className="table-element-body"><h3>
                                    From the values, a high chi-square value of 3.956 indicates that there is a discrepancy between the observed and expected values. 
                                    Since the expected values are calculated under the assumption of the null hypothesis, a high discrepancy indicates that the dataset does not align with the null hypothesis. 
                                    A p-value of 0.0466 (which is lower than 0.05) suggest strong evidence against the null hypothesis. Therefore, with the values above, 
                                    we will <b>reject the null hypothesis</b> that the misclick rate is the same for versions A and B. </h3>
                                </div>
                                <div className="table-element-heading">
                                    <h3><b>Summary Statistics</b></h3>
                                </div>
                                <div className="grey-table-container" style={{justifyContent:'space-evenly'}}>
                                    <div className="AB-box" style={{backgroundColor: '#D8E8FD'}}>
                                        <div className="table-element-heading"><h3 style={{textAlign:'center'}}><b>Version A</b></h3></div>
                                        <div className="table-element-body">
                                        <h3>
                                            # of misclicks: 7
                                            <br/>
                                            # of correct clicks: 27
                                            <br/>
                                            Mean: 0.259
                                            <br/>
                                            Mode: FALSE
                                        </h3></div>
                                    </div>
                                    <div className="AB-box" style={{backgroundColor: '#a0c8eb'}}>
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Version B</b></h3></div>
                                        <div className="table-element-body"><h3>
                                            # of misclicks: 1
                                            <br/>
                                            # of correct clicks: 27
                                            <br/>
                                            Mean: 0.143
                                            <br/>
                                            Mode: FALSE
                                        </h3></div>
                                    </div>
                                </div>
                                <div className="table-element-heading">
                                    <h3>From the summary statistics, version A has an overall higher misclick rate than version B, 
                                        which could suggest that the changes made to version B helped reduce the misclick rate. 
                                        However, version A had a large sample size (34) whereas version B only had 28. This means that although the data suggests a lower misclick rate in B, 
                                        it is still insufficient evidence to conclude that the difference is due to the visual changes. </h3>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="table-subcomponent">
                            <div className="accent-bar"></div>
                            <div style={{padding: '10px'}}>
                                <div className="table-element-heading">
                                    <h3 style={{color: 'black'}}><b>⏳ Time on Page</b></h3>
                                    <h3>A one-tailed T test was conducted on the dataset as we are evaluating the data with a directional hypothesis in mind (time spent on B is lower than A). 
                                        After performing the T-test, the resulting values are:</h3>
                                </div>
                                <div className="grey-box-full">
                                    <div>Degrees of Freedom: 59.973</div>
                                    <div>T-score (A-B) : 0.971</div>
                                    <div>p-value: 0.832</div>
                                </div>
                                <div className="table-element-body"><h3>
                                    From the values, the t-score (which measures the mean between A & B differ relative to the variation) is 0.971, which indicates that the mean time spent on A is 
                                    0.971 standard errors greater than the mean time spent on B. The p-value calculated from the t-score is 0.832. Since our hypothesis is that time spent on B is 
                                    less than A, our p-value relative to our hypothesis would be 0.163. Since the p-value is not less than the significance value (0.05), we 
                                    <b>fail to reject the null hypothesis</b> since the discrepancy is statistically insignificant.</h3>
                                </div>
                                <div className="table-element-heading">
                                    <h3><b>Summary Statistics</b></h3>
                                </div>
                                <div className="grey-table-container" style={{justifyContent: 'space-evenly'}}>
                                    <div className="AB-box" style={{backgroundColor: '#D8E8FD'}}>
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Version A</b></h3></div>
                                        <div className="table-element-body"><h3>
                                            Average: 12860.44
                                            <br/>
                                            Variance: 140609949
                                            <br/>
                                            Median: 8526.5
                                        </h3></div>
                                    </div>
                                    <div className="AB-box" style={{backgroundColor:'#a0c8eb'}}>
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Version B</b></h3></div>
                                        <div className="table-element-body"><h3>
                                            Average: 10171.43
                                            <br/>
                                            Variance: 98858865.5
                                            <br/>
                                            Median: 7982.5
                                        </h3></div>
                                    </div>
                                </div>
                                <div className="table-element-heading">
                                    <h3>From the summary statistics, version A has higher statistics across all values compared to version B, indicating that the overall time spent on page for
                                         version A is higher than B. However, since we failed to reject the null hypothesis, the different is not statistically significant enough to indicate 
                                         that the time spent on version B is less than A.</h3>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="table-subcomponent">
                            <div className="accent-bar"></div>
                            <div style={{padding: '10px'}}>
                                <div className="table-element-heading">
                                    <h3 style={{color: 'black'}}><b>👆🏻 Number of Clicks</b></h3>
                                    <h3>A one-tailed T test was conducted on the dataset as we are evaluating the data with a directional hypothesis in mind (number of clicks in B is less than A). 
                                        After performing the T-test, the resulting values are:</h3>
                                </div>
                                <div className="grey-box-full">
                                    <div>Degrees of Freedom: 40.932</div>
                                    <div>T-score (A-B) : 1.266</div>
                                    <div>p-value: 0.894</div>
                                </div>
                                <div className="table-element-body"><h3>
                                    From the values, the t-score is 1.266, which indicates that the number of clicks in A is 1.266 standard errors greater than the number of clicks in B. 
                                    The p-value calculated from the t-score is 0.894. Since our hypothesis is that the number of clicks in B is less than A, our p-value relative to our 
                                    hypothesis would be 0.106. Since the p-value is not less than the significance value (0.05), 
                                    <b>we fail to reject the null hypothesis</b> since the discrepancy is statistically insignificant.</h3>
                                </div>
                                <div className="table-element-heading">
                                    <h3><b>Summary Statistics</b></h3>
                                </div>
                                <div className="grey-table-container" style={{justifyContent: 'space-evenly'}}>
                                    <div className="AB-box" style={{backgroundColor: '#D8E8FD'}}>
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Version A</b></h3></div>
                                        <div className="table-element-body"><h3>
                                            Average: 3.088
                                            <br/>
                                            Variance: 8.749
                                            <br/>
                                            Median: 2
                                            <br/>
                                            Mode: 2
                                        </h3></div>
                                    </div>
                                    <div className="AB-box" style={{backgroundColor: '#a0c8eb'}}>
                                        <div className="table-element-heading"><h3 style={{textAlign: 'center'}}><b>Version B</b></h3></div>
                                        <div className="table-element-body"><h3>
                                            Average: 2.407
                                            <br/>
                                            Variance: 0.866
                                            <br/>
                                            Median: 2
                                            <br/>
                                            Mode: 2
                                        </h3></div>
                                    </div>
                                </div>
                                <div className="table-element-heading">
                                    <h3>From the summary statistics, version A has a higher average compared to version B, meaning that on average, the users clicked more times in A than B before completing the task. 
                                        From the variance values, we can also see that the number of clicks deviated less from the average in version B, indicating that it was more common for users to complete the 
                                        task with minimal clicks in version B.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container w-container">
                <div className="title-container"><h3>CONCLUSION</h3></div>
                <div className="body-text-container">
                    <h2>Out of the 3 metrics, we reject the null hypothesis in misclick rate and fail to reject the null hypothesis
                        in time spent on page & number of clicks. Therefore, the modifications made to version B have demonstrated to 
                        be partially successful in improving the user experience. However, more sufficient evidence would be needed to
                        support the alternative hypotheses.
                    </h2>
                </div>
            </div>
        </div>
    </div>

</body>
  )
}
