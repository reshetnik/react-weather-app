import React from 'react';

class Weather extends React.Component {

    render() {
        return (
            <div>
                {this.props.city &&

                    <div>
                        <p>Город: {this.props.city}</p>
                        <p>Температура: {this.props.temp}</p>
                        <p>Восход солнца: {this.props.sunrice}</p>
                        <p>Заход солнца: {this.props.sunset}</p>

                    </div>
                }
            </div>
        )
    }
}

export default Weather;
