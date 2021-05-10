import { VideoPlayerModalContainer } from "./video-player-modal.styled";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import Modal, { IModalProps } from "../../../components/modal/modal";

const VideoPlayerModal: React.FC<IModalProps> = (props) => {
  return (
    <Modal {...props}>
      <VideoPlayerModalContainer>
        <div>
          <ShakaPlayer autoPlay src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        </div>
      </VideoPlayerModalContainer>
    </Modal>
  );
};

export default VideoPlayerModal;
