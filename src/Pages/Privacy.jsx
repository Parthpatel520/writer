import React from 'react'
import Layout from '../components/Layout'

export default function Privacy() {
    return (
        <Layout>
            <section className='pt-[50px] lg:pt-[120px] pb-[60px] lg:pb-[120px]'>
                <div className='container'>
                    <div className="max-w-[1345px] w-full mx-auto flex flex-col gap-[40px] md:gap-[85px] lg:gap-[129px] items-start">

                        {/* Title */}
                        <div className='w-full flex flex-col gap-4 md:gap-6'>
                            <p className='text-[28px] sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[118%] text-[#020023] font-[Raleway]'>
                                Privacy & Conditions
                            </p>
                            <p className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70'>
                                29 April 2025
                            </p>
                        </div>
                        {/* Introduction */}
                        <div className='max-w-[880px] w-full font-[Raleway]'>
                            <p className='mb-3 text-[35px] sm:text-[40px]'>1. Introduction</p>
                            <p className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70'>
                                Welcome to [Your Website Name] ("Company", "we", "our", "us")!
                                We are committed to protecting your personal information and your right to privacy. 
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                                when you visit our website [https://yourwebsitename.com] and/or purchase digital products 
                                (such as website themes built with JAMstack, React, Vue, and other frameworks).
                            </p>
                        </div>
                        {/* Information We Collect */}
                        <div className='max-w-[880px] w-full font-[Raleway]'>
                            <p className='mb-3 text-[35px] sm:text-[40px]'>2. Information We Collect</p>
                            <p className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70'>
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70 list-disc list-inside pl-4 pb-8 mt-3 space-y-2'>
                                <li>Purchase a product</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Fill out a contact form</li>
                                <li>Create an account</li>
                            </ul>
                            <p className='text-[18px] sm:text-[20px]'>This information may include:</p>
                             <ul className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70 list-disc list-inside pl-4 pb-8 mt-3 space-y-2'>
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Billing information (via third-party payment processors)</li>
                                <li>Company name (if applicable)</li>
                            </ul>
                            <p className='text-[18px] sm:text-[20px]'>We also automatically collect certain information such as:</p>
                             <ul className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70 list-disc list-inside pl-4 mt-3 space-y-2'>
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Device type</li>
                                <li>Pages you visited</li>
                                <li>Referring URLs</li>
                            </ul>
                        </div>
                         <div className='max-w-[880px] w-full font-[Raleway]'>
                            <p className='mb-3 text-[35px] sm:text-[40px]'>3. How We Use Your Information</p>
                            <p className='text-[18px] sm:text-[20px]'>We use the information we collect for the following purposes:</p>
                            <ul className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70 list-disc list-inside pl-4 mt-3 space-y-2'>
                                <li>To provide and deliver our themes and services</li>
                                <li>To process transactions</li>
                                <li>To send newsletters, updates, and promotional materials (if you opt in)</li>
                                <li>To improve our website and user experience</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </div>
                         <div className='max-w-[880px] w-full font-[Raleway]'>
                            <p className='mb-3 text-[35px] sm:text-[40px]'>4. Sharing Your Information</p>
                            <p className='text-[18px] sm:text-[20px]'>We do not sell your personal data. However, we may share your data with trusted third parties to help us run our business effectively, such as:</p>
                            <ul className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70 list-disc list-inside pl-4 mt-3 space-y-2'>
                                <li>Payment processors (e.g., Stripe, PayPal)</li>
                                <li>Email marketing providers (e.g., Mailchimp)</li>
                                <li>Analytics providers (e.g., Google Analytics)</li>
                            </ul>
                            <p className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70 pt-6'>
                                These third parties are bound by data protection agreements to safeguard your information.
                            </p>
                        </div>
                         <div className='max-w-[880px] w-full font-[Raleway]'>
                            <p className='mb-3 text-[35px] sm:text-[40px]'>5. Cookies and Tracking Technologies</p>
                            <p className='text-[18px] sm:text-[20px]'>We use cookies and similar technologies to:</p>
                            <ul className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70 list-disc list-inside pl-4 mt-3 space-y-2'>
                                <li>Analyze site traffic</li>
                                <li>Store user preferences</li>
                                <li>Improve overall experience</li>
                            </ul>
                            <p className='text-[18px] sm:text-[20px] text-[#020023] leading-[150%] font-medium opacity-70 pt-6'>
                                You can manage your cookie preferences through your browser settings.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
}
 