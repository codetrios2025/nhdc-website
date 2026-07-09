import { InstagramEmbed } from "react-social-media-embed";

const InstaVideo = ({data}) => {
  console.log(data)
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed
        url={data}
      />
    </div>
  );
}
export default InstaVideo;