import SundayImg from "../../src/Images/25.jpeg";
import Retreat from "../../src/Images/28.jpeg";
import Concert from "../../src/Images/37.jpeg";
import Conference from "../../src/Images/m1.jpeg";
import Crusade from "../../src/Images/o1.jpeg";
const Events = () => {
  return (
    <section
      id="Events"
      className="flex flex-row flex-wrap gap-10 md:max-w-screen-md my-5 mx-auto p-5"
    >
      <div className="w-auto md:w-96 shadow-md rounded p-5 md:max-w-52">
        <img className="rounded w-full" src={SundayImg} alt="sunday" />
        <div>
          <h3 className="text-black pt-2 font-bold text-xl">
            Come and Enjoy the Depth of God's Word | 3pm
          </h3>
          <small className="font-bold text-lg text-dark">Sunday Service</small>
        </div>
      </div>
      <div className="w-auto md:w-96 shadow-md rounded p-5 md:max-w-52">
        <img className="rounded w-full" src={Retreat} alt="sunday" />
        <div>
          <h3 className="text-black pt-2 font-bold text-xl">
            Communing with the Holy Spirit
          </h3>
          <small className="font-bold text-lg text-dark">Monthly Retreat</small>
        </div>
      </div>
      <div className="w-auto md:w-96 shadow-md rounded p-5 md:max-w-52">
        <img className="rounded w-full" src={Concert} alt="sunday" />
        <div>
          <h3 className="text-black pt-2 font-bold text-xl">
            Join as we Worship our father with our Voices
          </h3>
          <small className="font-bold text-lg text-dark">
            Saint Sing Concert
          </small>
        </div>
      </div>
      <div className="w-auto md:w-96 shadow-md rounded p-5 md:max-w-52">
        <img className="rounded w-full" src={Conference} alt="sunday" />
        <div>
          <h3 className="text-black pt-2 font-bold text-xl">
            Building Intelligent and Spirit filled Leaders
          </h3>
          <small className="font-bold text-lg text-dark">
            Leadership Conference (Christocentric Conference)
          </small>
        </div>
      </div>
      <div className="w-auto md:w-96 shadow-md rounded p-5 md:max-w-52">
        <img className="rounded w-full" src={Crusade} alt="sunday" />
        <div>
          <h3 className="text-black pt-2 font-bold text-xl">
            A thousand Souls for Christ
          </h3>
          <small className="font-bold text-lg text-dark">Crusades</small>
        </div>
      </div>
    </section>
  );
};

export default Events;
