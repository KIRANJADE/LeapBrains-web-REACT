import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Index extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="full-height">
                    <div className="vertical-center height-75">
                        <div className="container full-height">
                            <div className="Templates_2 text-center role">
                                <div className="row">                                    
                                    <div class="row justify-content-center">
                                        <div class="col-sm-5 col-12">
                                            <h1 className="text-center">Do you want to connect your parent?</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-343 mt-3">
                                    <input
                                        type="email"
                                        className="goals__form__inputs"
                                        name="Email"
                                        placeholder="Email"
                                    />
                                    <div className="text-center" >
                                        <Link to="/Dashboard">
                                            <Button className="btn cta--rounded cta-primary mb-4" disabled={this.state.loading} >
                                                {this.state.loading && (
                                                    <span className="spinner-border spinner-border-sm"></span>
                                                )}
                                                <span>Send Invite</span>
                                            </Button>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="text-center">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5441 10.456C12.7249 9.6372 11.6142 9.17725 10.4561 9.17725C9.2979 9.17725 8.18716 9.6372 7.36805 10.456L4.27905 13.544C3.45993 14.3631 2.99976 15.474 2.99976 16.6325C2.99976 17.7909 3.45993 18.9018 4.27905 19.721C5.09818 20.5401 6.20914 21.0003 7.36755 21.0003C8.52597 21.0003 9.63693 20.5401 10.4561 19.721L12.0001 18.177" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.4561 13.5438C11.2752 14.3626 12.3859 14.8225 13.5441 14.8225C14.7022 14.8225 15.8129 14.3626 16.6321 13.5438L19.7211 10.4558C20.5402 9.63669 21.0004 8.52572 21.0004 7.36731C21.0004 6.2089 20.5402 5.09793 19.7211 4.27881C18.9019 3.45969 17.791 2.99951 16.6326 2.99951C15.4741 2.99951 14.3632 3.45969 13.5441 4.27881L12.0001 5.82281" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Copy invite link
                                        </p>
                                    </div>
                                    <p className="or"><span>or</span></p>
                                    <ul className="list-inlibeblock text-center login_social-icon">
                                        <li>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="48" height="48" rx="10" fill="#00880E" />
                                                <g clipPath="url(#clip0_2_1408)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M29.415 26.382C29.117 26.233 27.656 25.515 27.384 25.415C27.112 25.316 26.914 25.267 26.715 25.565C26.517 25.861 25.948 26.531 25.775 26.729C25.601 26.928 25.428 26.952 25.131 26.804C24.834 26.654 23.876 26.341 22.741 25.329C21.858 24.541 21.261 23.568 21.088 23.27C20.915 22.973 21.069 22.812 21.218 22.664C21.352 22.531 21.515 22.317 21.664 22.144C21.813 21.97 21.862 21.846 21.961 21.647C22.061 21.449 22.011 21.276 21.936 21.127C21.862 20.978 21.268 19.515 21.02 18.92C20.779 18.341 20.534 18.42 20.352 18.41C20.178 18.402 19.98 18.4 19.782 18.4C19.584 18.4 19.262 18.474 18.99 18.772C18.717 19.069 17.95 19.788 17.95 21.251C17.95 22.713 19.014 24.126 19.163 24.325C19.312 24.523 21.258 27.525 24.239 28.812C24.949 29.118 25.502 29.301 25.933 29.437C26.645 29.664 27.293 29.632 27.805 29.555C28.375 29.47 29.563 28.836 29.811 28.142C30.058 27.448 30.058 26.853 29.984 26.729C29.91 26.605 29.712 26.531 29.414 26.382H29.415ZM23.993 33.785H23.989C22.2184 33.7854 20.4804 33.3094 18.957 32.407L18.597 32.193L14.855 33.175L15.854 29.527L15.619 29.153C14.6291 27.5774 14.1053 25.7538 14.108 23.893C14.11 18.443 18.544 14.009 23.997 14.009C26.637 14.009 29.119 15.039 30.985 16.907C31.9054 17.8236 32.6349 18.9136 33.1313 20.1139C33.6277 21.3143 33.8811 22.6011 33.877 23.9C33.875 29.35 29.441 33.785 23.993 33.785ZM32.405 15.488C31.3032 14.379 29.9922 13.4996 28.5481 12.9008C27.1039 12.3021 25.5553 11.9959 23.992 12C17.438 12 12.102 17.335 12.1 23.892C12.099 25.988 12.646 28.034 13.687 29.837L12 36L18.304 34.346C20.0479 35.2962 22.0021 35.794 23.988 35.794H23.993C30.547 35.794 35.883 30.459 35.885 23.901C35.8898 22.3383 35.5848 20.7901 34.9874 19.3461C34.3901 17.902 33.5124 16.5907 32.405 15.488Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_1408">
                                                        <rect width="24" height="24" fill="white" transform="translate(12 12)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="48" height="48" rx="10" fill="#003FBE" />
                                                <path d="M12 23.64C12 16.9515 17.2395 12 24 12C30.7605 12 36 16.9515 36 23.64C36 30.3285 30.7605 35.28 24 35.28C22.785 35.28 21.621 35.1195 20.526 34.8195C20.3137 34.7604 20.0875 34.7763 19.8855 34.8645L17.5035 35.9175C17.3596 35.981 17.2024 36.0081 17.0456 35.9966C16.8888 35.985 16.7372 35.9351 16.6042 35.8513C16.4711 35.7675 16.3608 35.6522 16.2827 35.5157C16.2046 35.3792 16.1613 35.2257 16.1565 35.0685L16.0905 32.934C16.0859 32.8041 16.055 32.6764 15.9996 32.5588C15.9441 32.4413 15.8653 32.3362 15.768 32.25C13.434 30.162 12 27.138 12 23.64ZM20.319 21.4515L16.794 27.0435C16.4565 27.5805 17.115 28.185 17.6205 27.8025L21.408 24.9285C21.5326 24.8339 21.6846 24.7824 21.841 24.7819C21.9974 24.7813 22.1498 24.8317 22.275 24.9255L25.0785 27.0285C25.2774 27.1777 25.5051 27.284 25.7471 27.3408C25.9892 27.3976 26.2404 27.4037 26.4849 27.3586C26.7294 27.3135 26.9619 27.2182 27.1678 27.0788C27.3736 26.9394 27.5484 26.7588 27.681 26.5485L31.206 20.9565C31.545 20.4195 30.885 19.815 30.3795 20.1975L26.592 23.0715C26.4674 23.1661 26.3154 23.2176 26.159 23.2181C26.0026 23.2187 25.8502 23.1683 25.725 23.0745L22.9215 20.97C22.7226 20.8208 22.4949 20.7145 22.2529 20.6577C22.0108 20.6009 21.7596 20.5948 21.5151 20.6399C21.2706 20.685 21.0381 20.7803 20.8322 20.9197C20.6264 21.0591 20.4516 21.2397 20.319 21.45V21.4515Z" fill="#FBFBFB" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="48" height="48" rx="10" fill="#3E6DCC" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M36 24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C30.627 12 36 17.373 36 24ZM24.43 20.859C23.263 21.344 20.93 22.349 17.432 23.873C16.864 24.099 16.566 24.32 16.539 24.536C16.493 24.902 16.951 25.046 17.573 25.241C17.658 25.268 17.746 25.295 17.836 25.325C18.449 25.524 19.273 25.757 19.701 25.766C20.09 25.774 20.524 25.614 21.003 25.286C24.271 23.079 25.958 21.964 26.064 21.94C26.139 21.923 26.243 21.901 26.313 21.964C26.383 22.026 26.376 22.144 26.369 22.176C26.323 22.369 24.529 24.038 23.599 24.902C23.309 25.171 23.104 25.362 23.062 25.406C22.968 25.503 22.872 25.596 22.78 25.685C22.21 26.233 21.784 26.645 22.804 27.317C23.294 27.64 23.686 27.907 24.077 28.173C24.504 28.464 24.93 28.754 25.482 29.116C25.622 29.208 25.756 29.303 25.887 29.396C26.384 29.751 26.831 30.069 27.383 30.019C27.703 29.989 28.035 29.688 28.203 28.789C28.6 26.663 29.382 22.059 29.563 20.161C29.574 20.0034 29.5673 19.8451 29.543 19.689C29.5285 19.5629 29.4671 19.4469 29.371 19.364C29.228 19.247 29.006 19.222 28.906 19.224C28.455 19.232 27.763 19.473 24.43 20.859Z" fill="white" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="footer">
                                <div className="row m-0">
                                    <div className="footer__left col-md-4 col-sm-4 col-4 text-center p-0">
                                        <p>
                                            <Link to="/Newprofile" className="footer__left__cta">
                                                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.80474 0.195262C5.54439 -0.0650874 5.12228 -0.0650874 4.86193 0.195262L0.195262 4.86193C-0.0650873 5.12228 -0.0650873 5.54439 0.195262 5.80474L4.86193 10.4714C5.12228 10.7318 5.54439 10.7318 5.80474 10.4714C6.06509 10.2111 6.06509 9.78894 5.80474 9.52859L1.60948 5.33333L5.80474 1.13807C6.06509 0.877722 6.06509 0.455612 5.80474 0.195262Z" fill="#1B1C1E" />
                                                </svg>
                                                <span>Go back</span>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="footer__center col-md-4 col-sm-4 col-4 text-center">
                                        <p>4 out of 5 steps</p>
                                    </div>
                                    <div className="footer__right col-md-4 col-sm-4 col-4 text-center">
                                        <Link className="footer__cta" to="/Plans">Next step</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default Index;