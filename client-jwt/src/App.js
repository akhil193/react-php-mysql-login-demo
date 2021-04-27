import React from "react";
import ReactDom from "react-dom";
import NavBar from "./NavBar.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import AboutUs from "./AboutUs.js";
import { Cards, Chart, CountryPicker } from './components';
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from './images/image.png';
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import axios from "axios";
import "./news.css";
import AuthHelperMethods from "./components/Auth/AuthHelperMethods.js";


  


class App extends React.Component {

    Auth = new AuthHelperMethods();

    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country ) => {

        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});


    }


    render(){
        const { data, country } = this.state;
        let confirm = {};
        if (this.Auth.loggedIn()) {
            confirm = this.Auth.getConfirm();
        }

        return (
            <div>
                <NavBar history={this.props.history} confirm={confirm} />
                <Header />
                <AboutUs />
                <div className = {styles.container}>
                    <img className={styles.image} scr= {coronaImage} alt="Covid-19" />
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Chart data={data} country={country}/>
                </div>   
                <br />
                <NewsContextProvider> 
                    <News />
                </NewsContextProvider>
                 
                <br />
                <Footer />

            </div>
        );
    }
}



export default App;