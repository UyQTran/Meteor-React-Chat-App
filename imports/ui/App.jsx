import React, { Component } from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab:0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(tabNumber) {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        this.setState({activeTab:tabNumber});
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(piskTheme) };
    }

    render() {
        return (
            <div>
                <ScrollWithPage>
                    <div className="air-above"/>
                    <div style={{display: 'flex', alignItems: 'space-between'}}>
                        <div style={navBarStyles}>PI:SK</div>
                        <Tabs
                            style={{width:550}}
                            onChange={this.handleChange.bind(this)}
                            value={this.state.activeTab}>
                            {tabs.map((tab, index)=>{
                                return (<Tab
                                    label={tab.label}
                                    value={tab.value}
                                    key={index}/>);
                            })}
                        </Tabs>
                    </div>
                </ScrollWithPage>
                {tabs[this.state.activeTab].component}
                <div>
                </div>
            </div>
        );
    }
}