import bird from '@images/bird.svg'
import iconMail from '@images/icon-mail.svg'
import iconAppStore from '@images/icon-appstore.svg'
import iconGooglePlay from '@images/icon-googleplay.svg'
import iconTwitter from '@images/icon-twitter.svg'
import iconYoutube from '@images/icon-youtube.svg'
import iconInstagram from '@images/icon-instagram.svg'
import iconFacebook from '@images/icon-facebook.svg'
import logo from '@images/logo2.svg'
import { NavLink } from 'react-router'
import { t } from 'i18next'

export default function () {
    return (
        <footer>
            <img src={bird} alt="" width="100%" />
            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-3">
                        <p>Regions</p>
                        <ul>
                            <li>Northern Vietnam</li>
                            <li>Central Vietnam</li>
                            <li>Southern Vietnam</li>
                        </ul>
                    </div>
                    <div className="col-span-3">
                        <p>Getting to Vietnam</p>
                        <ul>
                            <li>Passports & Visa</li>
                            <li>Accommodation</li>
                            <li>Itineraries</li>
                            <li>Tour packages</li>
                            <li>Travel Agency</li>
                            <li>App & Tools</li>
                            <li>Vietnam Calendar</li>
                            <li>Traditional Festivals</li>
                        </ul>
                    </div>
                    <div className="col-span-3">
                        <p>Experiences</p>
                        <ul>
                            <li>Cultural Heritage</li>
                            <li>Cuisine</li>
                            <li>Nature & Adventure</li>
                            <li>Sustainable Travel</li>
                            <li>City Vibes</li>
                            <li>Wellness Escapes</li>
                            <li>Romantic Getaways</li>
                            <li>Local Life</li>
                        </ul>
                    </div>
                    <div className="col-span-3">
                        <p>Discover & Navigate</p>
                        <ul>
                            <li>Stories & Inspiration</li>
                            <li>Map</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mb-[60px]">
                    <div className="w-auto">
                        <p>Don't Miss Any Updates</p>
                        <button className="rounded-[80px] py-[15px] px-[20px] bg-[#007BFF] text-white flex">
                            <img className="pr-[10px]" src={iconMail} alt="" />
                            Inscription newsletter
                        </button>
                    </div>
                    <div className="w-[400px]">
                        <p>Download our apps</p>
                        <div className="flex justify-between">
                            <img src={iconGooglePlay} alt="Google play" />
                            <img src={iconAppStore} alt="App Store" />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="flex justify-between mt-[20px] mb-[50px]">
                    <div className="flex items-center">
                        <img src={logo} alt="" width="102px" className="mr-[30px]" />
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-[20px]">
                        <a href=""><img src={iconTwitter} alt="Twitter" width="24px" /></a>
                        <a href=""><img src={iconInstagram} alt="Instagram" width="24px" /></a>
                        <a href=""><img src={iconYoutube} alt="Youtube" width="24px" /></a>
                        <a href=""><img src={iconFacebook} alt="Facebook" width="24px" /></a>
                    </div>
                </div>
            </div>
            <div className="bg-[#484C52] pt-[32px] pb-[25px]">
                <div className="container mx-auto flex justify-between text-white">
                    <p>© 2025 Lorem ipsum | All rights reserved</p>
                    <ul className="flex justify-between gap-[15px]">
                        <li>
                            <NavLink to="/">
                                {t('Terms of Use')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                {t('Privacy Policy')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                {t('Cookie Policy')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                {t('Sitemap')}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};
