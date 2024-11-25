import { MdPeopleOutline } from "react-icons/md";
import { LuClock9 } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import "../HomePages/PopularCourses.css"
function PopularCourses() {
    return (
        <>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                <div className="col-12 text-center py-5">
                        <h2>Popular Courses</h2>
                        <p>Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquetnean sollicitudin,<br></br>
                             lorem quis bibendum auci elit consequatipsutis sem nibh id elit.</p>
                        
                    </div>
                    <div className="col-12">
                    <div class="card-group">
                <div class="card mx-2">
                    <img src="public/homeimg/course-img-19.jpg" class="card-img-top position-relative card-img"  alt="..."/>
                    <div className="position-absolute end-0 top-0 bgci">
                    <CiHeart className="ciheart"/>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title ">Basic English for Kids</h5>
                            Melisa Jones <br></br>
                            <p class="card-text mt-3">Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer ius pri te fabulas molestiae necess</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary"><MdPeopleOutline />1 &nbsp; &nbsp;<LuClock9 /> 2 hours</small>
                        </div>
                </div>
                <div class="card mx-2">
                    <img src="public/homeimg/course-img-16.jpg  " class="card-img-top position-relative" alt="..."/>
                    <div className="position-absolute end-0 top-0 bgci">
                    <CiHeart />
                    </div>
                        <div class="card-body">
                            <h5 class="card-title ">Fun Yoga for Toddlers</h5>
                            Melisa Jones <br></br>
                            <p class="card-text mt-3">Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer ius pri te fabulas molestiae necess</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary"><MdPeopleOutline />1 &nbsp; &nbsp;<LuClock9 /> 2 hours</small>
                        </div>
                </div>
                <div class="card mx-2">
                    <img src="public/homeimg/course-img-20.jpg" class="card-img-top position-relative" alt="..."/>
                    <div className="position-absolute end-0 top-0 bgci"> 
                    <CiHeart />
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Weekend Music Lessons</h5>
                            Melisa Jones <br></br>
                           <p class="card-text mt-3">Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer ius pri te fabulas molestiae necess</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary"><MdPeopleOutline />1 &nbsp; &nbsp;<LuClock9 /> 2 hours</small>
                        </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>

            
        </>
    )
} export default PopularCourses