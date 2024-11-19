import { ImageProps } from "@rneui/themed";
import React from "react";
import { ColorValue, View } from "react-native";
import SVG, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export type TruckProps = Omit<ImageProps, "source"> & {
  width?: number;
  height?: number;
  color?: ColorValue;
};

const TruckIcon = ({ color = "#3B82F6", width = 192, height = 36, ...otherProps }: TruckProps) => {
  // const [progress, setProgress] = useState(0.5);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevValue) => {
  //       if (prevValue >= 0.9) {
  //         // clearInterval(timer);
  //         return 0.5;
  //       } else {
  //         return prevValue + 0.033;
  //       }
  //     });
  //   }, 100);
  // }, [progress]);
  return (
    <View {...otherProps}>
      <SVG width={width} height={height} viewBox="0 0 192 36" fill="none">
        <G id="Frame" clipPath="url(#clip0_269_8057)">
          <G id="Group">
            <Path
              id="Vector"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.7234 44.7376H43.9714L45.3908 28.469H29.1428L27.7234 44.7376Z"
              fill="#F9A910"
              fillOpacity="0.7"
            />
            <Path
              id="Vector_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0559 61.0062H22.241L23.3073 48.8022H11.1222L10.0559 61.0062Z"
              fill="#F9A910"
              fillOpacity="0.5"
            />
            <Path
              id="Vector_3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.241 73.2068H33.3632L34.073 65.0742H25.9507L25.241 73.2068Z"
              fill="#F9A910"
              fillOpacity="0.7"
            />
            <Path
              id="Vector_4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 36.6016H8.12228L8.832 28.469H0.709714L0 36.6016Z"
              fill="#F9A910"
              fillOpacity="0.5"
            />
            <Path
              id="Vector_5"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M39.0376 8.136H47.1633L47.873 0H39.7507L39.0376 8.136Z"
              fill="#F9A910"
              fillOpacity="0.5"
            />
            <Path
              id="Vector_6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2515 24.401H25.4366L26.4995 12.2004H14.3143L13.2515 24.401Z"
              fill="#F9A910"
              fillOpacity="0.5"
            />
            <Path
              id="Vector_7"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50.8732 12.2004L49.8069 24.401H61.9921L63.0549 12.2004H50.8732Z"
              fill="#F9A910"
              fillOpacity="0.7"
            />
          </G>
          <Path
            id="Vector_8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.9716 44.738L42.9053 56.9386H55.0939L54.0276 69.1426H41.8391L38.5408 106.898H103.598L109.025 44.738H43.9716ZM64.8311 81.3397H56.7088L57.4185 73.2072H65.5408L64.8311 81.3397Z"
            fill="#F9A910"
          />
          <Path
            id="Vector_9"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M112.738 101.154L111.662 113.475H99.1509H66.2194C68.9314 116.465 70.392 120.413 70.0149 124.742H66.888C67.2034 121.141 65.9897 117.859 63.7406 115.366L62.9212 124.742H110.678H123.189C124.005 115.411 133.07 107.845 143.431 107.845C153.795 107.845 161.537 115.411 160.721 124.742H166.978H173.235H179.493L179.983 119.108C180.254 115.998 177.675 113.475 174.219 113.475L175.296 101.154L176.218 90.5911C177.576 75.04 164.674 62.4275 147.401 62.4275H116.122L112.738 101.154ZM40.7931 115.016C37.8891 117.546 35.9417 120.972 35.6126 124.742H32.4857C32.8629 120.413 35.0194 116.465 38.2526 113.475H30.984L30 124.742H39.9463L40.7931 115.016Z"
            fill="#51C469"
          />
          <Path
            id="Vector_10"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52.4776 110.66C43.8411 110.66 36.2879 116.966 35.6091 124.741C34.9302 132.517 41.3828 138.823 50.0159 138.823C58.6491 138.823 66.2056 132.517 66.8845 124.741C67.5668 116.966 61.1142 110.66 52.4776 110.66ZM51.8639 117.701C56.1805 117.701 59.4068 120.852 59.0674 124.741C58.7279 128.631 54.9496 131.782 50.6331 131.782C46.3165 131.782 43.0902 128.631 43.4296 124.741C43.7691 120.852 47.5474 117.701 51.8639 117.701Z"
            fill="#282A30"
          />
          <Path
            id="Vector_11"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M143.184 110.66C134.547 110.66 126.994 116.966 126.315 124.741C125.637 132.517 132.089 138.823 140.722 138.823C149.359 138.823 156.912 132.517 157.591 124.741C158.273 116.966 151.821 110.66 143.184 110.66ZM142.57 117.701C146.887 117.701 150.113 120.852 149.774 124.741C149.434 128.631 145.656 131.782 141.339 131.782C137.023 131.782 133.797 128.631 134.136 124.741C134.475 120.852 138.254 117.701 142.57 117.701Z"
            fill="#282A30"
          />
          <Path
            id="Vector_12"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M123.044 90.5915L124.765 70.8762H146.66C152.705 70.8762 157.988 73.0836 161.636 76.6504C165.288 80.2172 167.307 85.1469 166.83 90.5915L166.57 93.5849H122.784L123.044 90.5915Z"
            fill="white"
          />
          <Path
            id="Vector_13"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M159.641 79.3829C155.64 75.4728 150.069 72.8673 143.664 72.2871H146.541C149.304 72.2871 151.889 72.778 154.2 73.6706C156.597 74.594 158.715 75.9569 160.447 77.6493C162.178 79.3417 163.516 81.3568 164.349 83.5882C164.945 85.188 165.285 86.9079 165.333 88.7067C164.27 85.1605 162.302 81.9816 159.641 79.3829Z"
            fill="#F6F6F6"
          />
          <Path
            id="Vector_14"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.1694 124.742H28.1042C24.6517 124.742 22.0699 122.219 22.3408 119.109L22.8345 113.475H29.0882H32.1534L31.1694 124.742Z"
            fill="#51C469"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_269_8057">
            <Rect width="180" height="138.824" fill="white" />
          </ClipPath>
        </Defs>
      </SVG>
    </View>
  );
};

export default TruckIcon;
