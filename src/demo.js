import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class CheckboxList extends React.Component {
  state = {
    checked: [0]
  };

  handleClick = value => {
    this.setState({ [value]: !this.state[value] });
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {[0, 1, 2, 3].map(value => (
            <React.Fragment key={value}>
              <ListItem
                key={value}
                role={undefined}
                dense
                button
                onClick={this.handleToggle(value)}
                className={classes.listItem}
              >
                <Checkbox
                  checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={`Line item ${value + 1}`} />
                <ListItemText primary={`Line item ${value + 1}`} />
                <ListItemText primary={`Line item ${value + 1}`} />
                <ListItemText primary={`Line item ${value + 1}`} />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="Comments"
                    onClick={this.handleClick.bind(this, value)}
                  >
                    {this.state[value] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <Collapse in={this.state[value]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Morbi nec enim vitae velit imperdiet dignissim. 
                        Phasellus eu sapien sed ligula pharetra facilisis. 
                        Quisque in consectetur ante. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Proin lacus mauris, euismod nec dui nec, lobortis tempor elit. Praesent in gravida ex. In maximus tortor in lectus rhoncus, id varius magna tempor. Phasellus maximus lectus sodales velit malesuada, ut molestie eros vestibulum. 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse mollis euismod massa, a semper est varius vulputate. Nulla volutpat turpis a dignissim dictum. Praesent et lectus fermentum sem congue tincidunt. 
                        Praesent gravida tempus eros in condimentum.
                      </ListItemText>ł
                    </ListItem>
                  </List>
                </Collapse>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxList);
