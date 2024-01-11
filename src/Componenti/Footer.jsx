import 'bootstrap/dist/css/bootstrap.min.css';
import "../fileCss/Footer.css"


export default function Footer () {
    return (
            <>
                <footer className='bg-dark text-secondary'>
                <div className="row text-center mt-5">
                <div className="col-6 offset-3">
                    <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"
                    >
                    <div className="col">
                        <div className="row ">
                        <div className="col col-12 footer-links mt-3">
                            <p>
                            <a href="#" alt="footer link">Audio and Subtitles</a>
                            </p>
                            <p>
                            <a href="#" alt="footer link">Media Center</a>
                            </p>
                            <p>
                            <a href="#" alt="footer link">Privacy</a>
                            </p>
                            <p>
                            <a href="#" alt="footer link">Contact us</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div >
                        <div>
                        <div className='mt-3' >
                            <p>
                            <a href="#" alt="footer link">Audio Description</a>
                            </p>
                            <p>
                            <a href="#" alt="footer link">Investor Relations</a>
                            </p>
                            <p>
                            <a href="#" alt="footer link">Legal Notices</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div >
                        <div >
                        <div className='mt-3' >
                            <p>
                            <a href="#" alt="footer link">Help Center</a>
                            </p>
                            <p>
                            <a href="#" alt="footer link">Jobs</a>
                            </p>
                            <p>
                            <a href="#" alt="footer link">Cookie Preferences</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div >
                        <div >
                        <div className='mt-3'>
                            <p>
                            <a href="#" alt="footer link">Gift Cards</a>
                            </p>
                            <p>
                            <a href="#" alt="footer link">Terms of Use</a>
                            </p>
                            <p>
                            <a href="#" alt="footer link">Corporate Information</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div >
                    <div className="mb-2">
                        <button
                        type="button"
                        className="btn btn-sm bg-secondary text-dark rounded-0 mt-3"
                        >
                        Service Code
                        </button>
                    </div>
                    </div>
                    <div >
                    <div className=" mb-2 mt-2 ">
                        © 1997-2022 Netflix, Inc.
                    </div>
                    </div>
                </div>
                </div>
            </footer>
            </>
    )
}