import React, { Component } from 'react';
import './App.css';


class Browser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'https://www.google.com',
            canGoBack: false,
            canGoForward: false
        };
    };




    render() {
        return (
    
            <div>
                <input className="form-control" type="text" placeholder="Enter a URL" value={this.state.url} onChange={this.handleUrlChange} />
                <button className="btn btn-primary" onClick={!this.handleRefreshClick}>Refresh</button>
                <button className="btn btn-primary" onClick={this.handleGoClick}>Go</button>
                <button className="btn btn-primary" onClick={this.handleBackClick} disabled={!this.state.canGoBack}>Back</button>
                <button className="btn btn-primary" onClick={this.handleForwardClick} disabled={!this.state.canGoForward}>Forward</button>
                <iframe className="btn" src={this.state.url} onLoad={this.handleIframeLoad} ref={this.iframeRef}/>
            </div>
        );

     }
   //This functions, go forward , go back, url placeholder and refresh
 

    handleBackClick = () => {
        this.iframeRef.current.contentWindow.history.back();
    }

    handleForwardClick = () => {
        this.iframeRef.current.contentWindow.history.forward();
    }

    handleUrlChange = (event) => {
        this.setState({ url: event.target.value });
    }

    handleGoClick = () => {
        this.setState({ url: this.state.url });
    }

    handleRefreshClick = () => {
        this.iframeRef.current.contentWindow.location.reload();
    }

    handleIframeLoad = () => {
        this.setState({
            canGoBack: this.iframeRef.current.contentWindow.history.length > 1,
            canGoForward: this.iframeRef.current.contentWindow.history.length > 1
        });
      }

    iframeRef = React.createRef();

    }

  

export default Browser;
