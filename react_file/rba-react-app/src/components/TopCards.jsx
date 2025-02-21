import certificateImg from "../assets/images/pages/ic-certificate.png"

const TopCards = () => {
  return (
    <div>
     <section className="academy-top-cards">
            <div className="container mt-96 ">
                <div className="row">
                    <div className="col-md-5 offset-md-1 d-flex justify-content-between">
                        <a className="card-link-internal showTabPaths " href="#pills-job-role-paths-tab">
                            <div
                                className="card rounded-lg hover hover-up-10 justify-content-between flex-grow-1 primary-background">
                                <img className="card-img-top mx-auto hover hover-scale-110" alt="Master new skills"
                                    src={certificateImg} />
                                <div className="card-body text-center flex-grow-0 pb-72">
                                    <h2 className="card-title color-white">Get certified with RBA
                                    </h2>
                                    <p className="card-text font-size-18 px-xxl-40 mb-24 text-blue">
                                        Skyrocket your resume. Land your dream job. Stand out from the competition.</p>
                                    <p className="card-link">View Job Role Paths</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-5 d-flex justify-content-between">
                        <a className="card-link-internal showTabPaths" href="#pills-skill-paths-tab">
                            <div
                                className="card rounded-lg hover hover-up-10 justify-content-between flex-grow-1 primary-background">
                                <img className="card-img-top mx-auto hover hover-scale-110" alt="Master new skills"
                                    src="assets/images/pages/ic-skills.png" />
                                <div className="card-body text-center flex-grow-0 pb-72">
                                    <h2 className="card-title color-white">Master new skills
                                    </h2>
                                    <p className="card-text font-size-18 px-xxl-40 mb-24 text-blue">
                                        Learn popular IT, Tech, offensive and defensive security techniques with skill
                                        paths.</p>
                                    <p className="card-link">View Skill Paths</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default TopCards 