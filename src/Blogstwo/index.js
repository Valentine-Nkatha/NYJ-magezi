
import "./index.css"
import React from "react";
import books from "../Assets/Screenshot from 2024-07-09 11-09-18 1.png";
import { Link } from "react-router-dom";


const Blogstwo=()=>{
    return(
        <div className="reading-section">
            <div>
                <img src={books} alt="Born a Crime" id="images"/>
            </div>
           
        
            <div className="trevor-Noah">
                <h4 id="born-crime">Born A Crime by Trevor Noah</h4>
                
                <p className="blogs-part">Born a Crime is an autobiographical memoir that was published in 2016 by Trevor Noah. The book provides insights into the social, political, and economic challenges faced in South Africa and beyond. Born a Crime is a strong reminder of the ongoing fight against unfair treatment, inequality, and the search for identity in today's society. 

Trevor Noah's story shows how strong people can be when they face tough times. He was born during apartheid to a white father from Switzerland and a black mother from the Xhosa tribe. He had to deal with a lot of racism about race. His story is about how people judge others based on skin color and how hard it is for those who go against society's expectations. It also shows how important it is to define yourself and take control of your own identity, especially when you are part of a system that oppresses you.

The impacts of apartheid still affect societies today, particularly in the areas of healthcare, education, employment, and the criminal justice system. The struggle against apartheid serves as a reminder of the ongoing need to fight racial discrimination and promote equality and justice for all individuals.

Trevor Noah also talks about how education can help people move up the social ladder and how having opportunities can shape where someone ends up in life. Even though things were really hard for him, Noah getting an education gave people hope and a way to get out of being poor. His story shows how important good education is in stopping the cycle of poverty and making society better for everyone.
<br/>
<br/>
Trevor Noah shares personal stories and thoughtful political insights. It includes Noah's observations on South Africa's political landscape, discussing the rise of the ANC and the complexities of navigating a multiracial identity under a Black-majority government.Using humor as a social tool:

While Noah was in school, He was a mixed-race student and he used humor to socialize with other students. He knew that he was not good at soccer but he was great at pretending. He would pretend to be the best player in the field and he would run and shout that he was the best and he would make dramatic gestures even though he was in the right position and never knew what was going on. The other kids would watch him and laugh but he knew that they were not laughing at him but they were laughing with him. Rc             

Humor in Difficult Situations:
There was one time when Trevor Noah was with his friends and they got pulled over by cops. He made the cops laugh and in the end, they let them go. He said that he hoped if they saw him as a funny guy they would forget that they were supposed to arrest him. There is also one time when Trevor Noah was with his friend and they were surrounded by a gang of thieves who wanted to steal their car. Trevor was scared but he did not want to show it, he started making jokes about the whole situation and the thieves looked at each other and they ended up walking away.



</p>
<div id="btn">
<button className="buttons"><Link to="/blogs">Back</Link></button>

            </div>
            </div>
            

        </div>
    )
};
export default Blogstwo;
