import pika from "../assets/img/home/pikachu.png";

const Homebody = () => {
  return (
    <div className="homebody">
      <h1 className="title">Welcome</h1>
      <div>
        <iframe
          className="video"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/GtSmZns8v-Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <img className="pikachu" src={pika} alt="" />
    </div>
  );
};

export default Homebody;
