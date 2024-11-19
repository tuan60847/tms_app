import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const { height, width } = Dimensions.get("window");

/**
 * Window width
 */
export const WINDOW_WIDTH = width;

/**
 * Window height
 */
export const WINDOW_HEIGHT = height;

/**
 * 44 - on iPhone X
 * 20 - on iOS device
 * X - on Android platforms (runtime value)
 * 0 - on all other platforms (default)
 */
export const STATUS_BAR_HEIGHT = getStatusBarHeight();
