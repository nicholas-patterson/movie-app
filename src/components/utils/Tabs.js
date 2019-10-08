import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  google: {
    backgroundColor: "#dd4b39",
    color: "#fff",
    marginTop: "2rem",
    marginBottom: "2rem",
    marginLeft: ".5rem",
    "&:hover": {
      backgroundColor: "#dd4b39"
    }
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#3b5998"
    }
  },
  nav: {
    backgroundColor: "#1a202b"
  },
  indicator: {
    backgroundColor: "#39e0d4"
  },
  create: {
    backgroundColor: "#39e0d4",
    marginLeft: "2rem",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: "#39e0d4"
    }
  }
}));

const SimpleTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Tabs
          classes={{ indicator: classes.indicator }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab className="font-thin" label="Login" {...a11yProps(0)} />
          <Tab label="Sign Up" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel className="bg-gray-900" value={value} index={0}>
        <div className="flex flex-col content-center w-10/12 mx-auto">
          <Button variant="contained" className={classes.google}>
            <SvgIcon className="mr-2">
              <path
                fill="#fff"
                d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
              />
            </SvgIcon>
            Login in with Google
          </Button>
          <Button variant="contained" className={classes.facebook}>
            <SvgIcon className="mr-2">
              <path
                fill="#fff"
                d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
              />
            </SvgIcon>
            Login in with facebook
          </Button>
        </div>
      </TabPanel>
      <TabPanel className="bg-gray-900" value={value} index={1}>
        <div className="mx-auto w-10/12">
          <Button variant="contained" className={classes.google}>
            <SvgIcon className="mr-2">
              <path
                fill="#fff"
                d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
              />
            </SvgIcon>
            Sign up with Google
          </Button>
          <Button variant="contained" className={classes.facebook}>
            <SvgIcon className="mr-2">
              <path
                fill="#fff"
                d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
              />
            </SvgIcon>
            Sign Up with facebook
          </Button>
          <p className="text-gray-600 text-center text-1xl mt-4">or</p>
          <Button variant="contained" className={classes.create}>
            Create an Account
          </Button>
        </div>
      </TabPanel>
    </div>
  );
};

export default SimpleTabs;
