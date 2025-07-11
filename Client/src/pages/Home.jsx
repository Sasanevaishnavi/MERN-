

export const  Home = () =>{
    return (
        <>
            <section className="section-hero">
                <div className="container grid grid-two-cols" >
                    <div className="hero-content">
                        <p >Now you can buy any this easly</p>
                        <h1 className="main-heading mg-3">Welcome in our store</h1>
                        <p>An online economic store is a digital platform that offers a wide range of affordable products to customers, focusing on cost-effectiveness and value for money. It provides convenient shopping from home with various categories like clothing, electronics, groceries, and more. The store aims to make quality goods accessible to everyone at budget-friendly prices. With secure payment options and home delivery, it ensures a smooth and reliable shopping experience.</p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">connect now </button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">learn more </button>
                            </a>

                        </div>                    
                    
                    </div>
                    
                    

                    <div className="hero-image">
                        <img src="home2.png" alt="home img" width="400" height="500" />
                    </div>
                
                
                </div>
                
            </section>    

        {/* 2nd Section - Analytics */}
                        <section className="section-analytics">
                        <div className="container grid grid-four-cols">
                            <div className="div1">
                            <h2>50+</h2>
                            <p>registered companies</p>
                            </div>
                            <div className="div1">
                            <h2>100,00+</h2>
                            <p>Happy Clients</p>
                            </div>
                            <div className="div1">
                            <h2>500+</h2>
                            <p>Well known Developers</p>
                            </div>
                            <div className="div1">
                            <h2>24/7</h2>
                            <p>Service</p>
                            </div>
                        </div>
                        </section>  
        {/* section 3   */}
        <section className="section-hero">
                <div className="container grid grid-two-cols" >
                    <div className="hero-image">
                        <img  src="home.png" alt="home img" width="400" height="500" />
                    </div>
                    <div className="hero-content">
                        <p >We are here to help you</p>
                        <h1 className="main-heading mg-3">Get Started Today</h1>
                        <p>Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let’s discuss how Thapa Technical can help your business thrive in the digital age.</p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">connect now </button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">learn more </button>
                            </a>

                        </div>                    
                    
                    </div>
                  
                </div>
                
            </section>    


        </>
    );
};
    