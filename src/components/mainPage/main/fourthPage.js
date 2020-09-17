import React from 'react';


class FourthPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'pici-pici@mail.ru',
        };
        this.handleChange =this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({
            value: event.value
        })
    }
    render() {
        return (
            <div className={this.props.styleClass}>
                <article className="fourth-page content">
                    <div className='fourth-page__descridtion'>Take discount and gift</div>
                    {/* <form> */}
                        <div className='fourth-page__mail'><input type='email' value={this.state.value} onChange={this.handleChange} /> </div>
                        <div className='fourth-page__submit'><input type='submit' value='FOLLOW' /></div>
                    {/* </form> */}

                </article>
            </div>
        )
    }
}

export default FourthPage;