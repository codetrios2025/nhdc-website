import { InstagramEmbed } from "react-social-media-embed";

const InstaVideo = ({data}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed
        url={data}
        width={328}
      />
    </div>
  );
}
export default InstaVideo;