

const Footer = () => {
    return (
        <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-4 col-sm-2 offset-1">
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-secondary">Menu</a></li>
                        <li><a href="about.html" class="text-secondary">About</a></li>
                        <li><a href="reservation.html" class="text-secondary">Reservations</a></li>
                        <li><a href="careers.html" class="text-secondary">Careers</a></li>
                        <li><a href="#" class="text-secondary">Contact</a></li>
                    </ul>
                </div>
                <div class="col-6 col-sm-5 text-center">
                    <h5>Social</h5>
                    <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
                    <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
                    <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                    <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                </div>
                <div class="col-sm-4 text-center">
                    <a role="button" class="btn btn-link text-secondary" href="tel:+15125551234"><i class="fa fa-phone"></i> 1-512-555-1234</a><br />
                    <a role="button" class="btn btn-link text-secondary" href="mailto:mostaryasmaidcafe.co"><i class="fa fa-envelope-o"></i> mostaryasmaidcafe.co</a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;