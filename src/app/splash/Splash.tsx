import React, { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";

import { Text, TruckIcon } from "@/components/atoms";
import tw from "@/utils/tailwind";

const Splash = ({ initProgress = 0.2 }) => {
  const [progress, setProgress] = useState(initProgress);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevValue) => {
        if (prevValue >= 0.9 || initProgress >= 1) {
          clearInterval(timer);
          return 1;
        } else {
          return prevValue + 0.033;
        }
      });
    }, 100);
  }, [initProgress]);
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={tw`h-172 gap-22 flex items-center justify-center p-4`}>
        <View style={tw`w-48 gap-1 `}>
          {/* <Logo width={192} height={36} /> */}
          <TruckIcon width={180} height={256} />
          <View style={tw`w-44 flex-col items-start `}>
            <Text style={tw`px-4 py-0 text-5xl font-extrabold`}>GTMS</Text>
            <Text style={tw`-top-3 px-8 py-0 text-xl font-bold`}>Transport</Text>
          </View>
          {/* <ProgressBar
            props={{
              progress: progress,
              width: 100,
            }}
          /> */}
        </View>
      </View>
    </>
  );
};
export default Splash;
