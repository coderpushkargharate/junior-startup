import { FaBaseballBall } from "react-icons/fa";
import Shop from "./Shop";
import PlayTime from "../HomePages/PlayTime";
import Learningpage from "../HomePages/Learningpage";
import LatestEvents from "../HomePages/LatestEvents";


function Home() {
  return (
    <>
        <PlayTime/>
        <Learningpage/>
        <LatestEvents/>
    </>
  )
}
export default Home;