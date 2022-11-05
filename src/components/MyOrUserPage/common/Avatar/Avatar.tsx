import ImageViewer from 'react-simple-image-viewer';
import s from './Avatar.module.scss';
import defaultAvatar from '../../../../assets/img/default.jpg';
import { useState } from 'react';

type Props = {
  avatar?: string;
  customImgClass?: string;
  wrapperClass?: string;
  canViewerBeOpened?: boolean;
};

const Avatar: React.FC<Props> = ({
  avatar,
  customImgClass,
  wrapperClass,
  canViewerBeOpened,
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = () => setIsViewerOpen(true);
  const closeImageViewer = () => setIsViewerOpen(false);

  const images = avatar ? [avatar] : [defaultAvatar];
  const imgElements = images.map((src, i) => (
    <img
      className={`${s.avatar__img} ${customImgClass}`}
      key={i}
      src={src}
      alt="avatar"
      onClick={openImageViewer}
    />
  ));

  return (
    <div className={`${s.avatar} ${wrapperClass}`}>
      {imgElements}
      {canViewerBeOpened && isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={0}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 200,
            padding: 50,
          }}
          closeOnClickOutside={true}
          disableScroll
        />
      )}
    </div>
  );
};

export default Avatar;
