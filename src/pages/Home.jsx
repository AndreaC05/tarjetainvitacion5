import Contenido from "../components/Contenido";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <div className="container_home">
        <video
          className="video-background"
          src="https://res.cloudinary.com/dnao6nouz/video/upload/v1758121036/PinDown.io__sixthells_1758121011_wyvcft.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Video principal normal */}
        <video
          className="video-main"
          src="https://res.cloudinary.com/dnao6nouz/video/upload/v1758121036/PinDown.io__sixthells_1758121011_wyvcft.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="contenido_text">
          <Contenido />
        </div>
      </div>
    </>
  );
}