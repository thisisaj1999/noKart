import React from 'react';

export interface IRouteConfig {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}