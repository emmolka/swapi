import React, { ReactNode, ReactElement } from "react";
import { FullPageWrapper, AppWrapper, LogoWrapper } from "./style";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps): ReactElement => (
  <FullPageWrapper>
    <LogoWrapper src="./starwars-logo.png"/>
    <AppWrapper> {children} </AppWrapper>
  </FullPageWrapper>
);

export default Wrapper;