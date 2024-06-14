import { FC, useEffect } from 'react';

interface ImagePreviewProps{
    dataUri: string;
    isFullscreen: boolean;
}

export const ImagePreview:FC<ImagePreviewProps> = ({ dataUri, isFullscreen }) => {
  const classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';
    useEffect(() => {
        console.log(dataUri);
    }, [dataUri])
    
  return (
    <div className={'demo-image-preview ' + classNameFullscreen}>
      <img src={dataUri} />
    </div>
  );
};

export default ImagePreview;