import React from 'react';
import { ControlIcon, ControlIconConteiner } from '../../styles/HeaderControl/Control';

export const Control = ({ children, className }) => {
  return (
    <ControlIconConteiner>
      <ControlIcon to="/pudge" className="icon-bell"></ControlIcon>
      <ControlIcon to="/pudge" className="icon-commenting-o"></ControlIcon>
      <ControlIcon to="/pudge" className="icon-gift"></ControlIcon>
      <ControlIcon to="/setting" className="icon-cog-outline"></ControlIcon>
    </ControlIconConteiner>
  );
};
