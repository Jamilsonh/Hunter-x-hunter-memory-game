import styled from 'styled-components';

import Wallpaper from '../images/gif/HXH.gif';

const WallpaperContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${Wallpaper});
  background-size: cover;
`;

const AnimatedWallpaper = () => {
  return <WallpaperContainer></WallpaperContainer>;
};

export default AnimatedWallpaper;
