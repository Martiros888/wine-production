import React, { useState, useEffect, useMemo, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import wine1 from './wine1.jpg';
import './index.css';
import wine2 from './wine2.jpg';
import wine3 from './wine3.jpg';
import west from './west.jpg';
import west1 from './west1.jpg';
import logo from './logo.png';

function AboutPage() {
    return (
        <>
            <section className="AboutPage">
                <div className="image1">
                    <div className="name">
                        <p>Western Alco Company</p>
                    </div>
                </div>
                <div className="title">
                    <p>Our History</p>
                </div>
                <div className="image2">
                    <img src={wine1} />

                    <div className="text1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ea, dolores sequi alias quasi ipsam pariatur
                        voluptate esse dolorum, quae odit aliquam. Nulla eaque
                        error odio consequatur! Odit, consequatur? Et quas nam
                        deleniti mollitia, ipsa sed. Assumenda aliquid fuga sint
                        pariatur perspiciatis est officiis quis corporis nemo
                        earum eveniet corrupti officia necessitatibus magnam
                        tempore molestias natus non saepe magni incidunt in, a
                        accusamus perferendis excepturi! Ratione magni culpa
                        dignissimos nostrum eligendi veniam corrupti placeat
                        facere obcaecati quas sint deserunt non optio esse iure
                        fugit quia quam recusandae, natus deleniti tenetur id
                        neque. Eum minus asperiores veritatis illo laboriosam
                        similique in aliquam!
                    </div>
                </div>
                <div className="image2">
                    <img src={wine2} />

                    <div className="text1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ea, dolores sequi alias quasi ipsam pariatur
                        voluptate esse dolorum, quae odit aliquam. Nulla eaque
                        error odio consequatur! Odit, consequatur? Et quas nam
                        deleniti mollitia, ipsa sed. Assumenda aliquid fuga sint
                        pariatur perspiciatis est officiis quis corporis nemo
                        earum eveniet corrupti officia necessitatibus magnam
                        tempore molestias natus non saepe magni incidunt in, a
                        accusamus perferendis excepturi! Ratione magni culpa
                        dignissimos nostrum eligendi veniam corrupti placeat
                        facere obcaecati quas sint deserunt non optio esse iure
                        fugit quia quam recusandae, natus deleniti tenetur id
                        neque. Eum minus asperiores veritatis illo laboriosam
                        similique in aliquam!
                    </div>
                </div>
                <div className="image2">
                    <img src={wine3} />

                    <div className="text1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ea, dolores sequi alias quasi ipsam pariatur
                        voluptate esse dolorum, quae odit aliquam. Nulla eaque
                        error odio consequatur! Odit, consequatur? Et quas nam
                        deleniti mollitia, ipsa sed. Assumenda aliquid fuga sint
                        pariatur perspiciatis est officiis quis corporis nemo
                        earum eveniet corrupti officia necessitatibus magnam
                        tempore molestias natus non saepe magni incidunt in, a
                        accusamus perferendis excepturi! Ratione magni culpa
                        dignissimos nostrum eligendi veniam corrupti placeat
                        facere obcaecati quas sint deserunt non optio esse iure
                        fugit quia quam recusandae, natus deleniti tenetur id
                        neque. Eum minus asperiores veritatis illo laboriosam
                        similique in aliquam!
                    </div>
                </div>
                <div className="west">
                    <img src={west} />

                    <div className="text1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ea, dolores sequi alias quasi ipsam pariatur
                        voluptate esse dolorum, quae odit aliquam. Nulla eaque
                        error odio consequatur! Odit, consequatur? Et quas nam
                        deleniti mollitia, ipsa sed. Assumenda aliquid fuga sint
                        pariatur perspiciatis est officiis quis corporis nemo
                        earum eveniet corrupti officia necessitatibus magnam
                        tempore molestias natus non saepe magni incidunt in, a
                        accusamus perferendis excepturi! Ratione magni culpa
                        dignissimos nostrum eligendi veniam corrupti placeat
                        facere obcaecati quas sint deserunt non optio esse iure
                        fugit quia quam recusandae, natus deleniti tenetur id
                        neque. Eum minus asperiores veritatis illo laboriosam
                        similique in aliquam!
                    </div>
                </div>
                <div className="west1">
                    <img src={west1} />

                    <div className="text1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ea, dolores sequi alias quasi ipsam pariatur
                        voluptate esse dolorum, quae odit aliquam. Nulla eaque
                        error odio consequatur! Odit, consequatur? Et quas nam
                        deleniti mollitia, ipsa sed. Assumenda aliquid fuga sint
                        pariatur perspiciatis est officiis quis corporis nemo
                        earum eveniet corrupti officia necessitatibus magnam
                        tempore molestias natus non saepe magni incidunt in, a
                        accusamus perferendis excepturi! Ratione magni culpa
                        dignissimos nostrum eligendi veniam corrupti placeat
                        facere obcaecati quas sint deserunt non optio esse iure
                        fugit quia quam recusandae, natus deleniti tenetur id
                        neque. Eum minus asperiores veritatis illo laboriosam
                        similique in aliquam!
                    </div>
                </div>

                <div className="end">
                    <div>
                        <p className="p2">Address</p>
                        <p>Luc Massy Vins - Clos du Boux</p>
                        <p>Route de la Corniche 11</p>
                        <p>Vaud, Switzerland</p>
                    </div>
                    <div>
                        <p className="p2">Opening times</p>
                        <p>Monday to Friday 08h00 to 17h30</p>
                        <p>Visits and tasting upon request</p>
                        <p className="p2">Contact</p>
                        <p>Tél. +41 21 799 21 47</p>
                    </div>
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutPage = memo(AboutPage);
