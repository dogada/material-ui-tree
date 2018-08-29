import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import styles from './style';

const MuiTreeLeaf = ({
  classes,
  onClick,
  id,
  icon,
  showButtons,
  actionButtons,
  text,
  textClassName
}) => (
  <ListItem
    dense
    button
    className={classes.treeNode}
    id={`tree-leaf-${id}`}
    onClick={onClick}
  >
    {
      icon && (
        <ListItemIcon>
          {icon}
        </ListItemIcon>
      )
    }
    <ListItemText
      inset
      primary={text}
      className={cn(classes.treeText, textClassName)}
    />
    {
      showButtons && (
        <ListItemSecondaryAction>
          {actionButtons}
        </ListItemSecondaryAction>
      )
    }
  </ListItem>
);

MuiTreeLeaf.defaultProps = {
  onClick: () => { },
  id: String(Math.random * 100),
  showButtons: false
};

MuiTreeLeaf.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string
  ]),
  showButtons: PropTypes.bool,
  actionButtons: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string
  ]),
  text: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string
  ]),
  textClassName: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(MuiTreeLeaf);
