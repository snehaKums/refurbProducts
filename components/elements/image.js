import { getStrapiMedia } from "../../utils/media";
import PropTypes from "prop-types";
import { mediaPropTypes } from "../../utils/types";

const Image = ({ media, className,height,width }) => {
 // const { url, alternativeText } = media;
 // const fullUrl = getStrapiMedia(media);

  return (
    <img src={media} alt={""} className={className} height={height} width={width} />
  );
};

Image.propTypes = {
  media: mediaPropTypes.isRequired,
  className: PropTypes.string,
  height:PropTypes.number,
  width:PropTypes.number
};

export default Image;
