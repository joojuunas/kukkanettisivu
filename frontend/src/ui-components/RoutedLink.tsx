import Link, { LinkProps, LinkTypeMap } from '@mui/material/Link';
import React from 'react';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

export type RoutedLinkProps = LinkProps<LinkTypeMap['defaultComponent'], ReactRouterLinkProps>;

const RoutedLink: React.FunctionComponent<RoutedLinkProps> = props => <Link component={ReactRouterLink} {...props} />;

RoutedLink.displayName = 'RoutedLink';

export default RoutedLink;