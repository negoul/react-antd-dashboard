import React from 'react';
import {Navigate} from 'react-router-dom';
import {IS_LOGGED_IN} from 'config/variables.config';
import {MainLayout} from 'layout/Main.layout';
import {deleteObjectField} from 'utils/functions.util';
import {DEFAULT_PROPS, PROP_TYPES} from './Protected.config';

const Protected = ({component: Component, ...props}) => {
/*
  const isLoggedIn = UserService.isLoggedIn() || false;
*/
/*  const isLoggedIn = JSON.parse(localStorage.getItem(IS_LOGGED_IN)) || false;*/
/*
  if (isLoggedIn) return <Navigate to={props.redirectPath}/>;
*/

  const newProps = deleteObjectField(props, ['layout', 'redirectPath']);
  return (
    <MainLayout layout={props.layout}>
      <Component {...newProps} />
    </MainLayout>
  );
};

Protected.defaultProps = DEFAULT_PROPS;
Protected.propTypes = PROP_TYPES;

export {Protected};
