import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import blog from './Icons/blog.svg';
import close from './Icons/close.svg';
import codeOfConduct from './Icons/code-of-conduct.svg';
import eventbrite from './Icons/eventbrite.svg';
import emailList from './Icons/email.svg';
import github from './Icons/github.svg';
import home from './Icons/home.svg';
import isotype from './Icons/isotype.svg';
import linkExternal from './Icons/link-external.svg';
import logo from './Icons/logo.svg';
import menu from './Icons/menu.svg';
import plus from './Icons/plus.svg';
import questionMark from './Icons/question-mark.svg';
import services from './Icons/services.svg';
import slack from './Icons/slack.svg';
import twitter from './Icons/twitter.svg';
import youtube from './Icons/youtube.svg';

const ICONS = {
  blog,
  close,
  codeOfConduct,
  emailList,
  eventbrite,
  github,
  home,
  isotype,
  linkExternal,
  logo,
  menu,
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
