import React, { ReactNode } from 'react';
import { Transition } from 'react-transition-group';

interface FadeAnimationProps {
  show: boolean;
  children: ReactNode;
}

const duration = 200;

const defaultStyle = `transition-opacity duration-${duration} ease-linear`;

const transitionStyles: {
  entering: string;
  entered: string;
  exiting: string;
  exited: string;
} = {
  entering: 'opacity-50',
  entered: 'opacity-100',
  exiting: 'opacity-100',
  exited: 'opacity-50',
};

const FadeAnimation: React.FC<FadeAnimationProps> = ({ show, children }) => (
  <Transition in={show} timeout={duration}>
    {(state) => (
      <div className={`${defaultStyle} ${transitionStyles[state]}`}>
        {children}
      </div>
    )}
  </Transition>
);

export default FadeAnimation;