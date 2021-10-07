header = document.getElementById("header");
home = document.getElementById("home_nav");
projects = document.getElementById("projects_nav");
contact = document.getElementById("contact_nav");
container = document.getElementById("container");
time = document.getElementById("time");
padding = document.getElementById("padding");
padding.style.marginTop = header.offsetHeight+15 + "px";

container.innerHTML = home_maker();
 
time.innerHTML = new Date();
setInterval(time_setter,990);

window.addEventListener("resize",function(){
    let h = header.offsetHeight+15 + "px";
    padding.style.marginTop = h;
})

home.addEventListener('click',function(){
    container.innerHTML = home_maker();
})

projects.addEventListener('click',function(){
    container.innerHTML = projects_maker();
})


contact.addEventListener('click',function(){
    container.innerHTML = contact_maker();
})

function home_maker(){
    return `<div id="home_section">
                <div class="profile">
                    <img alt="Profile" src="https://raw.githubusercontent.com/shravan-sharma-github/img/main/profile.jpeg">
                    <h3>Shravan Sharma</h3>
                    <h5>MTech</h5>
                    <h6><a target="_blank" href="https://www.iiit.ac.in/" >IIIT Hyderabad</a></h6>
                    <h6><a target="_blank" href="https://drive.google.com/file/d/1kM-h-km0iOVhIcKq4E2irTwbnR1dn0c6/view?usp=sharing" >CV</a></h6>
                
                </div>
                <div class="content">
                    <h3>
                        We cannot solve our problems with the same thinking we used when we created them.
                    </h3>
                    <h4>-Albert Einstein</h4>
                    <div>
                        <p>I love this quote, I'm not sure about the resource but I like what actually this quote means.
                        </p>
                        <p>
                            Sometimes this quote means stopping and not working on the problem. Sometimes it means throwing out assumptions. Sometimes it means redefining the problem. but key point is if you are not getting solution to problem in certain time then that means you should change your way of thinking, change your perspective. 
                        </p>
                        <p>
                            This way of thinking help me a lot when I lost in solving some problem, because at the end not only solution matters but the time to solve that problem also matters.
                        </p>
                        <h3>About me</h3>
                        <p>I'm currently pursuing Mtech from <a target="_blank" href="https://www.iiit.ac.in/" >IIIT Hyderabad</a>  in CSE program, but I want to share my journey to IIITH
                        </p>
                        <p>
                            I started my journey or I would say the first achievement of my life is getting admission in <a target="_blank" href="https://www.navodaya.gov.in/nvs/nvs-school/NEEMUCH/en/about_us/About-JNV/">JNV Rampura</a> , I did my schooling from there. then I took one year gap to prepare for JEE.

                        </p>
                        <p> I got 30100 AIR in JEE ,with this rank I got selected in <a target="_blank" href="https://www.ietdavv.edu.in/">IET DAVV</a> , I did my BE from this collage and along with my collage I started preparing for GATE
                        </p>
                        <p>
                            I shocked when I see my result because I was expecting I can get about 1000 AIR in worst case but I landed up with 4200 AIR,
                        </p>
                        <p>
                            So I started preparing for<a target="_blank" href="https://pgadmissions.iiit.ac.in/pgee.html">PGEE</a>  and hard work paid off and I got seat in <a target="_blank" href="https://www.iiit.ac.in/" >IIIT Hyderabad</a> ,but the time between GATE result and PGEE result was very tough for me but one think I know that if I failed then one thing is sure that I have to change the way I prepare for GATE , and this mindset help me a lot . 
                        </p>
                        <p>
                            Thank you for reading :)
                        </p>
                    </div>
                </div>
            </div>`;
}

function projects_maker(){
    return `<div id="projects_section">
                <div class="dishanjali_app">
                    <div class="dishanjali_image">
                        <img alt="Dishanjali App" src="https://raw.githubusercontent.com/shravan-sharma-github/img/main/dishanjali.jpeg">
                    </div>
                    <div class="content">
                        <h3>Dishanjali App</h3>
                        <p>
                            Dishanjali is a social welfare organization. The aim of Dishanjali is to teach child which are belong to poor background, which not have good opportunity to learn in big schools.
                        </p>
                        <p>
                            So for that Dishanjali have coordinator for all center and there are 5 to 6 people under each coordinator which are responsible for teaching students. so the problem is to manage all this things and digitalize all coordinator, center , attendance and all. so for that I have created two apps one for admin and other for coordinator and other user so that it is easy to manage all things by admin
                        </p>
                        <p>
                            For development I used Android studio as IDE and firebase as database 
                        </p>
                    </div>
                </div>
                <div class="padding"></div>
                <div class="hisaab_app">
                    
                    <div class="content">
                        <h3>Hisaab App</h3>
                        <p>Hisaab app is an app to keep track of daily expenditures and also have option to manage how much money is borrowed or given by lend and borrow options.
                        </p>
                        <p>
                            The techstack I used for this is Android studio as an IDE and for maintain records I used Firebase database
                        </p>
                    </div>
                    <div class="hisaab_image">
                        <img alt="Hisaab App" src="https://raw.githubusercontent.com/shravan-sharma-github/img/main/hisaab.jpeg">
                    </div>
                </div>
            </div>`;
}

function contact_maker(){
    return `<div id="contact_section">
                <table>
                    <tr>
                        <td rowspan="5">
                            <table class="left_table">
                                <tr>
                                    <th >You can reach me through</th>
                                </tr>
                                <tr>
                                    <td>
                                        <a href = "#" class="fa fa-google"></a><span>   </span><span>shravan.sharma9977@gmail.com</span>
                                    </td>                        
                                </tr>
                                <tr>
                                    <td>
                                        <a href = "#" class="fa fa-linkedin"></a><span>   </span><span>https://www.linkedin.com/in/shravan-sharma-93a5a5194/</span>
                                        
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                        <a href = "#" class="fa fa-linkedin"></a><span>   </span><span>9755769503</span>
                                    </td>
                                </tr>
                            </table>
                        </th>
                        <th rowspan="5" class="or">OR</th>
                        <td rowspan="8">
                            <form >
                                <label>Name</label><br>
                                <input type="text" id="name"><br><br>
                                <label>Email</label><br>
                                <input type="email" id="email"><br><br>
                                <label>Contact Number</label><br>
                                <input type="number" id="number"><br><br>
                                <input type="submit" value="Submit" onclick="data_submit()">
                                <p>Submit Your details so that I can reach you</p>
                            </form>
                        </td>
                    </tr>
                </table>
            </div>`;
}

function data_submit(){
    window.alert("Your credential received, I will get back to you soon!");
    container.innerHTML = contact_maker();
}

function time_setter(){
    time.innerHTML = new Date();
}