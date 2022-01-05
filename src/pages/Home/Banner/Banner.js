import React from 'react';

const Banner = () => {
    return (


        <div class="container banner">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row align-items-center content">
                            <div class="col-md-5">
                                <h2>AROUND 11F UNISEX SUNGLASS</h2>
                                <p>Redefine your workday with the Around Unisex Sunglass. Perfectly balanced, Both men and women can use it.</p>
                                <button class="button-bannar mb-2">BUY NOW →</button>
                            </div>
                            <div class="col-md-7">

                                {/* <img src="{bannerImg} class="d-block img-width" alt="..."/> */}
                                <img src="https://i.ibb.co/fxWw7s3/Around-Uniex-Sunglass.jpg" class="d-block img-fluid img-width" alt="" />

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row align-items-center content">
                            <div class="col-md-5">
                                <h2>AVIATOR Z10 CASUAL SUNGLASS</h2>
                                <p>Stylish and beautiful.It will protected you eyes from sun shine, Both men and women can use it. Best Choice</p>
                                <button class="button-bannar mb-2">BUY NOW →</button>
                            </div>
                            <div class="col-md-7">
                                {/* <img src="img/banner-products/slider-1.png" class="d-block img-width" alt="..."> */}
                                <img src="https://i.ibb.co/5TdcN6Z/Aviator-Casual-Sunglass-jpg.jpg" class="d-block img-fluid img-width" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row align-items-center content">
                            <div class="col-md-5">
                                <h2>AVIATOR WS5 UNI SUNGLASS</h2>
                                <p>Make your travel and tour experience more enjoyable best Choice with Aviator Unisex WS5 Sunglass. Perfectly balanced.</p>
                                <button class="button-bannar mb-2">BUY NOW →</button>
                            </div>
                            <div class="col-md-7">
                                {/* <img src="img/banner-products/slider-3.png" class="d-block img-width" alt="..."> */}
                                <img src="https://i.ibb.co/HB97Brs/Aviator-Unisex-Sunglass.jpg" class="d-block img-fluid img-width" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;