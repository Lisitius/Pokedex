import pika from "../assets/img/home/pikachu.png";

const Homebody = () => {
  return (
    <div className="homebody">
      <h1 className="title">Welcome</h1>
      <iframe
        className="video"
        width="854"
        height="480"
        src="https://www.youtube.com/embed/GtSmZns8v-Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img className="pikachu" src={pika} alt="" />
    </div>
  );
};

export default Homebody;
