import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import blog from './Icons/blog.svg';
import calendar from './Icons/calendar.svg';
import close from './Icons/close.svg';
import facebook from './Icons/facebook.svg';
import github from './Icons/github.svg';
import handshake from './Icons/handshake.svg';
import home from './Icons/home.svg';
import isotype from './Icons/isotype.svg';
import linkExternal from './Icons/link-external.svg';
import logo from './Icons/logo.svg';
import meetup from './Icons/meetup.svg';
import menu from './Icons/menu.svg';
import plus from './Icons/plus.svg';
import questionMark from './Icons/question-mark.svg';
import services from './Icons/services.svg';
import slack from './Icons/slack.svg';
import twitter from './Icons/twitter.svg';
import youtube from './Icons/youtube.svg';

const ICONS = {
  blog,
  calendar,
  close,
  facebook,
  github,
  home,
  isotype,
  linkExternal,
  logo,
  meetup,
  menu,
  handshake,
  plus,
  questionMark,
  services,
  slack,
  twitter,
  youtube
};

const Icon = ({ height, name, width }) => {
  return (
    <div className="flex justify-center w-auto">
      <img src={ICONS[name]} alt="" className={classnames(height, width)} />
    </div>
  );
};

Icon.propTypes = {
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string
};

Icon.defaultProps = {
  height: 'h-auto',
  width: 'w-6'
};

export default Icon;
