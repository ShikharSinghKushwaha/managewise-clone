import React from 'react';
import first from './Images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg'
import second from './Images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg'
import third from './Images/dgHsIQVrsxRxtadpghDWppPujE.jpg'
import fourth from './Images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg'
import Testimonial from './Testimonial';

function TestimonialData(){
    const userInfo = [
        {
            comment:'"Manage wise has been proven as a Game changeer for e .The Product is aweome and some of the support are also invaluable.',
            image:first,
            name:'John Doe', 
            designation:'IT Manager'
        },
        {
            comment:'"Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivit.',
            image:second,
            name:'Adam Wane', 
            designation:'Tech Founder'
        },
        {
            comment:'"The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.',
            image:third,
            name:'Karl', 
            designation:'Developer'
        },
        {
            comment:'"I cant imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks',
            image:fourth,
            name:'Andrew Parker', 
            designation:'Software Engineer'
        },
        {
            comment:'"Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity',
            image:third,
            name:'John Doe', 
            designation:'IT Manager'
        },
        {
            comment:"'Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations'",
            image:second,
            name:'John Doe', 
            designation:'IT Manager'
        }

    ];
    return (
        <div >
            <article>
                  <Testimonial data={userInfo} />
            </article>
        </div>
    );
}

export default TestimonialData;