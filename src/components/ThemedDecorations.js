import React from 'react'

export default class ThemedDecorations extends React.Component {
    render() {
        
        const wrapped = this.props.children.map(child => {
            return <div className={this.props.theme}>{child}</div>
        })
        
        return(
            <div className={this.props.theme}>
                {wrapped}
            </div>
        )
    }
}
