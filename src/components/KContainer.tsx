import { SafeAreaView } from "react-native";
import { FC, ReactNode } from "react";

type KContainerProps = {
  children: ReactNode;
};

const KContainer: FC<KContainerProps> = ({ children }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#3466AF", alignItems: "center" }}
    >
      {children}
    </SafeAreaView>
  );
};

export default KContainer;
